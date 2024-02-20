'use client'

import React from "react";

type UserMenuItemProps = {
    name:string;
    onclick: () => void;
}
const UserMenuItem:React.FC<UserMenuItemProps> = ({
    name,
    onclick
}) => {
  return (
    <div className="text-lg px-3 py-2 hover:bg-gray-100 cursor-pointer" onClick={onclick}>{name}</div>
  )
}

export default UserMenuItem