"use client";
import Breadcrumb from "@/components/common/Breadcrumb";
import Container from "@/components/common/Container";
import React, { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import ShoppinCard from "@/components/allComponents/cart/ShoppincCard";

const CheckoutPage = () => {
  // Form state
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    companyName: "",
    address: "",
    country: "",
    region: "",
    city: "",
    postcode: "",
    email: "",
    phone: "",
  });

  // Payment method state (default to COD)
  const [paymentMethod, setPaymentMethod] = useState("COD");

  // Loading state during order placement
  const [loading, setLoading] = useState(false);

  // Dummy cartItems and totalPrice, replace with real data from your store/context
  const cartItems = [
    { product: "productId123", quantity: 2, variant: "variantId456" },
  ];
  const totalPrice = 357.99;

  // Handle input changes for text inputs
  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prev) => ({ ...prev, [id]: value }));
  };

  // Handle select inputs (country, region, city)
  const handleSelectChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // Place order submit handler
  const handlePlaceOrder = async () => {
    // Simple validation (expand as needed)
    if (
      !formData.address ||
      !formData.city ||
      !formData.phone ||
      !paymentMethod
    ) {
      alert("Please fill in all required fields.");
      return;
    }

    if (paymentMethod === "ONLINE") {
      alert("Online payment selected. This feature is not implemented yet.");
      return;
    }

    setLoading(true);

    const user = `${formData.firstName} ${formData.lastName}`;

    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_URL}/api/v1/order/place-order`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            user,
            phone: formData.phone,
            address: formData.address,
            city: formData.city,
            postcode: formData.postcode,
            paymentMethod,
            cartItems,
            totalprice: totalPrice,
          }),
        }
      );

      const data = await response.json();

      if (data.success) {
        alert("Order placed successfully!");
        // You can clear form/cart or redirect here
      } else {
        alert("Failed to place order: " + data.message);
      }
    } catch (error) {
      alert("Error: " + error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <Breadcrumb />
      <Container>
        <ShoppinCard />
        <div className="flex justify-between gap-6 mt-10">
          <div className="font-public-sans mb-10">
            <h2 className="font-medium text-[18px] leading-6 text-[#191C1F]">
              Billing Information
            </h2>

            {/* User Name */}
            <div className="flex gap-4 items-center mt-6">
              <div>
                <label htmlFor="firstName" className="text-sm leading-5">
                  User Name
                </label>
                <div className="mt-2 flex gap-4">
                  <input
                    type="text"
                    id="firstName"
                    placeholder="First name"
                    value={formData.firstName}
                    onChange={handleChange}
                    className="w-[206px] p-3 border-[1.5px] border-[#E4E7E9] rounded-[2px] text-[#77878F] text-sm leading-5 outline-none"
                  />
                  <input
                    type="text"
                    id="lastName"
                    placeholder="Last name"
                    value={formData.lastName}
                    onChange={handleChange}
                    className="w-[206px] p-3 border-[1.5px] border-[#E4E7E9] rounded-[2px] text-[#77878F] text-sm leading-5 outline-none"
                  />
                </div>
              </div>

              {/* Company Name */}
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
                    value={formData.companyName}
                    onChange={handleChange}
                    className="w-[428px] p-3 border-[1.5px] border-[#E4E7E9] rounded-[2px] text-[#77878F] text-sm leading-5 outline-none"
                  />
                </div>
              </div>
            </div>

            {/* Address */}
            <div className="mt-4">
              <label htmlFor="address" className="text-sm leading-5">
                Address
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  id="address"
                  placeholder="Address"
                  value={formData.address}
                  onChange={handleChange}
                  className="w-[872px] p-3 border-[1.5px] border-[#E4E7E9] rounded-[2px] text-[#77878F] text-sm leading-5 outline-none"
                />
              </div>
            </div>

            {/* Country, Region, City, Postcode */}
            <div className="flex gap-4 items-center mt-4">
              <div className="w-[206px]">
                <label htmlFor="country">Country</label>
                <div className="relative mt-2">
                  <select
                    id="country"
                    name="country"
                    value={formData.country}
                    onChange={handleSelectChange}
                    className="w-[206px] p-3 border-[1.5px] border-[#E4E7E9] rounded-[2px] text-[#77878F] text-sm outline-none appearance-none"
                  >
                    <option value="">Select...</option>
                    <option value="Bangladesh">Bangladesh</option>
                  </select>
                  <div className="flex items-center absolute right-5 text-xl text-[#ADB7BC] top-1/2 -translate-y-1/2">
                    <IoIosArrowDown className="w-5 h-5" />
                  </div>
                </div>
              </div>

              <div className="w-[206px]">
                <label htmlFor="region">Region/State</label>
                <div className="relative mt-2">
                  <select
                    id="region"
                    name="region"
                    value={formData.region}
                    onChange={handleSelectChange}
                    className="w-[206px] p-3 border-[1.5px] border-[#E4E7E9] rounded-[2px] text-[#77878F] text-sm outline-none appearance-none"
                  >
                    <option value="">Select...</option>
                    <option value="Dhaka">Dhaka</option>
                    <option value="Chattogram">Chattogram</option>
                    <option value="Sylhet">Sylhet</option>
                  </select>
                  <div className="flex items-center absolute right-5 text-xl text-[#ADB7BC] top-1/2 -translate-y-1/2">
                    <IoIosArrowDown className="w-5 h-5" />
                  </div>
                </div>
              </div>

              <div className="w-[206px]">
                <label htmlFor="city">City</label>
                <div className="relative mt-2">
                  <select
                    id="city"
                    name="city"
                    value={formData.city}
                    onChange={handleSelectChange}
                    className="w-[206px] p-3 border-[1.5px] border-[#E4E7E9] rounded-[2px] text-[#77878F] text-sm outline-none appearance-none"
                  >
                    <option value="">Select...</option>
                    <option value="Dhaka">Dhaka</option>
                    <option value="Narayonganj">Narayonganj</option>
                    <option value="Gazipur">Gazipur</option>
                  </select>
                  <div className="flex items-center absolute right-5 text-xl text-[#ADB7BC] top-1/2 -translate-y-1/2">
                    <IoIosArrowDown className="w-5 h-5" />
                  </div>
                </div>
              </div>

              <div className="w-[206px]">
                <label htmlFor="postcode">ZIP/Post Code</label>
                <div className="mt-2">
                  <input
                    type="text"
                    id="postcode"
                    placeholder="ZIP Code"
                    value={formData.postcode}
                    onChange={handleChange}
                    className="w-full p-3 border-[1.5px] border-[#E4E7E9] rounded-[2px] text-[#77878F] text-sm outline-none"
                  />
                </div>
              </div>
            </div>

            {/* Email and Phone */}
            <div className="flex items-center gap-4 mt-6">
              <div>
                <label htmlFor="email" className="text-sm leading-5">
                  Email
                </label>
                <div className="mt-2">
                  <input
                    type="email"
                    id="email"
                    placeholder="Enter your email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-[428px] p-3 border-[1.5px] border-[#E4E7E9] rounded-[2px] text-[#77878F] text-sm outline-none"
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
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-[428px] p-3 border-[1.5px] border-[#E4E7E9] rounded-[2px] text-[#77878F] text-sm outline-none"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Payment Summary & Payment Method */}
          <div className="border-1 border-[#E4E7E9] rounded-[4px] h-fit font-public-sans p-6">
            <div>
              <h3>Payment Method</h3>
              <div className="space-y-3">
                <label className="flex items-center gap-3 p-3 border rounded-lg cursor-pointer hover:bg-gray-100 transition">
                  <input
                    type="radio"
                    name="payment"
                    value="COD"
                    checked={paymentMethod === "COD"}
                    onChange={() => setPaymentMethod("COD")}
                    className="form-radio h-5 w-5 accent-[#FA8232]"
                  />
                  <span className="text-gray-800 font-medium">
                    Cash on Delivery
                  </span>
                </label>

                <label className="flex items-center gap-3 p-3 border rounded-lg cursor-pointer hover:bg-gray-100 transition">
                  <input
                    type="radio"
                    name="payment"
                    value="ONLINE"
                    checked={paymentMethod === "ONLINE"}
                    onChange={() => setPaymentMethod("ONLINE")}
                    className="form-radio h-5 w-5 accent-[#FA8232]"
                  />
                  <span className="text-gray-800 font-medium">
                    Online Payment
                  </span>
                </label>
              </div>
            </div>

            {/* Summary */}
            <div className="mt-5 flex w-full">
              <div className="bg-white rounded-lg space-y-4 w-[424px]">
                <div className="flex justify-between">
                  <span className="text-[#5F6C72] text-sm">Sub‑total</span>
                  <span>${totalPrice.toFixed(2)}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[#5F6C72] text-sm">Shipping</span>
                  <span>Free</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[#5F6C72] text-sm">Discount</span>
                  <span>$24.00</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[#5F6C72] text-sm">Tax</span>
                  <span>$61.99</span>
                </div>
                <div className="border-t pt-4 flex justify-between text-lg font-semibold">
                  <span>Total</span>
                  <span>${totalPrice.toFixed(2)} USD</span>
                </div>
                <button
                  disabled={loading}
                  onClick={handlePlaceOrder}
                  className="w-full bg-[#FA8232] text-white py-5 rounded uppercase font-bold cursor-pointer disabled:opacity-50"
                >
                  {loading ? "Placing order..." : "Place order →"}
                </button>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default CheckoutPage;
