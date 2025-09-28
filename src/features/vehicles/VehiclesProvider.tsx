import { useEffect, useRef, useState, type FC, type ReactNode } from "react";
import VehiclesContext from "./VehiclesContext";
import useFetchVehicles from "./useFetchVehicles";
import { useVehicleSocket } from "./useSocketVehicles";
import useStatistics from "../statistics/useStatistics";
import { fetchStatistics } from "../statistics/fetchStatistics";

const VehiclesProvider: FC<{ children: ReactNode }> = ({ children }) => {
    const { vehicles, setVehicles, loading, error, loadVehicles, filter, setFilter } = useFetchVehicles();
    const [isUpdatingLive, setIsUpdatingLive] = useState<boolean | null>(null);
    const [selectedVehicle, setSelectedVehicle] = useState<string | null>(null);
    const { setStatistics } = useStatistics();
    const isFirstMessageDone = useRef(false);

    useEffect(() => {
        loadVehicles();
    }, [loadVehicles]);

    const updateStatistics = async () => {
        const res = await fetchStatistics();
        setStatistics(res.data);
    }

    useVehicleSocket(
        (data) => {
            const parsedData = JSON.parse(data);
            setVehicles(parsedData.data);
            if (isFirstMessageDone.current) {
                updateStatistics();
            }
            isFirstMessageDone.current = true;
        },
        (live) => setIsUpdatingLive(live),
        () => console.error("Socket error")
    );

    return (
        <VehiclesContext.Provider value={{ vehicles, loading, error, isUpdatingLive, selectedVehicle, filter, updateVehicles: setVehicles, setSelectedVehicle, setFilter }}>
            {children}
        </VehiclesContext.Provider>
    )
}


export default VehiclesProvider;