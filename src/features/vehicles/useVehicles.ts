import { useContext } from "react";
import VehiclesContext from "./VehiclesContext";

const useVehicles = () => {
    const cntxt = useContext(VehiclesContext);
    if (cntxt === undefined) throw new Error("useVehicles must be used inside VehiclesProvider");
    return cntxt;
};

export default useVehicles;
