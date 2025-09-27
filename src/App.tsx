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
    const { vehicles, loading } = useVehicles();

    if (loading) return <p>Loading...</p>
    console.log(vehicles);

    return (
        <div>MEow</div>
    )

}

export default App
