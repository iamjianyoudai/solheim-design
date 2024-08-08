import PageLayout from "@/components/layout/PageLayout";
import Hero from "@/components/ui/Hero";
import { useRef } from "react";
import Products from "../../components/products/Products";

const ProductssPage: React.FC = () => {
  const ref = useRef<HTMLDivElement>(null);
  return (
    <PageLayout>
      <Hero
        className="pt-32 lg:pt-52 pb-8"
        title="Products"
        subTitle="Our Products"
      />
      <Products />
    </PageLayout>
  );
};

export default ProductssPage;
