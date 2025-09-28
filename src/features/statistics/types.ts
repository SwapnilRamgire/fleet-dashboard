export interface Statistics {
    total: number;
    idle: number;
    en_route: number;
    delivered: number;
    average_speed: number;
    timestamp: string;
}

export interface StatisticsResponse {
    success: boolean;
    data: Statistics;
}

export interface StatisticsContextValues {
    data: Statistics;
    loading: boolean;
    error: boolean;
    setStatistics: (newStatistics: Statistics) => void;
}
