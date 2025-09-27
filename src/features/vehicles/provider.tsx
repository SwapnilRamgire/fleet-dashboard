import { useEffect, useState, type FC, type ReactNode } from "react";
import VehiclesContext from "./context";
import useFetchVehicles from "./useFetchVehicles";
import { useVehicleSocket } from "./useSocketVehicles";

const VehiclesProvider: FC<{ children: ReactNode }> = ({ children }) => {
    const { vehicles, setVehicles, loading, error, loadVehicles } = useFetchVehicles();
    const [isUpdatingLive, setIsUpdatingLive] = useState<boolean | null>(null);
    const [selectedVehicleId, setSelectedVehicleId] = useState<string | null>(null);

    useEffect(() => {
        loadVehicles();
    }, [loadVehicles]);

    useVehicleSocket(
        (msg) => console.log("Received:", msg),
        (live) => setIsUpdatingLive(live),
        () => console.error("Socket error")
    );

    return (
        <VehiclesContext.Provider value={{ vehicles, loading, error, isUpdatingLive, selectedVehicleId, updateVehicles: setVehicles, setSelectedVehicleId }}>
            {children}
        </VehiclesContext.Provider>
    )
}


export default VehiclesProvider;