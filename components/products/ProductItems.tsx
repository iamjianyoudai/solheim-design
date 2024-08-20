import { motion, Variants } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { ArrowButton } from "../ArrowButton";
import { ProductType } from "../utils/types";

type ProductItemsProps = {
  currentItems: ProductType[];
};

const ProductItems: React.FC<ProductItemsProps> = ({ currentItems }) => {
  const itemVariants: Variants = {
    default: {
      scale: 1,
      translateY: 0,
    },
    hover: {
      scale: 1.03,
      // translateY: -3,
      transition: {
        duration: 0.3,
      },
    },
  };

  return (
    <>
      {currentItems &&
        currentItems.map(({ url, image, role, title }, index) => {
          const delay = index * 0.05;
          const [isHovered, setIsHovered] = useState(false);

          return (
            <motion.div
              key={index}
              className="relative overflow-hidden w-full lg:w-6/12 p-4"
              initial="default"
              whileHover="hover"
              variants={itemVariants}
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              <Link href={url} className="overflow-hidden block relative">
                <Image
                  src={image}
                  alt="Product"
                  width={1064}
                  height={644}
                  className="object-cover object-center h-[400px] max-w-full rounded-lg"
                />
                <div className="absolute bottom-4 right-4">
                  <ArrowButton isHovered={isHovered} />{" "}
                </div>
              </Link>
              <div className="py-4 px-2">
                <span className="block mb-1 text-gray-500">{role}</span>
                <h3 className="text-2xl leading-none">
                  <Link href={url}>{title}</Link>
                </h3>
              </div>
            </motion.div>
          );
        })}
    </>
  );
};

export default ProductItems;
