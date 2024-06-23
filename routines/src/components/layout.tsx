import { ReactNode } from "react";
import Sidebar from "./sidebar";
import Navbar from "./sidebar";




export default function Layout({ children }: { children: ReactNode }) {
    return (
        <main className="flex min-h-screen min-w-full">
            <Sidebar>
            </Sidebar>
            <main className="p-10 grow">{children}</main> {/* Main content area */}
        </main>);

}