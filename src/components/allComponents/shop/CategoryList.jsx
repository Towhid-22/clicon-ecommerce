import React from "react";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";

const CategoryList = () => {
  const categories = [
    {
      id: 1,
      title: "Electronics Devices",
    },
    {
      id: 2,
      title: "Computer & Laptop",
    },
    {
      id: 3,
      title: "Computer Accessories",
    },
    {
      id: 4,
      title: "SmartPhone",
    },
    {
      id: 5,
      title: "Headphone",
    },
    {
      id: 6,
      title: "Mobile Accessories",
    },
    {
      id: 7,
      title: "Gaming Console",
    },
    {
      id: 8,
      title: "Camera & Photo",
    },
    {
      id: 9,
      title: "TV & Homes Appliances",
    },
    {
      id: 10,
      title: "Watchs & Accessories",
    },
    {
      id: 11,
      title: "GPS & Navigation",
    },
    {
      id: 12,
      title: "Warable Technology",
    },
  ];
  return (
    <div>
      <div>
        <h1 className="font-poppins uppercase font-medium mb-4">Category</h1>
        <RadioGroup defaultValue="Electronics Devices">
          {categories.map((category) => (
            <div className="flex items-center gap-3" key={category.id}>
              <RadioGroupItem value={category.title} id={category.id} />
              <Label
                htmlFor={category.id}
                className={`text-[#475156] text-sm leading-5 font-normal cursor-pointer hover:text-[#191C1F] hover:font-medium`}
              >
                {category.title}
              </Label>
            </div>
          ))}
        </RadioGroup>
        <div className="border-b-2 border-[#E4E7E9] my-6 "></div>
      </div>
    </div>
  );
};

export default CategoryList;
