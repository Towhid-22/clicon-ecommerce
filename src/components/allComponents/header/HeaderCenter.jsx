import React from 'react'
import Container from '@/components/common/Container'
import Image from 'next/image'
import { Input } from '@/components/ui/input'
import { PiShoppingCartSimpleBold, PiUserBold } from "react-icons/pi";
import { GrFavorite } from "react-icons/gr";
import { Search } from "lucide-react";


const HeaderCenter = () => {
  return (
    <div className="bg-[#1B6392] py-5">
      <Container>
        <div className="flex items-center justify-between">
          <Image
            src="/logo.png"
            width={160}
            height={43.82}
            alt="logo"
            className="cursor-pointer"
          />
          <div className="w-[654px] relative">
            <Input
              placeholder="Search for anything..."
              className=" py-[14px] rounded-none bg-white placeholder:text-sm leading-5 font-poppins outline-none"
            />
            <Search className="absolute right-5 text-xl top-1/2 translate-y-[-50%] text-[#191C1F]" />
          </div>
          <ul className="flex gap-6 items-center">
            <li
              className="bg-transparent cursor-pointer hover:bg-transparent relative"
            >
              <PiShoppingCartSimpleBold className="text-white w-[32px] h-[32px]" />

            </li>
            <li className="bg-transparent cursor-pointer hover:bg-transparent">
              <GrFavorite className="text-white w-[32px] h-[32px]" />
            </li>
            <li
              className="bg-transparent cursor-pointer hover:bg-transparent"
            >
              <PiUserBold className="text-white w-[32px] h-[32px]" />
            </li>
          </ul>
        </div>
      </Container>
    </div>
  )
}

export default HeaderCenter