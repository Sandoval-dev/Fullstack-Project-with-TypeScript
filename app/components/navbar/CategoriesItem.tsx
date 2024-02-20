'use client'

import { useRouter } from "next/navigation";
import { IconType } from "react-icons"

type CategoriesItemProps = {
    name: string;
    icon: IconType;
    selected:boolean
}

const CategoriesItem:React.FC<CategoriesItemProps> = ({
    name,
    icon: Icon,
    selected
}) => {
    const router = useRouter()
    return (
        <div onClick={() => router.push(`?category=${name}`)} className={` ${selected ? "bg-black border border-b-2 text-white" : "bg-white text-black"} flex rounded-md items-center gap-3 cursor-pointer border p-2 hover:bg-black hover:text-white transition-all`}>
            <Icon  size={20}/>
            <div className="tracking-wider">{name}</div>
        </div>

    )
}

export default CategoriesItem