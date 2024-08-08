"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import StyledLink from "../StyledLink";
import productsData from "../utils/ProductsData";
import { ProductType } from "../utils/types";
import PostCard from "./PostCard";

interface ProductContentProps {
  product: ProductType;
}

const formatDate = (dateString: string) => {
  const date = new Date(dateString);
  return date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });
};
const ProductContent: React.FC<ProductContentProps> = ({ product }) => {
  const { title, content, image, date, client, year, role } = product;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{
        opacity: 1,
        y: 0,
        transition: { delay: 0.2, duration: 0.5 },
      }}
      viewport={{ once: true }}
      className="pt-44 pb-20 wrapper"
    >
      <div className="mx-auto max-w-4xl">
        <div className="text-center mb-16 mx-auto">
          <h1 className="text-slate-900 text-center text-4xl lg:text-6xl font-medium ">
            {title}
          </h1>
          <p className="text-slate-500 mt-10">
            <span className="inline-flex space-x-3">
              <span>{formatDate(date)}</span>
              <span>&#8226;</span>
              <span>{role}</span>
            </span>
          </p>
        </div>
        <div className="mb-16">
          <Image
            src={image}
            alt={title}
            width={1065}
            height={644}
            className="object-cover object-top rounded-lg"
          />
        </div>
        <article className="prose mx-auto max-w-2xl">
          <div className="mx-auto max-w-2xl mb-10">
            <div className="flex justify-between">
              <div className="border-l border-gray-200 relative pl-3 before:content-[''] before:absolute before:top-0 before:-left-[1px] before:h-7 before:w-[1px] before:bg-blue-600">
                <span className="block text-gray-400">Client</span>
                <span>{client}</span>
              </div>

              <div className="border-l border-gray-200 relative pl-3 before:content-[''] before:absolute before:top-0 before:-left-[1px] before:h-7 before:w-[1px] before:bg-blue-600">
                <span className="block text-gray-400">Year</span>
                <span>{year}</span>
              </div>

              <div className="border-l border-gray-200 relative pl-3 before:content-[''] before:absolute before:top-0 before:-left-[1px] before:h-7 before:w-[1px] before:bg-blue-600">
                <span className="block text-gray-400">Role</span>
                <span>{role}</span>
              </div>
            </div>
          </div>
          <div>{content}</div>
        </article>
      </div>
      <div className="max-w-4xl mx-auto mt-20 lg:mt-32">
        <h2 className="text-2xl text-gray-700 mb-10">More Products</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {productsData
            .filter((el) => el.title !== title)
            .map((item, i: number) => {
              if (i > 2) return null;
              return <PostCard key={i} index={i} product={item} />;
            })}
        </div>
        <div className="flex justify-center mt-10">
          <StyledLink href="/products">View all Products</StyledLink>
        </div>
      </div>
    </motion.div>
  );
};

export default ProductContent;
