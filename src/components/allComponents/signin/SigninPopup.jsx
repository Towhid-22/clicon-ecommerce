"use client";
import React, { useRef } from "react";
import Container from "@/components/common/Container";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { FiEye } from "react-icons/fi";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { FaArrowRight } from "react-icons/fa6";
import { GrClose } from "react-icons/gr";

const SigninPopup = () => {
  // const [show, setShow] = useState(true);
  return (
    <div className="font-poppins absolute top-14.5 right-0 z-50 shadow-2xl">
      <Container>
        <div className="w-[424x] bg-white rounded-[4px] p-8">
          <h3 className="font-semibold text-xl leading-7 text-[#191c1f] mb-5 text-center">
            Sign in to your account
          </h3>
          <div>
            <div className="w-[360px]">
              <Label
                htmlFor="email"
                className={`text-sm leading-5 text-[#191C1F] mb-2`}
              >
                Email Address
              </Label>
              <Input
                type="email"
                className={` rounded-[2px] outline-none  py-[22px]`}
              />
            </div>
            <div className="w-[360px] mt-4">
              <div className="flex items-center justify-between">
                <Label
                  htmlFor="password"
                  className={`text-sm leading-5 text-[#191C1F] mb-2`}
                >
                  Password
                </Label>
                <p className="font-medium text-sm leading-5 text-[#2DA5F3]">
                  Forget Password
                </p>
              </div>
              <div className="relative">
                <Input
                  type="password"
                  className={`w-[360px] rounded-[2px] outline-none  py-[22px]`}
                />
                <FiEye className="w-5 h-5 absolute top-2/4 right-4 translate-y-[-50%]" />
              </div>
              <div className="mt-5">
                <Button
                  className={`w-full font-poppins text-sm leading-12 tracking-[1.2%] font-bold text-white bg-[#FA8232] rounded-[2px] uppercase hover:bg-[#FA8232] z-50 py-6 cursor-pointer`}
                >
                  Login <FaArrowRight className="font-bold w-6 h-6" />
                </Button>
                <div className="flex items-center justify-center gap-2 mt-6 mb-3">
                  <div className="w-[100px] h-[1px] bg-[#E4E7E9]"></div>
                  <p className="font-medium text-sm leading-5 text-[#77878F]">
                    Don’t have account
                  </p>
                  <div className="w-[100px] h-[1px] bg-[#E4E7E9]"></div>
                </div>
                <Button
                  className={`w-full font-poppins text-sm leading-12 tracking-[1.2%] font-bold bg-white text-[#FA8232] rounded-[2px] uppercase hover:bg-white z-50 border-2 border-[#FFE7D6] py-6 mt-3 cursor-pointer`}
                >
                  Create account
                </Button>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
    // show && (
    // )
  );
};

export default SigninPopup;
