"use client";
import React, { useEffect, useState } from "react";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useDispatch } from "react-redux";
import { sortProduct } from "@/lib/slices/productSlice";

const Sort = () => {
  const dispatch = useDispatch();

  const sortby = [
    {
      id: 1,
      value: "newest",
      label: "Newest",
    },
    {
      id: 2,
      value: "oldest",
      label: "Oldest",
    },
    {
      id: 3,
      value: "low_to_high",
      label: "Low to High",
    },
    {
      id: 4,
      value: "high_to_low",
      label: "High to Low",
    },
    {
      id: 5,
      value: "name_asc",
      label: "A-Z",
    },
    {
      id: 6,
      value: "name_desc",
      label: "Z-A",
    },
  ];
  const [sortItem, setSortItem] = useState(sortby[0].value);
  useEffect(() => {
    dispatch(sortProduct(sortItem));
  });
  return (
    <div>
      <div className="flex justify-between items-center">
        <div className="w-[424px] relative mb-4">
          <Input
            placeholder="Search for anything..."
            className=" py-[14px] rounded-[2px] bg-white placeholder:text-sm leading-5 font-poppins outline-none"
          />
          <Search className="w-5 h-5 absolute right-5 text-xl top-1/2 translate-y-[-50%] text-[#191C1F]" />
        </div>
        <div className="flex items-center justify-between mb-4 gap-[22px]">
          <h3 className="font-poppins text-sm leading-5 text-[#191C1F]">
            Sort by:
          </h3>
          <div>
            <Select value={sortItem} onValueChange={setSortItem}>
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Most Popular" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  {sortby.map((item) => (
                    <SelectItem key={item.id} value={item.value}>
                      {item.label}
                    </SelectItem>
                  ))}
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>
        </div>
      </div>
      <div className="bg-[#F2F4F5] flex items-center justify-between rounded-[4px] mb-6">
        <h3 className="font-poppins text-sm leading-5 text-[#5F6C72] p-4">
          Active Filters:
        </h3>
        <h4 className="font-poppins text-sm leading-5 text-[#5F6C72] p-4">
          <span className="text-[#191C1F] font-semibold">65,867</span> Results
          found.
        </h4>
      </div>
    </div>
  );
};

export default Sort;
