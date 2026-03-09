"use client";
import React, { useEffect, useState } from "react";
import ReactPaginate from "react-paginate";
import Product from "../../common/Product";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import { useRouter } from "next/navigation";
import { currProduct } from "@/lib/slices/productSlice";

const Paginate = ({ itemsPerPage }) => {
  const dispatch = useDispatch();
  const router = useRouter();

  // Redux state
  const currentCategory = useSelector((state) => state.product.currentCategory);
  const pricerange = useSelector((state) => state.product.pricerange);
  const sort = useSelector((state) => state.product.sortProduct);

  const [allProducts, setAllProducts] = useState([]);

  // Build query params
  const filterparams = new URLSearchParams({
    category: currentCategory || "",
    minprice: pricerange[0] || "",
    maxprice: pricerange[1] || "",
    sort: sort || "",
  });

  // Fetch products on change
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await axios.get(
          `${process.env.NEXT_PUBLIC_URL}/api/v1/product/get-products?${filterparams.toString()}`
        );
        setAllProducts(res.data.data);
      } catch (error) {
        console.log(error.message);
      }
    };
    fetchProducts();
  }, [currentCategory, pricerange, sort]); // add sort as dependency

  // Handle single product click
  const handleSingleProduct = (product) => {
    router.push(`/shop/${product.slug}`);
    dispatch(currProduct(product));
  };

  // Pagination logic
  const [itemOffset, setItemOffset] = useState(0);
  const endOffset = itemOffset + itemsPerPage;
  const currentItems = allProducts.slice(itemOffset, endOffset);
  const pageCount = Math.ceil(allProducts.length / itemsPerPage);

  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % allProducts.length;
    setItemOffset(newOffset);
  };

  // Render items
  function Items({ currentItems }) {
    return (
      <div className="grid grid-cols-3 gap-3">
        {currentItems.map((product) => (
          <Product
            key={product._id}
            product={product}
            id={product._id}
            onClick={() => handleSingleProduct(product)}
          />
        ))}
      </div>
    );
  }

  return (
    <>
      <Items currentItems={currentItems} />
      <ReactPaginate
        breakLabel="..."
        nextLabel=" >"
        onPageChange={handlePageClick}
        pageRangeDisplayed={5}
        pageCount={pageCount}
        previousLabel="< "
        renderOnZeroPageCount={null}
        className="flex gap-6 items-center justify-center py-5"
        pageLinkClassName="text-black border border-gray-400 rounded-full w-[40px] h-[40px] flex items-center justify-center cursor-pointer hover:text-white hover:bg-[#FA8232] transition-all duration-300"
        previousLinkClassName="text-red-500 border border-[#FA8232] rounded-full w-[40px] h-[40px] flex items-center justify-center cursor-pointer hover:text-white hover:bg-[#FA8232] transition-all duration-300"
        nextLinkClassName="text-red-500 border border-[#FA8232] rounded-full w-[40px] h-[40px] flex items-center justify-center cursor-pointer hover:text-white hover:bg-[#FA8232] transition-all duration-300"
        activeClassName="text-white bg-[#FA8232] border border-[#FA8232] rounded-full w-[40px] h-[40px] flex items-center justify-center cursor-pointer"
      />
    </>
  );
};

export default Paginate;