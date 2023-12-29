"use client"

import {useSidebar} from "@/store/use-sidebar";
import {Button} from "@/components/ui/button";
import {ArrowLeftFromLine, ArrowRightFromLine} from "lucide-react";
import {Hint} from "@/components/hint";

export default function Toggle() {
    const {collapsed, onCollapse, onExpand} = useSidebar((state) => state);
    const label = collapsed ? "Extend" : "Collapse";
    return (
        <>
            {collapsed && (
                <div className="hidden lg:flex w-full items-center justify-center pt-4 mb-4">
                    <Hint label={label} side="right" asChild>
                        <Button
                            onClick={onExpand}
                            variant="ghost"
                            className="h-auto p-2"
                        >
                            <ArrowRightFromLine className="h-4 w-4"/>
                        </Button>
                    </Hint>
                </div>
            )}
            {!collapsed && (
                <div className="flex items-center p-3 pl-6 w-full mb-2">
                    <p className="font-semibold text-primary">
                        For you
                    </p>
                    <Hint label={label} side="right" asChild>
                        <Button
                            className="h-auto p-2 ml-auto"
                            variant="ghost"
                            onClick={onCollapse}
                        >
                            <ArrowLeftFromLine className="h-4 w-4"/>
                        </Button>
                    </Hint>

                </div>
            )}
        </>
    )
}
