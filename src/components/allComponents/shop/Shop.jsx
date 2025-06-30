import React from "react";
import Container from "@/components/common/Container";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import Paginate from "../pagination/Paginate";
import { Input } from "@/components/ui/input";
import CategoryList from "./CategoryList";
import PricesRange from "./PricesRange";
import PopularTag from "./PopularBrands";
import PopularBrands from "./PopularTags";
import Sort from "./Sort";

const Shop = () => {
  
 
  return (
    <div className="flex gap-6 mt-10 ">
      <div className="w-[25%]">
        <CategoryList />
        <PricesRange />
        <PopularTag />
        <PopularBrands />
      </div>
      <div className="w-[75%]">
        <Sort />
        <Paginate itemsPerPage={20} />
      </div>
    </div>
  );
};

export default Shop;
