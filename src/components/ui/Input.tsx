"use client"

import { SearchIcon } from "lucide-react";
import { useEffect, useState } from "react"

type Props = {
    search?: string;
    setSearch: (input: string) => void;

}

export const Input = ({search, setSearch}: Props) => {

    const [value, setValue] = useState<string>('');

    useEffect(() => {
        search && setValue(search as string);
    }, [search])

    const hendleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const newValue = e.target.value;
        setValue(newValue);
        setSearch(newValue);
    }

    const handleClick = () => {
        setSearch(value);
    }

    return (
        <div className="flex">
        <input
            autoFocus
            onChange={e => hendleChange(e)}
            value={value}
            type="text"
            className="w-full p-3 text-gray-500 focus:outline-none"
        />
        <button onClick={handleClick} className="p-3 cursor-pointer text-gray-300 bg-white border-l border-gray-300">
            <SearchIcon className="size-7" />
        </button>
        </div>
    )
}