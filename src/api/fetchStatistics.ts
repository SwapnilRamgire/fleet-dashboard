import { BASE_URL } from "@/config";
import type { StatisticksResponse } from "@/types/statistic";

export const fetchStatistics = async (): Promise<StatisticksResponse> => {
    const response = await fetch(`${BASE_URL}/api/statistics`);
    if (!response.ok) throw new Error("Network response was not ok");

    const data = (await response.json()) as StatisticksResponse;
    if (data.success !== true) throw new Error("Failed to fetch statistics");

    return data;
};
