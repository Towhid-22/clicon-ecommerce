"use client";
import React from "react";
import Container from "@/components/common/Container";
import { MdKeyboardArrowRight } from "react-icons/md";
import Link from "next/link";
import { useState } from "react";
import Subcategory from "../category/SubCategory";

const AllCategory = () => {
  const [allSubCategorys, setAllSubCategorys] = useState(false);
  const allCategories = [
    {
      id: 1,
      name: "Computer & Laptop",
    },
    {
      id: 2,
      name: "Computer Accessories",
    },
    {
      id: 3,
      name: "SmartPhone",
    },
    {
      id: 4,
      name: "Headphone",
    },
    {
      id: 5,
      name: "Mobile Accessories",
    },
    {
      id: 6,
      name: "Gaming Console",
    },
    {
      id: 7,
      name: "Camera & Photo",
    },
    {
      id: 8,
      name: "TV & Homes Appliances",
    },
    {
      id: 9,
      name: "Watchs & Accessories",
    },
    {
      id: 10,
      name: "GPS & Navigation",
    },
    {
      id: 11,
      name: "Warable Technology",
    },
  ];
  return (
    <div>
      <Container>
        <div className="absolute top-18 left-0 z-50">
          {allCategories.map((item) => (
            <Link href="/shop" key={item.id}>
              <ul className="w-[240px] bg-white shadow-xl">
                <div>
                  <li
                    className="flex items-center gap-2 justify-between py-2 px-4 font-poppins font-normal text-sm leading-5 text-[#5F6C72] hover:font-medium hover:text-[#191C1F] group hover:bg-[#F2F4F5] transition-all duration-300 relative"
                    onMouseOver={() => setAllSubCategorys(!allSubCategorys)}
                    
                  >
                    {item.name}
                    <MdKeyboardArrowRight className="w-5 h-5 hidden group-hover:block group-hover:transition-all group-hover:duration-300" />
                  </li>
                </div>
                {allSubCategorys && <Subcategory className="z-50" />}
              </ul>
            </Link>
          ))}
        </div>
      </Container>
    </div>
  );
};

export default AllCategory;
