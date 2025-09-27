import { Button } from "./components/ui/button"
import VehiclesProvider from "./features/vehicles/provider";
import useVehicles from "./features/vehicles/useVehicles";

function App() {
    return (
        <div>
            Hello There
            <Button>Button Here</Button>
            <VehiclesProvider>
                <Temp />
            </VehiclesProvider>
        </div>
    )
}

function Temp() {
    const { loading, isUpdatingLive } = useVehicles();
    if (loading) return <p>Loading...</p>

    return (
        <div>
            {isUpdatingLive && (<p>Updating live baby</p>)}
        </div>
    )
}

export default App
