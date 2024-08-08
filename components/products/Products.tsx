import React, { useState } from "react";
import productsData from "../utils/ProductsData";
import Pagination from "./Pagination";
import ProductItems from "./ProductItems";

const ITEMS_PER_PAGE = 4;

const Products: React.FC = () => {
  const [currentPage, setCurrentPage] = useState(1);

  const totalItems = productsData.length;
  const totalPages = Math.ceil(totalItems / ITEMS_PER_PAGE);

  const handlePageChange = (pageNumber: number) => {
    if (pageNumber > 0 && pageNumber <= totalPages) {
      setCurrentPage(pageNumber);
    }
  };

  const currentItems = productsData.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE
  );

  return (
    <section className="pt-8 lg:pt-8 pb-0 lg:pb-10">
      <div className="wrapper">
        <div className="lg:w-10/12 mx-auto flex flex-wrap mb-10">
          <ProductItems currentItems={currentItems} />
        </div>
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={handlePageChange}
        />
      </div>
    </section>
  );
};

export default Products;
