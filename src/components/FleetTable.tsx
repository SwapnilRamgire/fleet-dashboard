import useVehicles from "@/features/vehicles/useVehicles";
import { Badge } from "./ui/badge";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "./ui/table"
import { Dialog, DialogHeader, DialogContent, DialogDescription, DialogTitle } from "./ui/dialog";
import { Battery, Fuel, Gauge, MapPinned, Milestone, Navigation, PhoneCallIcon, Truck, User2 } from "lucide-react";
import { Progress } from "./ui/progress";

const FleetTable = () => {
    const { vehicles, filter, setSelectedVehicle, selectedVehicle } = useVehicles();

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
                            onClick={() => setSelectedVehicle(vehicle)}
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

            <Dialog open={!!selectedVehicle} onOpenChange={() => setSelectedVehicle(null)}>
                <DialogContent>
                    <DialogHeader className="border-b pb-3">
                        <DialogTitle className="flex items-center gap-2"><Truck /> {selectedVehicle?.vehicleNumber}</DialogTitle>
                        <DialogDescription className="flex items-center gap-1"><User2 width={12} />{selectedVehicle?.driverName} | <span className="capitalize">{selectedVehicle?.status.replace("_", " ")}</span></DialogDescription>
                    </DialogHeader>
                    <div className="vehicle-meta grid grid-cols-2 gap-3">
                        <div className="card px-4 py-3 bg-accent rounded-lg border-l-4 border-blue-600">
                            <div className="header-line flex text-xs items-center gap-1 uppercase"><Milestone width={14} />Status</div>
                            <p className="font-bold capitalize">
                                {selectedVehicle?.status.replace("_", " ")}
                            </p>
                        </div>
                        <div className="card px-4 py-3 bg-accent rounded-lg border-l-4 border-blue-600">
                            <div className="header-line flex text-xs items-center gap-1 uppercase"><Gauge width={14} />Speed</div>
                            <p className="font-bold">
                                {selectedVehicle?.speed} mph
                            </p>
                        </div>
                        <div className="card px-4 py-3 bg-accent rounded-lg border-l-4 border-blue-600">
                            <div className="header-line flex text-xs items-center gap-1 uppercase"><User2 width={14} />Driver</div>
                            <p className="font-bold">
                                {selectedVehicle?.driverName}
                            </p>
                        </div>
                        <div className="card px-4 py-3 bg-accent rounded-lg border-l-4 border-blue-600">
                            <div className="header-line flex text-xs items-center gap-1 uppercase"><PhoneCallIcon width={14} />Phone</div>
                            <a className="font-bold" href={`tel:${selectedVehicle?.driverPhone}`}>
                                {selectedVehicle?.driverPhone}
                            </a>
                        </div>
                        <div className="card px-4 py-3 bg-accent rounded-lg border-l-4 border-blue-600">
                            <div className="header-line flex text-xs items-center gap-1 uppercase"><MapPinned width={14} />Destination</div>
                            <p className="font-bold">
                                {selectedVehicle?.destination}
                            </p>
                        </div>
                        <div className="card px-4 py-3 bg-accent rounded-lg border-l-4 border-blue-600">
                            <div className="header-line flex text-xs items-center gap-1 uppercase"><Navigation width={14} />Destination</div>
                            <p className="font-bold">
                                {selectedVehicle?.currentLocation.lat.toFixed(6)}, {selectedVehicle?.currentLocation.lng.toFixed(6)}
                            </p>
                        </div>
                        <div className="card px-4 py-3 bg-accent rounded-lg border-l-4 border-blue-600">
                            <div className="header-line flex text-xs items-center gap-1 uppercase"><Battery width={14} />Battery Level</div>
                            <p className="font-bold mb-1">
                                {selectedVehicle?.batteryLevel}%
                            </p>
                            <Progress className="h-1.5" value={selectedVehicle?.batteryLevel} />
                        </div>
                        <div className="card px-4 py-3 bg-accent rounded-lg border-l-4 border-blue-600">
                            <div className="header-line flex text-xs items-center gap-1 uppercase"><Fuel width={14} />Fuel Level</div>
                            <p className="font-bold mb-1">
                                {selectedVehicle?.fuelLevel}%
                            </p>
                            <Progress className="h-1.5" value={selectedVehicle?.fuelLevel} />
                        </div>
                    </div>
                </DialogContent>
            </Dialog>
        </div>
    )
}


export default FleetTable;