"use client"
import {useSidebar} from "@/store/use-sidebar";
import {cn} from "@/lib/utils";

interface WrapperProps {
    children: React.ReactNode,
}

export default function Wrapper({ children }: WrapperProps) {
    const { collapsed } = useSidebar((state) => state);
    return (
        <aside className={cn(
            "fixed w-60 left-0 flex flex-col h-full bg-background border-r border-[#2D2EE35] z-50" +
            "", collapsed && ("w-[70px]"))}>
            {children}
        </aside>
    )
}
