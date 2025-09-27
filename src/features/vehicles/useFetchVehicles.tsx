import { useCallback, useState } from "react";
import type { Vehicle } from "./types";
import { fetchVehicles } from "./fetchVehicles";

const useFetchVehicles = () => {
    const [vehicles, setVehicles] = useState<Vehicle[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);

    const loadVehicles = useCallback(async () => {
        setLoading(true);
        setError(false);
        try {
            const res = await fetchVehicles();
            setVehicles(res.data);
        } catch {
            setError(true);
        } finally {
            setLoading(false);
        }
    }, []);

    return { vehicles, setVehicles, loading, error, loadVehicles };
}

export default useFetchVehicles;