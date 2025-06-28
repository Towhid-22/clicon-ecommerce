import React from "react";
import { Card, CardContent, CardTitle } from "@/components/ui/card";
import Container from "@/components/common/Container";
import Image from "next/image";
import Link from "next/link";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const Category = () => {
  const categoryData = [
    {
      id: 1,
      name: "Computer & Laptop",
      img: "/Category_image/computer.png",
    },
    {
      id: 2,
      name: "SmartPhone",
      img: "/Category_image/mobile.png",
    },
    {
      id: 3,
      name: "Headphones",
      img: "/Category_image/headphone.png",
    },
    {
      id: 4,
      name: "Accessories",
      img: "/Category_image/keyboard.png",
    },
    {
      id: 5,
      name: "Accessories",
      img: "/Category_image/camera.png",
    },
    {
      id: 6,
      name: "TV & Homes",
      img: "/Category_image/tv.png",
    },
    {
      id: 7,
      name: "Computer & Laptop",
      img: "/Category_image/computer.png",
    },
    {
      id: 8,
      name: "SmartPhone",
      img: "/Category_image/mobile.png",
    },
    {
      id: 9,
      name: "Headphones",
      img: "/Category_image/headphone.png",
    },
    {
      id: 10,
      name: "Accessories",
      img: "/Category_image/keyboard.png",
    },
    {
      id: 11,
      name: "Accessories",
      img: "/Category_image/camera.png",
    },
    {
      id: 12,
      name: "TV & Homes",
      img: "/Category_image/tv.png",
    },
  ];
  return (
    <Container>
      <div>
          <h3 className="font-poppins font-semibold text-[32px] leading-10 text-[#191C1F] my-8 text-center">
            Shop with Categorys
          </h3>
        </div>
      <Carousel className="w-full">
        <CarouselContent className="-ml-1">
          {categoryData.map((item, index) => (
            <CarouselItem
              key={index}
              className="pl-1 md:basis-1/2 lg:basis-1/6"
            >
              <Link href="/" className="p-1">
                <Card className={`rounded-[6px] w-[205px] h-[236px]`}>
                  <CardContent className="flex aspect-square items-center justify-center p-2">
                    <div className="flex flex-col items-center justify-between">
                      <Image
                        src={item.img}
                        alt={item.name}
                        width={148}
                        height={148}
                        className="w-[148px] h-[148px]"
                      />
                      <CardTitle
                        className={`text-center font-poppins font-medium text-base leading-6 text-[#191c1f]`}
                      >
                        {item.name}
                      </CardTitle>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </Container>
  );
};

export default Category;
