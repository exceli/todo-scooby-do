import { Providers } from "./providers"
import { AppRouter } from "./router/AppRouter"

export default function App() {
    return (
        <Providers>
            <AppRouter />
        </Providers>
    )
}
