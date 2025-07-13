"use client";
import Container from "@/components/common/Container";
import Image from "next/image";
import React from "react";
import { IoIosCloseCircleOutline } from "react-icons/io";
import { useState } from "react";
import { LuArrowLeft } from "react-icons/lu";
import Link from "next/link";

const page = () => {
  const [count, setCount] = useState(0);

  const handleIncrement = () => setCount((prev) => prev + 1);
  const handleDecrement = () => setCount((prev) => prev - 1);
  return (
    <div className="font-poppins">
      <Container>
        <div className="w-[872px]">
          <h3 className="text-[#191C1F] font-medium text-[18px] leading-6 mb-5">
            Shopping Card
          </h3>
        </div>
        <div className="w-[872px]">
          <div className="w-[872px] border">
            <table className="border-[#E4E7E9] border">
              <tr className="bg-[#F2F4F5] ">
                <th className="py-2.5 px-6 w-[375px]">
                  <h3 className="font-medium text-left text-[12px leading-[150%] text-[#475156] uppercase w-[375px]">
                    Products
                  </h3>
                </th>
                <th className="w-[200px]">
                  <h3 className="font-medium text-[12px leading-[150%] text-[#475156] uppercase w-[88px]">
                    Price
                  </h3>
                </th>
                <th>
                  <h3 className="w-[200px] font-medium text-[12px leading-[150%] text-[#475156] uppercase">
                    Quantity
                  </h3>
                </th>
                <th>
                  <h3 className="w-[200px] font-medium text-[12px leading-[150%] text-[#475156] uppercase">
                    Sub-total
                  </h3>
                </th>
              </tr>
              <tr className=" ">
                <td className="w-[375px] px-6 ">
                  <div className="flex items-center gap-4 w-[375px]">
                    <IoIosCloseCircleOutline className="w-6 h-6 hover:text-[#EE5858]" />
                    <Image
                      src="/Cart_images/cart1.png"
                      width={80}
                      height={80}
                    />
                    <p className="text-sm leading-5 text-[#191C1F]">
                      4K UHD LED Smart TV with <br /> Chromecast Built-in
                    </p>
                  </div>
                </td>
                <td className="w-[200px]  text-center">
                  <div className="w-[88px]">
                    <h4 className="text-sm leading-5 text-[#475156]">
                      <del className="text-[#929FA5]">$99</del> $70
                    </h4>
                  </div>
                </td>
                <td className=" flex items-center justify-center pt-3">
                  <div className="flex items-center space-x-4 border-2 border-[#E4E7E9] w-[148px] h-14 rounded-[3px]">
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
                  </div>
                </td>
                <td className=" text-center">
                  <h3 className="text-[#191C1F] font-medium text-sm leading-5 pr-3">
                    $70
                  </h3>
                </td>
              </tr>
              <tr className=" ">
                <td className="w-[375px] px-6 ">
                  <div className="flex items-center gap-4 w-[375px]">
                    <IoIosCloseCircleOutline className="w-6 h-6 hover:text-[#EE5858]" />
                    <Image
                      src="/Cart_images/cart1.png"
                      width={80}
                      height={80}
                    />
                    <p className="text-sm leading-5 text-[#191C1F]">
                      4K UHD LED Smart TV with <br /> Chromecast Built-in
                    </p>
                  </div>
                </td>
                <td className="w-[200px]  text-center">
                  <div className="w-[88px]">
                    <h4 className="text-sm leading-5 text-[#475156]">
                      <del className="text-[#929FA5]">$99</del> $70
                    </h4>
                  </div>
                </td>
                <td className=" flex items-center justify-center pt-3">
                  <div className="flex items-center space-x-4 border-2 border-[#E4E7E9] w-[148px] h-14 rounded-[3px]">
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
                  </div>
                </td>
                <td className=" text-center">
                  <h3 className="text-[#191C1F] font-medium text-sm leading-5 pr-3">
                    $70
                  </h3>
                </td>
              </tr>
            </table>
          </div>
          <div className="flex justify-between items-center">
            <Link href="/shop">
              <button className="font-bold text-sm leading-12 tracking-[1.2%] text-[#2DA5F3] border-[2px] border-[#2DA5F3] uppercase px-6 flex items-center gap-2 cursor-pointer rounded-[3px]">
                <LuArrowLeft className="text-xl" /> Return to Shop
              </button>
            </Link>
            <Link href="#">
              <button className="font-bold text-sm leading-12 tracking-[1.2%] text-[#2DA5F3] border-[2px] border-[#2DA5F3] uppercase px-6 flex items-center gap-2 cursor-pointer rounded-[3px]">
                Update cart
              </button>
            </Link>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default page;
