import { useContext } from "react";
import StatisticsContext from "./StatisticsContext";

const useStatistics = () => {
    const cntxt = useContext(StatisticsContext);
    if (cntxt === undefined) throw new Error("useStatistics must be used inside StatisticsProvider");
    return cntxt;
};

export default useStatistics;
