import useStatistics from "@/features/statistics/useStatistics";
import { Label } from "./ui/label";
import { BaggageClaim, ChartLine, ClockArrowDown, ClockFading, Rocket, Users } from "lucide-react";
import { useEffect, useState } from "react";
import { Skeleton } from "./ui/skeleton";

const Statistics = () => {
    const { data, loading } = useStatistics();
    return (
        <div className="statistics">
            <Label className="text-sm mb-2"><ChartLine width={14} /> Fleet Statistics</Label>
            {
                loading ? <Skeleton className="w-full h-28 mb-4"></Skeleton> : (
                    <>
                        <div className="statistics-wrapper grid grid-cols-2 gap-1">
                            <div className="card border border-accent p-2 rounded-sm text-md font-bold flex items-center justify-center flex-col">
                                <strong>{data.total}</strong>
                                <span className="text-xs text-secondary-foreground font-normal flex items-center gap-1 uppercase"> <Users width={12} />Total Fleets</span>
                            </div>
                            <div className="card border border-accent p-2 rounded-sm text-md font-bold flex items-center justify-center flex-col">
                                <strong>{data.average_speed}</strong>
                                <span className="text-xs text-secondary-foreground font-normal flex items-center gap-1 uppercase"><Rocket width={12} /> Average Speed</span>
                            </div>
                            <div className="card border border-accent p-2 rounded-sm text-md font-bold flex items-center justify-center flex-col">
                                <strong>{data.en_route}</strong>
                                <span className="text-xs text-secondary-foreground font-normal flex items-center gap-1 uppercase"><BaggageClaim width={12} /> Moving</span>
                            </div>
                            <div className="card border border-accent p-2 rounded-sm text-md font-bold flex items-center justify-center flex-col">
                                <strong>{new Date(data.timestamp).toLocaleTimeString([], { hour12: false, hour: "2-digit", minute: "2-digit" })}</strong>
                                <span className="text-xs text-secondary-foreground font-normal flex items-center gap-1 uppercase"><ClockArrowDown width={12} /> Last Updated</span>
                            </div>
                        </div>

                        <LastUpdatedBadge lastUpdated={data.timestamp} />
                    </>
                )
            }

        </div>
    )
};

const UPDATE_INTERVAL = 180_000;
const LastUpdatedBadge = ({ lastUpdated }: { lastUpdated: string }) => {
    const [now, setNow] = useState(Date.now());

    useEffect(() => {
        const timer = setInterval(() => setNow(Date.now()), 1000);
        return () => clearInterval(timer);
    }, []);

    const last = new Date(lastUpdated).getTime();
    const secondsAgo = Math.floor((now - last) / 1000);
    const nextIn = Math.max(0, UPDATE_INTERVAL / 1000 - secondsAgo);

    const formatTime = (secs: number) => {
        if (secs <= 0) return `few seconds`;
        if (secs < 60) return `~${secs}s`;
        const min = Math.floor(secs / 60);
        return `~${min}m`;
    };

    return (
        <div className="last-updated-live-lable text-xs flex gap-1 items-center mt-2 bg-accent py-1 px-2 rounded-sm">
            <ClockFading width={14} /> Updated {formatTime(secondsAgo)} ago {secondsAgo > 0 && `| Next update in ${formatTime(nextIn)}`}
        </div>
    )
}

export default Statistics;