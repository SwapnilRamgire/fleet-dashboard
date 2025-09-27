interface Location {
    lat: number;
    lng: number;
}

export interface Vehicle {
    id: string;
    vehicleNumber: string;
    driverName: string;
    driverPhone: string;
    status: "idle" | "en_route" | "delivered";
    destination: string;
    currentLocation: Location;
    speed: number;
    lastUpdated: string;
    estimatedArrival: string | null;
    batteryLevel: number;
    fuelLevel: number;
}

export interface VehiclesResponse {
    success: boolean;
    data: Vehicle[];
    total: number;
    timestamp: string;
}
export interface VehicleResponse {
    success: boolean;
    data: Vehicle;
    timestamp: string;
}

export type Filters = "all" | "idle" | "en_route" | "delivered";

export interface VehiclesContextValues {
    vehicles: Vehicle[];
    loading: boolean;
    error: boolean;
    isUpdatingLive: boolean | null;
    selectedVehicleId: string | null;
    filter: Filters;
    updateVehicles: (newVehicle: Vehicle[]) => void;
    setSelectedVehicleId: (newSelectedVehicleId: string | null) => void;
    setFilter: (newFilter: Filters) => void;
}
