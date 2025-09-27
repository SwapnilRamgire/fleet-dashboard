export interface DashboardStats {
    total: number;
    idle: number;
    en_route: number;
    delivered: number;
    average_speed: number;
    timestamp: string;
}

export interface DashboardApiResponse {
    success: boolean;
    data: DashboardStats;
}
