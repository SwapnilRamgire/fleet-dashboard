export interface Statisticks {
    total: number;
    idle: number;
    en_route: number;
    delivered: number;
    average_speed: number;
    timestamp: string;
}

export interface StatisticksResponse {
    success: boolean;
    data: Statisticks;
}
