import Navbar from "@/app/(browser)/_components/navbar";
import Sidebar from "@/app/(browser)/_components/sidebar";
import Container from "@/app/(browser)/_components/container";

export default function BrowserLayout({children}: { children: React.ReactNode }) {
    return (
        <>
            <Navbar/>
            <div className="flex h-full pt-20">
                <Sidebar/>
                <Container>
                    {children}
                </Container>
            </div>

        </>
    )
}
