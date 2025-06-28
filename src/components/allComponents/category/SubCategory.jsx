"use client";
import React from "react";
import Container from "@/components/common/Container";
import Link from "next/link";

const Subcategory = () => {
  const allSubcategory = [
    {
      id: 1,
      name: "All",
    },
    {
      id: 2,
      name: "iPhone",
    },
    {
      id: 3,
      name: "Sansung",
    },
    {
      id: 4,
      name: "Realme",
    },
    {
      id: 5,
      name: "Xiaomi",
    },
    {
      id: 6,
      name: "Oppo",
    },
    {
      id: 7,
      name: "Vivo",
    },
    {
      id: 8,
      name: "OnePlus",
    },
    {
      id: 9,
      name: "Huawei",
    },
    {
      id: 10,
      name: "Huawei",
    },
    {
      id: 11,
      name: "Tecno",
    },
  ];
  return (
    <div>
      <Container>
        <div className=" absolute top-0 left-[245px] z-50">
          {allSubcategory.map((item) => (
            <div href="/" key={item.id} className="p">
              <ul className="w-[240px] bg-white rounded-[3px] px-4">
                <li className="flex items-center gap-2 justify-between py-2 rounded-[3px] px-4 font-poppins font-normal text-sm leading-5 text-[#5F6C72] hover:font-medium hover:text-[#191C1F] group hover:bg-[#F2F4F5] transition-all duration-300">
                  <Link href={"/"}>{item.name}</Link>
                </li>
              </ul>
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
};

export default Subcategory;