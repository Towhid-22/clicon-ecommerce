import React from "react";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";

const PricesRange = () => {
  const priceRange = [
    {
      id: 1,
      price: "All Price",
    },
    {
      id: 2,
      price: "Under $20",
    },
    {
      id: 3,
      price: "$25 to $100",
    },
    {
      id: 4,
      price: "$100 to $300",
    },
    {
      id: 5,
      price: "$300 to $500",
    },
    {
      id: 6,
      price: "$500 to $1,000",
    },
  ];
  return (
    <div>
      <div>
        <h1 className="font-poppins uppercase font-medium mb-4">Price Range</h1>
        <input type="range" className={`shadow-none accent-[#FA8232] w-full`} />
        <div className="flex items-center gap-3 justify-between my-4">
          <Input
            placeholder="Min price"
            type="text"
            className={`shadow-none outline-none ring-0`}
          />
          <Input
            placeholder="Max price"
            type="text"
            className={`shadow-none`}
          />
        </div>

        <div className="flex flex-col gap-y-2">
          {priceRange.map((tag, index) => (
          <div key={index} className="flex items-center gap-x-2 gap-y-3">
            <Checkbox id={tag.price} />
            <Label
              htmlFor={tag.price}
              className={`text-[#475156] text-sm leading-5 font-normal cursor-pointer hover:text-[#191C1F] hover:font-medium`}
            >
              {tag.price}
            </Label>
          </div>
        ))}
        </div>
        <div className="border-b-2 border-[#E4E7E9] my-6 "></div>
      </div>
    </div>
  );
};

export default PricesRange;
