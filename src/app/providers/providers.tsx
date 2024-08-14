import { TodoProvider } from "@/features/todo"

export const Providers = ({ children }: { children: React.ReactNode }) => {
    return <TodoProvider>{children}</TodoProvider>
}
