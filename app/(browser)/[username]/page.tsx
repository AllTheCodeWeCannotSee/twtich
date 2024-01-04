import {getUserByUsername} from "@/lib/user-service";
import {notFound} from "next/navigation";
import {isFollowingUser} from "@/lib/follow-service";
import {Actions} from "@/app/(browser)/[username]/_components/actions";

interface UserPageProps {
    params: {
        username: string,
    }
}
export default async function UserPage({ params }: UserPageProps) {
    const user = await getUserByUsername(params.username);

    if (!user) {
        notFound();
    }

    const isFollowing = await isFollowingUser(user.id);
    return (
        <div>
            User: {params.username}
            <Actions isFollowing={isFollowing} userId={user.id} />
        </div>
    )
}
