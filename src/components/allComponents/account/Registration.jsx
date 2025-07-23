"use client";
import React from "react";
import Container from "@/components/common/Container";
import { Label } from "@/components/ui/label";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { FaArrowRight } from "react-icons/fa6";
import { GrClose } from "react-icons/gr";

const Registration = () => {
  const [showPassword, setShowPassword] = useState(false);
  const togglePassword = () => setShowPassword((prev) => !prev);
  return (
    <div className="font-poppins absolute top-14.5 right-[500px] z-50 shadow-2xl">
      <Container>
        <div className="w-[424x] bg-white rounded-[4px] p-8">
          <h3 className="font-semibold text-xl leading-7 text-[#191c1f] mb-5 text-center">
            Sign in to your account
          </h3>
          <div>
            <div className="w-[360px] mt-4">
              <Label
                htmlFor="email"
                className={`text-sm leading-5 text-[#191C1F] mb-2`}
              >
                Name
              </Label>
              <input
                type="text"
                className="w-full px-4 py-3 border rounded focus:outline-none"
                required
              />
            </div>
            <div className="w-[360px] mt-4">
              <Label
                htmlFor="email"
                className={`text-sm leading-5 text-[#191C1F] mb-2`}
              >
                Email Address
              </Label>
              <input
                type="email"
                className="w-full px-4 py-3 border rounded focus:outline-none"
                required
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

              <div className="relative w-full max-w-md">
                <input
                  id="password"
                  type={showPassword ? "text" : "password"}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full px-4 py-3 border rounded focus:outline-none"
                  required
                />
                <button
                  type="button"
                  onClick={togglePassword}
                  className="absolute top-1/2 right-3 transform -translate-y-1/2 text-sm text-gray-600 hover:text-gray-800"
                >
                  {showPassword ? "Hide" : "Show"}
                </button>
              </div>

              <div className="mt-5">
                <div className="flex items-center justify-center gap-2 mt-6 mb-3">
                  <div className="w-[100px] h-[1px] bg-[#E4E7E9]"></div>
                  <p className="font-medium text-sm leading-5 text-[#77878F]">
                    I have an account
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
  );
};

export default Registration;
