import { useEffect, type FC, type ReactNode } from "react";
import StatisticsContext from "./StatisticsContext";
import useFetchStatistics from "./useFetchStatistics";

const StatisticsProvider: FC<{ children: ReactNode }> = ({ children }) => {
    const { statistics, loading, error, loadStatistics, setStatistics } = useFetchStatistics();

    useEffect(() => {
        loadStatistics()
    }, [loadStatistics])

    return (
        <StatisticsContext.Provider value={{ data: statistics, loading, error, setStatistics }}>
            {children}
        </StatisticsContext.Provider>
    )
}

export default StatisticsProvider;