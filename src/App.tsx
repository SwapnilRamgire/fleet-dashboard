import { useEffect } from "react"
import { Button } from "./components/ui/button"
import { fetchVehicles } from "./api/fetchVehicles"
import { fetchStatistics } from "./api/fetchStatistics";

function App() {

    useEffect(() => {
        (async () => {
            console.log(await fetchVehicles());
            console.log(await fetchStatistics());
        })();
    }, [])
    return (
        <div>
            Hello There
            <Button>Button Here</Button>
        </div>
    )
}

export default App
