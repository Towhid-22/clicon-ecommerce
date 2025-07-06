"use client";
import React, { useState, useEffect } from "react";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import axios from "axios";

const CategoryList = () => {
  // const categories = [
  //   {
  //     id: 1,
  //     title: "Electronics Devices",
  //   },
  //   {
  //     id: 2,
  //     title: "Computer & Laptop",
  //   },
  //   {
  //     id: 3,
  //     title: "Computer Accessories",
  //   },
  //   {
  //     id: 4,
  //     title: "SmartPhone",
  //   },
  //   {
  //     id: 5,
  //     title: "Headphone",
  //   },
  //   {
  //     id: 6,
  //     title: "Mobile Accessories",
  //   },
  //   {
  //     id: 7,
  //     title: "Gaming Console",
  //   },
  //   {
  //     id: 8,
  //     title: "Camera & Photo",
  //   },
  //   {
  //     id: 9,
  //     title: "TV & Homes Appliances",
  //   },
  //   {
  //     id: 10,
  //     title: "Watchs & Accessories",
  //   },
  //   {
  //     id: 11,
  //     title: "GPS & Navigation",
  //   },
  //   {
  //     id: 12,
  //     title: "Warable Technology",
  //   },
  // ];

  const [allCategory, setAllCategory] = useState([]);

  useEffect(() => {
    function getCategories() {
      axios
        .get(`${process.env.NEXT_PUBLIC_URL}/api/v1/category/getcategories`)
        .then((res) => {
          setAllCategory(res.data.data);
        });
    }
    getCategories();
  }, []);
  return (
    <div>
      {/* <div className="border-b-2 border-[#E4E7E9] my-6 "></div> */}
      <div className="h-[500px] overflow-y-auto">
        <h1 className="font-poppins uppercase font-medium mb-4">Category</h1>
        <RadioGroup>
          {allCategory.map((item, index) => (
            <div className="flex items-center gap-3" key={index}>
              <RadioGroupItem value={item.name} id={index} />
              <Label
                htmlFor={index}
                className={`text-[#475156] text-sm leading-5 font-normal cursor-pointer hover:text-[#191C1F] hover:font-medium`}
              >
                {item.name}
              </Label>
            </div>
          ))}
        </RadioGroup>
      </div>
    </div>
  );
};

export default CategoryList;
