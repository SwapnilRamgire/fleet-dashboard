import { BASE_URL } from "@/config";
import type { VehiclesResponse } from "@/features/vehicles/types";

export const fetchVehicles = async (): Promise<VehiclesResponse> => {
    const response = await fetch(`${BASE_URL}/api/vehicles`);
    if (!response.ok) throw new Error("Network response was not ok");

    const data = (await response.json()) as VehiclesResponse;
    if (data.success !== true) throw new Error("Failed to fetch vehicles");

    return data;
};
