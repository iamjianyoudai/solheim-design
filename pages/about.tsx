import Story from "@/components/about/Story";
import Team from "@/components/about/Team";
import PageLayout from "@/components/layout/PageLayout";
import Hero from "@/components/ui/Hero";

const aboutPage = () => {
  return (
    <PageLayout>
      <Hero
        className="pt-32 lg:pt-52 pb-8"
        title="TRADISJON OG FORNYELSE"
        subTitle="About us"
      />
      {/* 
      <Testimonials className="pt-10 lg:pt-44 pb-10 lg:bg-32" /> */}
      <Story className="mt-16" />
      <Team className="py-10 lg:py-32" />
    </PageLayout>
  );
};
export default aboutPage;
