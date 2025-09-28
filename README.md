# 🚚 Fleet Dashboard

A real-time fleet monitoring dashboard built with **React, TypeScript, Vite, and shadcn/ui**.  
It fetches vehicle data via REST for the initial load and then listens to live updates via WebSocket (updates pushed every 3 minutes).

---

## ✨ Features

-   **Real-time updates**: Initial load via REST, live updates via WebSocket.
-   **Vehicle table** with filters (`Idle`, `En Route`, `Delivered`).
-   **Row details + modal with extended info** Opens on clicking a vehicle number in the table to display detailed information.
-   **Last updated badge** showing when the data was refreshed.
-   **Live status indicator** (active / starting / inactive).
-   Built with **shadcn/ui** (accessible, theme-ready components).

---

## ⚡ Tech Stack

-   **React 19 + TypeScript**
-   **Vite** (fast build + HMR)
-   **shadcn/ui + TailwindCSS** for UI
-   **WebSocket** for live updates
-   **Context API** for global state

---

## 🚀 Getting Started

### 1. Clone repo

```bash
git clone https://github.com/your-username/fleet-dashboard.git
cd fleet-dashboard
```

### 2. Install dependencies

```bash
npm install
# or
yarn install
```

### 3. Setup environment variables

```bash
VITE_BASE_URL=https://api.example.com
VITE_SOCKET_URL=wss://api.example.com
```

### 4. Run on the app

```bash
# Option 1: Development
npm run dev

# Option 2 (preferred): Production build + preview
npm run build
npm run preview
```
