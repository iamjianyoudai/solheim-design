import ContactForm from "@/components/contact/ContactForm";
import PageLayout from "@/components/layout/PageLayout";
import Hero from "@/components/ui/Hero";

const contactPage = () => {
  return (
    <PageLayout>
      <Hero
        className="pt-32 lg:pt-52 pb-8"
        title=" Contact"
        subTitle="GET IN TOUCH"
      />

      <ContactForm className="mt-16" />
    </PageLayout>
  );
};
export default contactPage;
