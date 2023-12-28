import Navbar from "@/app/(browser)/_components/navbar";

export default function BrowserLayout({children}: { children: React.ReactNode }) {
    return (
        <>
            <nav>
                <Navbar />
            </nav>
            <div className="flex pt-20">
                {children}
            </div>

        </>
    )
}
