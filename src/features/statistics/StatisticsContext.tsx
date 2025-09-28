import { createContext } from "react";
import type { StatisticsContextValues } from "./types";

const StatisticsContext = createContext<StatisticsContextValues | undefined>(undefined);

export default StatisticsContext;