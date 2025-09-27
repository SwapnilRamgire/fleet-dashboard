import { useCallback, useState } from "react";
import type { Filters, Vehicle } from "./types";
import { fetchVehicles } from "./fetchVehicles";

const useFetchVehicles = () => {
    const [vehicles, setVehicles] = useState<Vehicle[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);
    const [filter, setFilter] = useState<Filters>("all");

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

    return { vehicles, setVehicles, loading, error, loadVehicles, filter, setFilter };
}

export default useFetchVehicles;