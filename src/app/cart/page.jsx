"use client";
import Breadcrumb from "@/components/common/Breadcrumb";
import Container from "@/components/common/Container";
import React, { useState } from "react";
import { SlClose } from "react-icons/sl";
import { HiArrowLongLeft } from "react-icons/hi2";

const page = () => {
  const [count, setCount] = useState(0);
  const handleIncrement = () => setCount((prev) => prev + 1);
  const handleDecrement = () => setCount((prev) => prev - 1);
  return (
    <div>
      <Breadcrumb />
      <Container>
        <div className="container mt-20 mb-[120px]">
          <div className="mt-20">
            <div className="font-Poppins text-base leading-6 text-black flex gap-6 py-6 px-10 shadow-[0px_2px_5px_0.01px_rgba(0,0,0,0.2)] rounded-[4px]">
              <h2 className="w-[500px]">Product</h2>
              <h2 className="w-[320px]">Price</h2>
              <h2 className="w-[320px]">Qantity</h2>
              <h2 className="w-[320px]">Subtotal</h2>
            </div>
            {/* shadow-[0px_2px_5px_0.01px_rgba(0,0,0,0.2)] */}
            {/* <div className="font-Poppins leading-6 text-black py-6 px-10 flex items-center gap-6 shadow-[0px_2px_5px_0.01px_rgba(0,0,0,0.2)] rounded-[4px] mt-10 ">
              <div className="flex items-center jusbtify-center gap-5 w-[500px]">
                <SlClose className="w-6 h-6 text-[#929FA5] hover:text-[#EE5858] cursor-pointer" />
                <img src="/cart1.png" alt="" />
                <p className="">LCD Monitor</p>
              </div>
              <h2 className="w-[320px]">$650</h2>
              <input
                type="number"
                placeholder="01"
                className="w-[320px] px-3 border-[2px] border-black/[40%] rounded-[4px]"
              />
              <h2 className="w-[320px]">$650</h2>
            </div> */}
            <div className="font-Poppins leading-6 text-black py-6 px-10 flex items-center gap-6 shadow-[0px_2px_5px_0.01px_rgba(0,0,0,0.2)] rounded-[4px] mt-10 ">
              <div className="flex items-center jusbtify-center gap-5 w-[500px]">
                <SlClose className="w-6 h-6 text-[#929FA5] hover:text-[#EE5858] cursor-pointer" />
                <img src="/cart2.png" alt="Monitor" />
                <p>H1 Gamepad</p>
              </div>
              <h2 className="w-[320px]">$550</h2>
              <div className="flex items-center space-x-4 border-2 border-[#E4E7E9] w-[164px] h-14 rounded-[3px]">
                <button
                  onClick={handleDecrement}
                  className=" text-[30px] px-4 py-2 rounded"
                >
                  −
                </button>
                <h1 className="text-[#475156] leading-6 font-poppins w-[30px] flex items-center justify-center">
                  {" "}
                  {count}
                </h1>
                <button
                  onClick={handleIncrement}
                  className="  text-[30px]  px-4 py-2 rounded"
                >
                  +
                </button>
                {/* add to cart */}
              </div>
              <h2 className="w-[320px]">$1100</h2>
            </div>
          </div>
          <div className="mt-6 font-Poppins leading-6 flex justify-between">
            <button className="font-medium py-4 px-12 border-[2px] border-[#2DA5F3] flex items-center gap-2 text-[#2DA5F3] rounded-[4px] uppercase">
              <HiArrowLongLeft className="w-6 h-6" /> Return To Shop
            </button>
            <button className="font-medium py-4 px-12 border-[2px] border-[#2DA5F3] text-[#2DA5F3] rounded-[4px] uppercase">
              Update Cart
            </button>
          </div>
          <div className="mt-20 flex justify-between">
            <div>
              <div className="flex gap-4">
                <input
                  type="text"
                  placeholder="Coupon Code"
                  className="w-[300px] py-4 border-[2px] border-black/[50%] rounded-[4px] px-6 text-base font-Poppins leading-6"
                />
                <button className="font-medium text-white py-4 px-12 rounded-[4px] bg-[#DB4444] ">
                  Apply Coupon
                </button>
              </div>
            </div>
            <div className="w-[470px] border-[2px] border-black/[50%] pb-12 pt-8 px-6 rounded-[4px]">
              <h2 className="font-Poppins font-semibold text-xl leading-7 mb-6">
                Cart Total
              </h2>
              <div className="font-Poppins font-normal text-base leading-6 flex justify-between border-b-[1px] border-black/[50%] pb-4 mb-4">
                <h2>Subtotal:</h2>
                <h2>$1750</h2>
              </div>
              <div className="font-Poppins font-normal text-base leading-6 flex justify-between border-b-[1px] border-black/[50%] pb-4 mb-4">
                <h2>Shipping:</h2>
                <h2>Free</h2>
              </div>
              <div className="font-Poppins font-normal text-base leading-6 flex justify-between pb-4 mb-4">
                <h2>Total:</h2>
                <h2>$1750</h2>
              </div>
              <div className="text-center">
                <button className="font-medium text-white py-4 px-12 rounded-[4px] bg-[#DB4444] ">
                  Procees to checkout
                </button>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default page;
