import { useEffect } from "react";
import { SOCKET_URL } from "@/config";

export const useVehicleSocket = (
    onMessage: (msg: string) => void,
    onStatusChange: (isLive: boolean) => void,
    onError: () => void
) => {
    useEffect(() => {
        const webSocket = new WebSocket(`${SOCKET_URL}/api/vehicles`);

        webSocket.onopen = () => onStatusChange(true);
        webSocket.onmessage = (event) => onMessage(event.data);
        webSocket.onerror = () => {
            onError();
            webSocket.close();
            onStatusChange(false);
        };
        webSocket.onclose = () => onStatusChange(false);

        return () => {
            if (webSocket.readyState === 1) {
                webSocket.close();
            }
            onStatusChange(false);
        };
    }, [onMessage, onStatusChange, onError]);
};