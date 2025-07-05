"use client";
import React, { useState } from "react";
import Breadcrumb from "@/components/common/Breadcrumb";
import Container from "@/components/common/Container";
import Link from "next/link";
import Image from "next/image";
import { FaFacebook, FaPinterest, FaStar, FaTwitter } from "react-icons/fa6";
import Flex from "@/components/common/Flex";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { PiShoppingCartSimple } from "react-icons/pi";
import { BsCopy, BsHeart } from "react-icons/bs";
import { FiRefreshCcw } from "react-icons/fi";

const page = () => {
  const [count, setCount] = useState(0);

  const handleIncrement = () => setCount((prev) => prev + 1);
  const handleDecrement = () => setCount((prev) => prev - 1);

  return (
    <div>
      <Breadcrumb />
      <div className="mt-8">
        <Container>
          <Flex className="gap-4">
            {/* images */}
            <div className="w-[50%]">
              <Link href="/product">
                <Image
                  src="/Product_images/main.png"
                  width={616}
                  height={464}
                  alt="banner"
                />
              </Link>
              <div className="flex gap-2 mt-6">
                <Link href="/product" className="w-24 h-24">
                  <Image
                    src="/Product_images/main.png"
                    width={96}
                    height={96}
                    className="border rounded-[2px]"
                    alt="banner"
                  />
                </Link>
                <Link href="/product">
                  <Image
                    src="/Product_images/main.png"
                    width={96}
                    className="border rounded-[2px]"
                    height={96}
                    alt="banner"
                  />
                </Link>
                <Link href="/product" className="w-24 h-24">
                  <Image
                    src="/Product_images/main.png"
                    width={96}
                    height={96}
                    className="border rounded-[2px]"
                    alt="banner"
                  />
                </Link>
                <Link href="/product">
                  <Image
                    src="/Product_images/main.png"
                    width={96}
                    height={96}
                    className="border rounded-[2px]"
                    alt="banner"
                  />
                </Link>
                <Link href="/product" className="w-24 h-24">
                  <Image
                    src="/Product_images/main.png"
                    width={96}
                    height={96}
                    className="border rounded-[2px]"
                    alt="banner"
                  />
                </Link>
                <Link href="/product">
                  <Image
                    src="/Product_images/main.png"
                    width={96}
                    height={96}
                    className="border rounded-[2px]"
                    alt="banner"
                  />
                </Link>
              </div>
            </div>
            <div className="w-[50%]">
              {/* rating */}
              <ul className="flex gap-[6px] mb-3">
                <li className="flex gap-[2px]">
                  <FaStar className="w-5 h-5 text-[#FA8232]" />
                  <FaStar className="w-5 h-5 text-[#FA8232]" />
                  <FaStar className="w-5 h-5 text-[#FA8232]" />
                  <FaStar className="w-5 h-5 text-[#FA8232]" />
                  <FaStar className="w-5 h-5 text-[#FA8232]" />
                </li>
                <li className="font-bold font-poppins text-sm leading-5 text-[#191C1F]">
                  4.7 Star Rating
                </li>
                <li className="font-poppins text-sm leading-5 text-[#5F6C72]">
                  (21,671 User feedback)
                </li>
              </ul>
              {/* product name */}
              <h3 className="text-xl leading-7 text-[#191C1F] mb-4">
                2020 Apple MacBook Pro with Apple M1 Chip (13-inch, 8GB RAM,
                256GB SSD Storage) - Space Gray
              </h3>
              {/* availability */}
              <div className="flex justify-between mb-6">
                <div className="flex flex-col gap-3 text-sm">
                  <p className="leading-5 font-semibold text-xl">
                    <span className="text-[#5F6C72] font-normal">Sku:</span>{" "}
                    A264671
                  </p>
                  <p className="leading-5 font-semibold text-xl">
                    <span className="text-[#5F6C72] font-normal">Brand:</span>{" "}
                    Apple
                  </p>
                </div>
                <div className="flex flex-col gap-3 text-sm">
                  <p className="leading-5 font-semibold text-xl text-[#2DB224]">
                    <span className="text-[#5F6C72] font-normal">
                      Availability:
                    </span>{" "}
                    In Stock
                  </p>
                  <p className="leading-5 font-semibold text-xl">
                    <span className="text-[#5F6C72] font-normal">
                      Category:
                    </span>{" "}
                    Electronics Devices
                  </p>
                </div>
              </div>
              {/* price */}
              <div className="flex items-center gap-3 border-b-2 border-[#E4E7E9] pb-6">
                <h3 className="text-2xl leading-8 font-semibold text-[#2DA5F3]">
                  $1699
                </h3>
                <span className="text-[#77878F] leading-6">
                  <del>$1999.00</del>
                </span>
                <button className="font-semibold text-sm leading-5 text-[#191C1F] bg-[#EFD33D] px-2.5 py-1.5 rounded-[3px]">
                  21% OFF
                </button>
              </div>

              {/* =============== */}
              <div className="flex justify-between items-center my-6">
                <div className="flex flex-col gap-4">
                  {/* color */}
                  <div>
                    <Label
                      htmlFor="color"
                      className={`mb-2 text-[#191C1F] text-sm leading-5`}
                    >
                      Color
                    </Label>
                    <RadioGroup
                      defaultValue="Red"
                      className={`grid grid-cols-3`}
                    >
                      <div className="flex items-center gap-3">
                        <RadioGroupItem value="Red" id="r1" />
                        <Label htmlFor="r1">Red</Label>
                      </div>
                      <div className="flex items-center gap-3">
                        <RadioGroupItem value="Blue" id="r2" />
                        <Label htmlFor="r2">Blue</Label>
                      </div>
                      <div className="flex items-center gap-3">
                        <RadioGroupItem value="Green" id="r3" />
                        <Label htmlFor="r3">Green</Label>
                      </div>
                      <div className="flex items-center gap-3">
                        <RadioGroupItem value="Yellow" id="r4" />
                        <Label htmlFor="r4">Yellow</Label>
                      </div>
                      <div className="flex items-center gap-3">
                        <RadioGroupItem value="Pink" id="r5" />
                        <Label htmlFor="r5">Pink</Label>
                      </div>
                      <div className="flex items-center gap-3">
                        <RadioGroupItem value="Gray" id="r6" />
                        <Label htmlFor="r6">Gray</Label>
                      </div>
                    </RadioGroup>
                  </div>
                  {/* memory */}
                  <div>
                    <Label
                      htmlFor="M"
                      className={`mb-2 text-[#191C1F] text-sm leading-5`}
                    >
                      Memory
                    </Label>
                    <Select className="mt-2">
                      <SelectTrigger className="w-[312px] font-semibold">
                        <SelectValue placeholder="Memory" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="light">
                          16GB unified memory
                        </SelectItem>
                        <SelectItem value="dark">
                          32GB unified memory
                        </SelectItem>
                        <SelectItem value="system">
                          64GB unified memory
                        </SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
                <div className="flex flex-col gap-4">
                  {/* size */}
                  <div>
                    <Select>
                      <Label
                        htmlFor="M"
                        className={`mb-2 text-[#191C1F] text-sm leading-5`}
                      >
                        Memory
                      </Label>
                      <SelectTrigger className="w-[312px] font-semibold">
                        <SelectValue placeholder="Size" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="light">M</SelectItem>
                        <SelectItem value="dark">XL</SelectItem>
                        <SelectItem value="system">XXl</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  {/* storage */}
                  <div>
                    <Select>
                      <Label
                        htmlFor="M"
                        className={`mb-2 text-[#191C1F] text-sm leading-5`}
                      >
                        Memory
                      </Label>
                      <SelectTrigger className="w-[312px] font-semibold">
                        <SelectValue placeholder="Storage" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="light">1Tb SSD Storage</SelectItem>
                        <SelectItem value="dark">512 GB SSD Storage</SelectItem>
                        <SelectItem value="system">
                          256 GB SSD Storage
                        </SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
              </div>
              {/* add to cart, buy now buttons */}
              <div className="flex gap-4">
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
                </div>
                <div className="">
                  <Link href="/cart">
                    <button className="w-[310px] h-[56px] bg-[#FA8232] flex items-center justify-center rounded-[3px] uppercase font-bold gap-2  text-white cursor-pointer">
                      Add to card <PiShoppingCartSimple className="w-6 h-6" />
                    </button>
                  </Link>
                </div>
                <div className="">
                  <Link href="/cart">
                    <button className="w-[142px] h-[56px] flex items-center justify-center border-2 border-[#FA8232] rounded-[3px] uppercase font-bold gap-2  text-[#FA8232] cursor-pointer">
                      Buy now
                    </button>
                  </Link>
                </div>
              </div>

              {/* =============== */}
              <div className="flex justify-between items-center mt-6">
                <div className="flex items-center gap-8">
                  <h4 className="text-[#475156] text-sm leading-5 font-poppins flex items-center gap-2">
                    <BsHeart className="w-6 h-6" /> Add to Wishlist
                  </h4>
                  <h4 className="text-[#475156] text-sm leading-5 font-poppins flex items-center gap-2">
                    <FiRefreshCcw className="w-6 h-6" /> Add to Wishlist
                  </h4>
                </div>
                <div>
                  <h4 className="text-[#475156] text-sm leading-5 font-poppins flex items-center gap-4 ">
                    Share product:
                    <BsCopy className="w-6 h-6 hover:text-[#FA8232]" />
                    <FaFacebook className="w-6 h-6 hover:text-[#FA8232]" />
                    <FaTwitter className="w-6 h-6 hover:text-[#FA8232]" />
                    <FaPinterest className="w-6 h-6 hover:text-[#FA8232]" />
                  </h4>
                </div>
              </div>

              {/* checkout */}
              <div className="border-2 border-[#E4E7E9] mt-6 p-5 rounded-[3px]">
                <h3 className="text-[#191C1F] text-sm leading-5 mb-3">100% Guarantee Safe Checkout</h3>
                <Image src="/payment.png" width={312} height={18} />
              </div>
            </div>
          </Flex>
        </Container>
      </div>
    </div>
  );
};

export default page;
