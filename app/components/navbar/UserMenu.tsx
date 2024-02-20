'use client'
import Image from "next/image";
import { useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import UserMenuItem from "./UserMenuItem";
import { elementModalFunc, loginModalFunc, registerModalFunc } from "@/app/redux/modalSlice";
import { useAppDispatch } from "@/app/redux/hooks";
import { User } from "@prisma/client";
import { signOut } from "next-auth/react";


const UserMenu = ({ user }: { user: User | any | undefined }) => {
  const [openMenu, setOpenMenu] = useState(false)
  const dispatch = useAppDispatch()
  console.log(user)
  return (
    <div onClick={() => setOpenMenu(!openMenu)} className="relative flex items-center gap-2 cursor-pointer">
      <div className="mr-3 font-bold">{user?.name}</div>
      <RxHamburgerMenu size={25} />
      <Image
        width={35}
        height={35}
        src={ "https://upload.wikimedia.org/wikipedia/commons/9/99/Sample_User_Icon.png"}
        alt="" />
      {
        openMenu && (
          <div className="absolute bg-white shadow-lg shadow-gray-500 w-[150px] top-16 right-0">
            {
              user ?
                (
                  <>
                    <UserMenuItem
                      name="Create Listing"
                      onclick={() => {dispatch(elementModalFunc())}}
                    />
                    <UserMenuItem
                      name="Favorited"
                      onclick={() => { }}
                    />
                    <UserMenuItem
                      name="Sign Out"
                      onclick={() => { signOut() }}
                    />
                  </>
                ) :
                (
                  <>
                    <UserMenuItem
                      name="Sign in"
                      onclick={() => { dispatch(loginModalFunc()) }}
                    />
                    <UserMenuItem
                      name="Sign up"
                      onclick={() => { dispatch(registerModalFunc()) }}
                    />
                  </>
                )
            }

          </div>
        )
      }


    </div >


  )
}

export default UserMenu