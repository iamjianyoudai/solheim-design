import PageLayout from "@/components/layout/PageLayout";
import ProductContent from "@/components/products/ProductContent";
import productsData from "@/components/utils/ProductsData";
import { ProductType } from "@/components/utils/types";
import { GetStaticPaths, GetStaticProps } from "next";

interface ProductPageProps {
  product: ProductType;
}

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = productsData.map((product) => ({
    params: { slug: product.slug },
  }));

  return { paths, fallback: false };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const product = productsData.find((product) => product.slug === params?.slug);

  return {
    props: {
      product: product || null,
    },
  };
};

const ProductPage: React.FC<ProductPageProps> = ({ product }) => {
  if (!product) {
    return (
      <PageLayout>
        <p>Product not found</p>
      </PageLayout>
    );
  }

  return (
    <PageLayout>
      <ProductContent product={product} />
    </PageLayout>
  );
};

export default ProductPage;
