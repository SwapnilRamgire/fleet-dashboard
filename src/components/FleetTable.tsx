import useVehicles from "@/features/vehicles/useVehicles";
import { Badge } from "./ui/badge";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "./ui/table"

const FleetTable = () => {
    const { vehicles, filter } = useVehicles();

    const filteredVehicles = vehicles.filter(vehicle => (filter === "all" || vehicle.status === filter))

    if (!filteredVehicles.length) {
        return (
            <div className="p-4 text-center text-muted-foreground">
                No vehicles found.
            </div>
        );
    }

    return (
        <div className="table-wrapper width-[80%] overflow-auto h-full" style={{ scrollbarWidth: "thin" }}>
            <Table>
                <TableHeader className="sticky top-0 bg-accent">
                    <TableRow>
                        <TableHead>Vehicle</TableHead>
                        <TableHead>Driver</TableHead>
                        <TableHead>Status</TableHead>
                        <TableHead>Speed</TableHead>
                        <TableHead>Destination</TableHead>
                        <TableHead>ETA</TableHead>
                        <TableHead>Last Updated</TableHead>
                        <TableHead>Location</TableHead>
                    </TableRow>
                </TableHeader>

                <TableBody>
                    {filteredVehicles.map((vehicle) => (
                        <TableRow
                            key={vehicle.id}
                            className="cursor-pointer hover:bg-muted/50 transition animate-in"
                        >
                            <TableCell>{vehicle.vehicleNumber}</TableCell>
                            <TableCell>{vehicle.driverName}</TableCell>
                            <TableCell>
                                <Badge
                                    className="uppercase"
                                    variant={
                                        vehicle.status === "idle"
                                            ? "secondary"
                                            : vehicle.status === "en_route"
                                                ? "default"
                                                : vehicle.status === "delivered"
                                                    ? "outline"
                                                    : "secondary"
                                    }
                                >
                                    {vehicle.status.replace("_", " ")}
                                </Badge>
                            </TableCell>
                            <TableCell>{vehicle.speed}</TableCell>
                            <TableCell>{vehicle.destination}</TableCell>
                            <TableCell>{vehicle.estimatedArrival || "-"}</TableCell>
                            <TableCell>{vehicle.lastUpdated}</TableCell>
                            <TableCell>{vehicle.currentLocation.lat}, {vehicle.currentLocation.lng}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </div>
    )
}


export default FleetTable;