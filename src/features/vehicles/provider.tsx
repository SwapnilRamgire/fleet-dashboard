import { fetchVehicles } from "@/api/fetchVehicles";
import type { Vehicle } from "@/features/vehicles/types";
import { useEffect, useState, type FC, type ReactNode } from "react";
import VehiclesContext from "./context";

const VehiclesProvider: FC<{ children: ReactNode }> = ({ children }) => {
    const [vehicles, setVehicles] = useState<Vehicle[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);
    const [isUpdatingLive, setIsUpdatingLive] = useState<boolean | null>(null);
    const [selectedVehicleId, setSelectedVehicleId] = useState<string | null>(null);

    useEffect(() => {
        (async () => {
            setLoading(true);
            try {
                setVehicles((await fetchVehicles()).data);
            } catch {
                setError(true)
            } finally {
                setLoading(false);
            }
        })();


    }, [])

    return (
        <VehiclesContext.Provider value={{ vehicles, loading, error, isUpdatingLive, selectedVehicleId, updateVehicles: setVehicles, setSelectedVehicleId }}>
            {children}
        </VehiclesContext.Provider>
    )
}


export default VehiclesProvider;