import Container from "@/components/common/Container";
import Flex from "@/components/common/Flex";
import Image from "next/image";
import React from "react";

const NewProduct = () => {
  return (
    <Container>
      <Flex className={"gap-6 justify-between my-18"}>
        <Image
          src="/newProduct2.png"
          width={648}
          height={336}
          alt="newProduct"
        />
        <Image
          src="/newProduct1.png"
          width={648}
          height={336}
          alt="newProduct"
        />
      </Flex>
    </Container>
  );
};

export default NewProduct;
