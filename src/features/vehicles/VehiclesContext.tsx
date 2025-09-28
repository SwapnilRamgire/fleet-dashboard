import type { VehiclesContextValues } from "@/features/vehicles/types";
import { createContext } from "react";

const VehiclesContext = createContext<VehiclesContextValues | undefined>(undefined);

export default VehiclesContext;