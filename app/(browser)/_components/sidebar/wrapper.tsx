"use client"
import {useSidebar} from "@/store/use-sidebar";
import {cn} from "@/lib/utils";
import {useEffect, useState} from "react";
import {ToggleSkeleton} from "@/app/(browser)/_components/sidebar/toggle";
import {RecommendedSkeleton} from "@/app/(browser)/_components/sidebar/recommend";
import {FollowingSkeleton} from "@/app/(browser)/_components/sidebar/following";

interface WrapperProps {
    children: React.ReactNode,
}

export default function Wrapper({ children }: WrapperProps) {
    const [isClient, setIsClient] = useState(false);

    useEffect(() => {
        setIsClient(true);
    }, [])
    const { collapsed } = useSidebar((state) => state);

    if (!isClient) return (
        <aside className="fixed w-[70px] lg:w-60 left-0 flex flex-col h-full bg-background border-r border-[#2D2EE35] z-50">
            <ToggleSkeleton />
            <FollowingSkeleton />
            <RecommendedSkeleton />
        </aside>
    );
    return (
        <aside className={cn(
            "fixed w-60 left-0 flex flex-col h-full bg-background border-r border-[#2D2EE35] z-50" +
            "", collapsed && ("w-[70px]"))}>
            {children}
        </aside>
    )
}
