import Testimonials from "@/components/about/Testimonials";
import PageLayout from "@/components/layout/PageLayout";
import Hero from "@/components/ui/Hero";

const aboutPage = () => {
  return (
    <PageLayout>
      <Hero
        className="pt-32 lg:pt-52 pb-8"
        title="Blueprinting Tomorrow's Landscape Today"
        subTitle="About us"
      />
      <Testimonials className="pt-10 lg:pt-44 pb-10 lg:bg-32" />
    </PageLayout>
  );
};
export default aboutPage;
