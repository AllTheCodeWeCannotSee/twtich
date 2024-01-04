import Navbar from "@/app/(browser)/_components/navbar";
import Sidebar, {SidebarSkeleton} from "@/app/(browser)/_components/sidebar";
import Container from "@/app/(browser)/_components/container";
import {Suspense} from "react";

export default function BrowserLayout({children}: { children: React.ReactNode }) {
    return (
        <>
            <Navbar/>
            <div className="flex h-full pt-20">
                <Suspense fallback={<SidebarSkeleton />}>
                    <Sidebar/>
                </Suspense>
                <Container>
                    {children}
                </Container>
            </div>

        </>
    )
}
