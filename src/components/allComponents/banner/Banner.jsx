import Container from "@/components/common/Container";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Banner = () => {
  return (
    <div className="mt-8">
      <Container>
        <div className="flex justify-between">
          <Link href="/">
            <Image src="/banner1.png" width={872} height={520} alt="banner" />
          </Link>
          <div className="flex flex-col gap-6">
            <Link href="/">
              <Image src="/banner2.png" width={424} height={248} alt="banner" />
            </Link>
            <Link href="/">
              <Image src="/banner3.png" width={424} height={248} alt="banner" />
            </Link>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Banner;
