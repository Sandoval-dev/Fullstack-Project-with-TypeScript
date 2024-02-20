'use client'
import React from 'react'
import { IconType } from 'react-icons';

type ButtonProps = {
  onSubmit: (e: React.MouseEvent<HTMLButtonElement>) => void;
  btnLabel: string;
  outLine?: boolean;
  icon?: IconType

}
const Button: React.FC<ButtonProps> = ({
  onSubmit,
  btnLabel,
  outLine,
  icon:Icon
}) => {
  return (
    <button className={`w-full h-12 rounded-md flex items-center justify-center gap-2 text-xl cursor-pointer ${outLine ? "border border-black" : "bg-black text-white"}`} onClick={onSubmit}>
      {Icon && <Icon size={25}/>}
      {btnLabel}
    </button>
  )
}

export default Button