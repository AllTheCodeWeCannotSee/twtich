import Logo from "@/app/(browser)/_components/navbar/logo";
import Search from "@/app/(browser)/_components/navbar/search";
import Actions from "@/app/(browser)/_components/navbar/actions";

export default function Navbar() {
    return (
        <div className="fixed top-0 w-full h-20 z-[49] bg-[#252731] px-2 lg:px-4 flex items-center justify-between shadow-sm">
            <Logo />
            <Search />
            <Actions />
        </div>
    )
}
