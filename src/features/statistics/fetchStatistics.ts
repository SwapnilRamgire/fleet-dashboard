import { BASE_URL } from "@/config";
import type { StatisticsResponse } from "@/features/statistics/types";

export const fetchStatistics = async (): Promise<StatisticsResponse> => {
    const response = await fetch(`${BASE_URL}/api/statistics`);
    if (!response.ok) throw new Error("Network response was not ok");

    const data = (await response.json()) as StatisticsResponse;
    if (data.success !== true) throw new Error("Failed to fetch statistics");

    return data;
};
