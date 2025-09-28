import FleetTable from "./components/FleetTable"
import Sidebar from "./components/Sidebar"

function App() {
    return (
        <main className="max-w-[1440px] mx-auto px-4 h-screen overflow-hidden flex flex-col">
            <header className="border-b py-2 md:py-5 mb-2 md:mb-4">
                <h1 className="text-xl md:text-2xl font-bold mb-1 md:mb-2">🚛 Fleet Tracking Dashboard</h1>
                <p className="text-sm">Real time monitoring | Case Study</p>
            </header>

            <section className="dashboard-wrapper flex-col md:flex-row flex gap-4 h-full flex-1 overflow-hidden md:px-2">
                <Sidebar />
                <FleetTable />
            </section>
        </main>
    )
}

export default App
