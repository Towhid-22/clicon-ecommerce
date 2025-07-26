"use client";
import React, { useEffect, useRef } from "react";
import Container from "@/components/common/Container";
import Image from "next/image";
import { Input } from "@/components/ui/input";
import { PiShoppingCartSimpleBold, PiUserBold } from "react-icons/pi";
import { GrFavorite } from "react-icons/gr";
import { Search } from "lucide-react";
import Cart from "../cart/Cart";
import { useState } from "react";
import Link from "next/link";
import SigninPopup from "../account/Signin";
import { useSelector } from "react-redux";
import UserPopup from "../account/UserPopup";

const HeaderCenter = () => {
  const user = useSelector((state) => state.auth.userInfo);
  const [cartList, setCartList] = useState(false);
  const [signin, setSignin] = useState(false);
  const cartRef = useRef(null);
  const signinRef = useRef(null);
  const userRef = useRef(null);
  const [manageUser, setManageUser] = useState(false);
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (cartRef.current && !cartRef.current.contains(event.target)) {
        setCartList(false);
      }
      if (signinRef.current && !signinRef.current.contains(event.target)) {
        setSignin(false);
      }
      if (userRef.current && !userRef.current.contains(event.target)) {
        setManageUser(false);
      }
    };
    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);
  return (
    <div className="bg-[#1B6392] py-5">
      <Container>
        <div className="flex items-center justify-between">
          <Link href="/">
            <Image
              src="/logo.png"
              width={160}
              height={43.82}
              alt="logo"
              className="cursor-pointer"
            />
          </Link>
          <div className="w-[654px] relative">
            <Input
              placeholder="Search for anything..."
              className=" py-[14px] rounded-none bg-white placeholder:text-sm leading-5 font-poppins outline-none"
            />
            <Search className="absolute right-5 text-xl top-1/2 translate-y-[-50%] text-[#191C1F]" />
          </div>
          <ul className="flex gap-6 items-center">
            <li
              ref={cartRef}
              className="bg-transparent cursor-pointer hover:bg-transparent relative"
              onClick={() => setCartList(true)}
            >
              <PiShoppingCartSimpleBold className="text-white w-[32px] h-[32px]" />

              {cartList && <Cart className="absolute top-0 right-0" />}
            </li>
            <li className="bg-transparent cursor-pointer hover:bg-transparent">
              <GrFavorite className="text-white w-[32px] h-[32px]" />
            </li>
            {user ? (
              <h3
                onClick={() => setManageUser(true)}
                ref={userRef}
                className="text-white bg-[#FA8232] cursor-pointer w-[32px] h-[32px] flex items-center justify-center rounded-full font-extrabold relative"
              >
                {user.username.charAt(0)} {manageUser && <UserPopup />}{" "}
              </h3>
            ) : (
              <li
                ref={signinRef}
                onClick={() => setSignin(true)}
                className="bg-transparent relative cursor-pointer hover:bg-transparent"
              >
                <PiUserBold className="text-white w-[32px] h-[32px]" />
                {signin && <SigninPopup className="absolute top-0 right-0" />}
              </li>
            )}
          </ul>
        </div>
      </Container>
    </div>
  );
};

export default HeaderCenter;
