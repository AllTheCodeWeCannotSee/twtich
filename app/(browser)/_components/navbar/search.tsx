"use client"
import {Input} from "@/components/ui/input";
import {SearchIcon, X} from "lucide-react";
import {Button} from "@/components/ui/button";
import {useState} from "react";
import qs from "query-string"
import {useRouter} from "next/navigation";

export default function Search() {
    const [value, setValue] = useState('');
    const router = useRouter();
    const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (!value) return;

        const url = qs.stringifyUrl({
            url: "/search",
            query: { term: value }
        }, { skipEmptyString: true});
        router.push(url);
    }
    return (
        <form
            onSubmit={onSubmit}
            className="relative w-full lg:w-[400px] flex items-center"
        >
            <Input
                placeholder="Search..."
                value={value}
                onChange={(e) => {setValue(e.target.value)}}
                className="rounded-r-none focus-visible:ring-0 focus-visible:ring-transparent focus-visible:ring-offset-0"
            />
            {value &&
                <X className="absolute top-2 right-14" onClick={() => {setValue('')}}/>
            }
            <Button
                className="rounded-l-none"
                type="submit"
                variant="secondary"
                size="sm">
                <SearchIcon className="h-5 w-5 text-muted-foreground"/>
            </Button>
        </form>
    )
}
