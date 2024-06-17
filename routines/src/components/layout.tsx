import Navbar from "./navbar";




export default function Layout({ children }) {
    return (
        <main className="flex min-h-screen flex-col items-center justify-between p-24">

            <main>{children}</main>

        </main>
    )
}