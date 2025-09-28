import { useCallback, useState } from "react";
import type { Statistics } from "./types";
import { fetchStatistics } from "./fetchStatistics";

const useFetchStatistics = () => {
    const [statistics, setStatistics] = useState<Statistics>({
        total: 0,
        idle: 0,
        en_route: 0,
        delivered: 0,
        average_speed: 0,
        timestamp: "",
    });
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);

    const loadStatistics = useCallback(async () => {
        setLoading(true);
        setError(false);
        try {
            const res = await fetchStatistics();
            setStatistics(res.data);
        } catch {
            setError(true);
        } finally {
            setLoading(false);
        }
    }, []);

    return { statistics, loading, error, loadStatistics, setStatistics };
}

export default useFetchStatistics;