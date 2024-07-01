"use client";
import { Hero } from "@/components/Hero";
import PageLayout from "@/components/layout/PageLayout";

export default function Home() {
  return (
    <PageLayout>
      <Hero />
      {/* <section>
        <div className="flex min-h-screen flex-col items-center justify-between p-24 pt-32 pb-0 lg:pb-10 ">
          <p>content</p>
        </div>
      </section> */}
    </PageLayout>
  );
}
