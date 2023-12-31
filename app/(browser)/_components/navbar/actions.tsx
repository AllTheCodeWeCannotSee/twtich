import {currentUser, SignInButton, UserButton} from "@clerk/nextjs";
import {Button} from "@/components/ui/button";
import {Clapperboard} from "lucide-react";
import Link from "next/link";

export default async function Actions() {
    const user = await currentUser();
    return (
        <div className="flex items-center">
            {!user && (
                <SignInButton>
                    <Button size="sm" variant="primary">
                        Login
                    </Button>
                </SignInButton>
            )}
            {!!user && (
                <div className="flex items-center gap-x-4">
                    <Button
                        className="text-muted-foreground hover:text-primary"
                        size="sm"
                        variant="ghost"
                        asChild
                    >
                        <Link href={`/u/${user.username}`}>
                            <Clapperboard className="h-5 w-5 lg:mr-2"/>
                            <span className="hidden lg:block">Dashboard</span>
                        </Link>
                    </Button>
                    <UserButton
                        afterSignOutUrl="/"
                    />
                </div>
            )}
        </div>
    )
}
