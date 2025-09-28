import type { Filters } from "@/features/vehicles/types";
import useVehicles from "@/features/vehicles/useVehicles";
import { cn } from "@/lib/utils";
import { Wifi, WifiOff, Loader2, Filter } from "lucide-react";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./ui/select";
import { Label } from "./ui/label";
import Statistics from "./Statistics";
import { Skeleton } from "./ui/skeleton";

const Sidebar = () => {
    return (
        <div className="left-wrap w-[calc(20%-16px)] flex flex-col shrink-0 h-fit sticky top-0">
            <LiveStatusIndicator />
            <VehicleFilters />
            <Statistics />
        </div>
    )
}

const VehicleFilters = () => {
    const { filter, setFilter, loading } = useVehicles();

    const FILTER_OPTIONS: { value: Filters; label: string }[] = [
        { value: "all", label: "All" },
        { value: "idle", label: "Idle" },
        { value: "en_route", label: "En Route" },
        { value: "delivered", label: "Delivered" },
    ];

    return (
        <div className="vehicle-filters pb-4 border-b mb-4 w-full">
            <Label htmlFor="filter-selector" className="text-sm mb-2"><Filter width={14} /> Filter By Status</Label>
            {loading ? <Skeleton className="w-full h-10 mb-4"></Skeleton> :
                <Select
                    name="filter-selector"
                    value={filter}
                    onValueChange={(value) => setFilter(value as Filters)} // cast string → Filters
                >
                    <SelectTrigger className="w-full">
                        <SelectValue placeholder="Filter By Status" />
                    </SelectTrigger>
                    <SelectContent>
                        {FILTER_OPTIONS.map((opt) => (
                            <SelectItem key={opt.value} value={opt.value}>
                                {opt.label}
                            </SelectItem>
                        ))}
                    </SelectContent>
                </Select>
            }
        </div>
    )
}

const LiveStatusIndicator = () => {
    const { isUpdatingLive } = useVehicles();
    const statusMap = {
        active: {
            icon: <Wifi className="w-5 h-5 text-green-500" />,
            text: "Live Updates Active",
            classes: "text-green-500 border-green-500",
        },
        starting: {
            icon: <Loader2 className="w-5 h-5 text-orange-500 animate-spin" />,
            text: "Starting Live Updates...",
            classes: "text-orange-500 border-orange-500",
        },
        inactive: {
            icon: <WifiOff className="w-5 h-5 text-red-500" />,
            text: "Live Updates Inactive",
            classes: "text-red-500 border-red-500",
        },
    };

    const state =
        isUpdatingLive === true
            ? statusMap.active
            : isUpdatingLive === null
                ? statusMap.starting
                : statusMap.inactive;

    return (
        <div
            className={cn(
                "flex items-center gap-2 w-full p-4 rounded-md border transition-colors mb-4",
                state.classes
            )}
        >
            {state.icon}
            <span className="font-medium">{state.text}</span>
        </div>
    );
};

export default Sidebar;
