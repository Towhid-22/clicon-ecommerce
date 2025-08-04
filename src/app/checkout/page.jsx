"use client";
import Breadcrumb from "@/components/common/Breadcrumb";
import Container from "@/components/common/Container";
import React from "react";
import { IoIosArrowDown } from "react-icons/io";
import { useState } from "react";
import Image from "next/image";

const paymentMethods = [
  {
    id: "dollar",
    label: "Cash on Delivery",
    img: "/dollar.png",
  },
  {
    id: "venmo",
    label: "Venmo",
    img: "/venmo.png",
  },
  {
    id: "paypal",
    label: "Paypal",
    img: "/paypal.png",
  },
  {
    id: "amazon",
    label: "Amazon Pay",
    img: "/amazon.png",
  },
  {
    id: "card",
    label: "Debid/Credit Card",
    img: "/creditcard.png",
  },
];

const page = () => {
  const [selectedMethod, setSelectedMethod] = useState("card");
  return (
    <div>
      <Breadcrumb />
      <Container>
        <div className="flex justify-between gap-6 mt-10">
          <div className="font-public-sans mb-10">
            <h2 className="font-medium text-[18px] leading-6 text-[#191C1F]">
              Billing Information
            </h2>
            <div className="flex gap-4 items-center mt-6">
              <div>
                <label htmlFor="firstName" className="text-sm leading-5">
                  User Name
                </label>
                <div className="mt-2">
                  <input
                    type="text"
                    id="firstName"
                    placeholder="First name"
                    className="w-[206px] p-3 border-[1.5px] border-[#E4E7E9] rounded-[2px] text-[#77878F] text-sm leading-5 outline-none mr-4"
                  />
                  <input
                    type="text"
                    id="firstName"
                    placeholder="Last name"
                    className="w-[206px] p-3 border-[1.5px] border-[#E4E7E9] rounded-[2px] text-[#77878F] text-sm leading-5 outline-none"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="companyName" className="text-sm leading-5">
                  Company Name{" "}
                  <span className="text-[#929FA5]">(Optional)</span>
                </label>
                <div className="mt-2">
                  <input
                    type="text"
                    id="companyName"
                    placeholder="Company Name (Optional)"
                    className="w-[428px] p-3 border-[1.5px] border-[#E4E7E9] rounded-[2px] text-[#77878F] text-sm leading-5 outline-none mr-4"
                  />
                </div>
              </div>
            </div>
            <div className="mt-4">
              <label htmlFor="address" className="text-sm leading-5">
                Address
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  id="address"
                  placeholder="First name"
                  className="w-[872px] p-3 border-[1.5px] border-[#E4E7E9] rounded-[2px] text-[#77878F] text-sm leading-5 outline-none mr-4"
                />
              </div>
            </div>
            <div className="flex gap-4 items-center mt-4">
              <div className="mt-2 w-[206px]">
                <label for="country">Country</label>
                <div className="relative mt-2">
                  <select
                    className="w-[206px] p-3 border-[1.5px] border-[#E4E7E9] rounded-[2px] text-[#77878F] text-sm leading-5 outline-none mr-4 appearance-none"
                    id="country"
                    name="country"
                    autoFocus
                  >
                    <option value="volvo">Select...</option>
                    <option value="bangladesh">Bangladesh</option>
                  </select>

                  <div className=" flex items-center absolute right-5 text-xl text-[#ADB7BC] top-1/2 translate-y-[-50%] ">
                    <IoIosArrowDown className="w-5 h-5 " />
                  </div>
                </div>
              </div>
              <div className="mt-2 w-[206px]">
                <label for="country">Region/State</label>
                <div className="relative mt-2">
                  <select
                    className="w-[206px] p-3 border-[1.5px] border-[#E4E7E9] rounded-[2px] text-[#77878F] text-sm leading-5 outline-none mr-4 appearance-none"
                    id="country"
                    name="country"
                    autoFocus
                  >
                    <option value="select">Select...</option>
                    <option value="dhaka">Dhaka</option>
                    <option value="chattogram">Chattogram</option>
                    <option value="sylhet">Sylhet</option>
                  </select>

                  <div className=" flex items-center absolute right-5 text-xl text-[#ADB7BC] top-1/2 translate-y-[-50%] ">
                    <IoIosArrowDown className="w-5 h-5 " />
                  </div>
                </div>
              </div>
              <div className="mt-2 w-[206px]">
                <label for="city">City</label>
                <div className="relative mt-2">
                  <select
                    className="w-[206px] p-3 border-[1.5px] border-[#E4E7E9] rounded-[2px] text-[#77878F] text-sm leading-5 outline-none mr-4 appearance-none"
                    id="city"
                    name="city"
                    // autoFocus
                  >
                    <option value="volvo">Select...</option>
                    <option value="dhaka">Dhaka</option>
                    <option value="narayonganj">Narayonganj</option>
                    <option value="gazipur">Gazipur</option>
                  </select>

                  <div className=" flex items-center absolute right-5 text-xl text-[#ADB7BC] top-1/2 translate-y-[-50%] ">
                    <IoIosArrowDown className="w-5 h-5 " />
                  </div>
                </div>
              </div>
              <div className="mt-2 w-[206px]">
                <label for="zipcode">ZIP/Post Code</label>
                <div className="relative mt-2">
                  <input
                    type="text"
                    id="zipcode"
                    placeholder="ZIP Code"
                    className="w-full p-3 border-[1.5px] border-[#E4E7E9] rounded-[2px] text-[#77878F] text-sm leading-5 outline-none mr-4"
                  />
                </div>
              </div>
            </div>
            <div className="flex  items-center gap-4 mt-6">
              <div>
                <label htmlFor="email" className="text-sm leading-5">
                  Email
                </label>
                <div className="mt-2">
                  <input
                    type="email"
                    id="email"
                    placeholder="Enter your email"
                    className="w-[428px] p-3 border-[1.5px] border-[#E4E7E9] rounded-[2px] text-[#77878F] text-sm leading-5 outline-none"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="phone" className="text-sm leading-5">
                  Phone Number
                </label>
                <div className="mt-2">
                  <input
                    type="text"
                    id="phone"
                    placeholder="Phone number"
                    className="w-[428px] p-3 border-[1.5px] border-[#E4E7E9] rounded-[2px] text-[#77878F] text-sm leading-5 outline-none"
                  />
                </div>
              </div>
            </div>

            <div className=" max-w-[872px] p-6 border border-gray-200 rounded-[4px] mt-10 bg-white">
              <h2 className="text-lg font-semibold mb-4">Payment Option</h2>
              {/* Payment Options */}
              <div className="grid grid-cols-5 gap-2 border-y  border-gray-200 py-4">
                {paymentMethods.map((method) => (
                  <label
                    key={method.id}
                    className={`flex flex-col items-center p-4 border ${
                      selectedMethod === method.id
                        ? "border-orange-500"
                        : "border-transparent"
                    } rounded-md cursor-pointer hover:bg-gray-50`}
                  >
                    {console.log(method.img)}
                    <img src={method.src} alt="" />
                    <Image width={40} height={40} src={method.img} />
                    <span className="text-sm mt-2">{method.label}</span>
                    <input
                      type="radio"
                      name="paymentMethod"
                      className="mt-2 accent-orange-500"
                      checked={selectedMethod === method.id}
                      onChange={() => setSelectedMethod(method.id)}
                    />
                  </label>
                ))}
              </div>
              {/* Card Details */}
              {selectedMethod === "card" && (
                <div className="mt-6 space-y-4">
                  <div>
                    <label className="block text-sm font-medium mb-1">
                      Name on Card
                    </label>
                    <input
                      type="text"
                      className="w-full border border-gray-300 rounded-[2px] p-2 focus:outline-none focus:ring-2 focus:ring-orange-500"
                      placeholder="John Doe"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-1">
                      Card Number
                    </label>
                    <input
                      type="text"
                      className="w-full border border-gray-300 rounded-[2px] p-2 focus:outline-none focus:ring-2 focus:ring-orange-500"
                      placeholder="1234 5678 9012 3456"
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium mb-1">
                        Expire Date
                      </label>
                      <input
                        type="text"
                        className="w-full border border-gray-300 rounded-[2px] p-2 focus:outline-none focus:ring-2 focus:ring-orange-500"
                        placeholder="DD/YY"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium mb-1">
                        CVC
                      </label>
                      <input
                        type="text"
                        className="w-full border border-gray-300 rounded-[2px] p-2 focus:outline-none focus:ring-2 focus:ring-orange-500"
                        placeholder="123"
                      />
                    </div>
                  </div>
                </div>
              )}
            </div>

            <div className="w-[872px] mt-10">
              <h2 className="font-medium text-[18px] leading-6 text-[#191C1F] mb-6">
                Additional Information
              </h2>
              <label htmlFor="companyName" className="text-sm leading-5">
                Order Notes <span className="text-[#929FA5]">(Optional)</span>
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  id="companyName"
                  placeholder="Notes about your order, e.g. special notes for delivery"
                  className="w-full p-3 pb-22 border-[1.5px] border-[#E4E7E9] rounded-[2px] text-[#77878F] text-sm leading-5 outline-none mr-4"
                />
              </div>
            </div>
          </div>

          <div className="border-1 border-[#E4E7E9] rounded-[4px] h-fit font-public-sans p-6">
            <h3 className="font-medium leading-6 text-[#191C1F]">
              Order Summery
            </h3>

            <div className="flex items-center gap-4 my-5">
              <Image src="/canon.png" alt="order" width={64} height={64} />
              <div>
                <h4 className="text-sm leading-5 mb-1.5">
                  Canon EOS 1500D DSLR Camera Body+ 18-...
                </h4>
                <p className="text-sm leading-5 text-[#5F6C72]">
                  1 x <span className="text-[#2DA5F3] font-semibold">$70</span>
                </p>
              </div>
            </div>
            <div className="flex items-center gap-4 my-5">
              <Image src="/headphone.png" alt="order" width={64} height={64} />
              <div>
                <h4 className="text-sm leading-5 mb-1.5">
                  Wired Over-Ear Gaming Headphones with U...
                </h4>
                <p className="text-sm leading-5 text-[#5F6C72]">
                  3 x <span className="text-[#2DA5F3] font-semibold">$250</span>
                </p>
              </div>
            </div>
            <div className=" mt-5 flex  w-full">
              <div className=" bg-white rounded-lg space-y-4 w-[424px]">
                <div className="flex justify-between">
                  <span className="text-[#5F6C72] text-sm">Sub‑total</span>
                  <span>$320</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[#5F6C72] text-sm">Shipping</span>
                  <span>Free</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[#5F6C72] text-sm">Discount</span>
                  <span>$24</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[#5F6C72] text-sm">Tax</span>
                  <span>$61.99</span>
                </div>
                <div className="border-t pt-4 flex justify-between text-lg font-semibold">
                  <span>Total</span>
                  <span>$357.99 USD</span>
                </div>
                <button className="w-full bg-[#FA8232] text-white py-5 rounded uppercase font-bold cursor-pointer">
                  Place order →
                </button>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default page;
