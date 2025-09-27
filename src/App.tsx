import Sidebar from "./components/Sidebar"

function App() {
    return (
        <main className="max-w-[1440px] mx-auto px-4">
            <header className="border-b py-5 mb-4">
                <h1 className="text-xl md:text-2xl font-bold mb-2">🚛 Fleet Tracking Dashboard</h1>
                <p className="text-sm">Real time monitoring | Case Study</p>
            </header>

            <section className="dashboard-wrapper">
                <Sidebar />
            </section>
        </main>
    )
}

export default App
