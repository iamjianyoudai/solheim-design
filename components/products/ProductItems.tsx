import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { ProductType } from "../utils/types";

type ProductItemsProps = {
  currentItems: ProductType[];
};

const ProductItems: React.FC<ProductItemsProps> = ({ currentItems }) => {
  return (
    <>
      {currentItems &&
        currentItems.map(({ url, image, role, title }, index) => {
          const delay = index * 0.05;
          return (
            <motion.div
              key={index}
              className="relative overflow-hidden w-full lg:w-6/12 p-2 group"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{
                opacity: 1,
                y: 0,
                transition: { delay, duration: 0.5 },
              }}
              viewport={{ once: true }}
            >
              <Link href={url} className="overflow-hidden block relative">
                <Image
                  src={image}
                  alt="Product"
                  width={1064}
                  height={644}
                  className="object-cover object-center h-[400px] max-w-full transition group-hover:scale-[1.05] rounded-lg"
                />
              </Link>
              <div className="py-4 px-2">
                <span className="block mb-1 text-gray-500">{role}</span>
                <h3 className="mb-8">
                  <Link href={url} className="text-2xl leading-none">
                    {title}
                  </Link>
                </h3>
              </div>
            </motion.div>
          );
        })}
    </>
  );
};

export default ProductItems;
