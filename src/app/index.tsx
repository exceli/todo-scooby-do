import { createRoot } from "react-dom/client"
import App from "./App"
import "./styles/global.css"

const rootElement = document.getElementById("root")

if (!rootElement) {
    throw new Error("Root element is null")
}

const root = createRoot(rootElement)
root.render(<App />)
