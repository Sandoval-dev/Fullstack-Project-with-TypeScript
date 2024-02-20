'use client'
import { FaUmbrellaBeach } from "react-icons/fa";
import { FaCampground } from "react-icons/fa";
import { FaHotel } from "react-icons/fa6";
import { MdCastle } from "react-icons/md";
import CategoriesItem from "./CategoriesItem";
import { useSearchParams } from "next/navigation";



export const categories = [
  {
    name: 'Tatil Köyü',
    icon: FaUmbrellaBeach
  },
  {
    name: 'Kamp',
    icon: FaCampground
  },
  {
    name: 'Otel',
    icon: FaHotel
  },
  {
    name: 'Villa',
    icon: MdCastle
  },
]
const Categories = () => {
  const params= useSearchParams()
  const urlItem=params?.get('category')
  console.log(urlItem)
  return (
    <div className="flex items-center gap-7">
      {categories.map((category, i) => (
        <CategoriesItem key={i} name={category.name} 
        icon={category.icon} selected={urlItem==category.name} />
      ))

      }

    </div>
  )
}

export default Categories