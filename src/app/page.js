import React from "react";
import { Button } from "@/components/ui/button";
import Header from "@/components/allComponents/header/Header";
import Banner from "@/components/allComponents/banner/Banner";
import AllCategory from "@/components/allComponents/category/AllCategory";
import Category from "@/components/allComponents/category/Category";
import Service from "@/components/allComponents/service/Service";
import FeaturesProducts from "@/components/allComponents/products/FeaturesProducts";
import NewProduct from "@/components/allComponents/new-product/NewProduct";
import Overview from "@/components/allComponents/overview/Overview";
import Subscribe from "@/components/allComponents/subscribe/Subscribe";
import SigninPopup from "@/components/allComponents/signin/SigninPopup";

const page = () => {
  return (
    <>
      <Banner />
      <Service />
      <Category />
      <FeaturesProducts />
      <NewProduct />
      <Overview />
      {/* <SigninPopup /> */}
      <Subscribe />
    </>
  );
};

export default page;
