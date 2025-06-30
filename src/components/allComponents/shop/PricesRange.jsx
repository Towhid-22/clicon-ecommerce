import React from "react";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";

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
        <Input type="range" className={`shadow-none accent-[#FA8232]`} />
        <div className="flex items-center gap-3 justify-between my-4">
          <Input placeholder="Min price" type="text" className={`shadow-none outline-none ring-0`} />
          <Input placeholder="Max price" type="text" className={`shadow-none`} />
        </div>
        <RadioGroup defaultValue="All Price">
          {priceRange.map((item) => (
            <div className="flex items-center gap-3">
              <RadioGroupItem value={item.price} id={item.id} />
              <Label
                htmlFor={item.id}
                className={`text-[#475156] text-sm leading-5 font-normal cursor-pointer hover:text-[#191C1F] hover:font-medium`}
              >
                {item.price}
              </Label>
            </div>
          ))}
        </RadioGroup>
        <div className="border-b-2 border-[#E4E7E9] my-6 "></div>
      </div>
    </div>
  );
};

export default PricesRange;
