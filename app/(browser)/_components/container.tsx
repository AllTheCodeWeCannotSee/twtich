"use client"
import {cn} from "@/lib/utils";
import {useSidebar} from "@/store/use-sidebar";
import { useMediaQuery } from "usehooks-ts";
import {useEffect} from "react";
interface ContainerProps {
    children: React.ReactNode
}

export default function Container( { children }: ContainerProps) {
    const {
        collapsed,
        onCollapse,
        onExpand,
    } = useSidebar((state) => state);
    const matches = useMediaQuery("(max-width: 1024px)");

    useEffect(() => {
        if (matches) {
            onCollapse();
        } else {
            onExpand();
        }
    }, [matches, onExpand, onCollapse])
    return (
        <div className={cn("flex-1", collapsed ? "ml-[70px]" : "ml-[70px] lg:ml-60")}>
            {children}
        </div>
    )
}
