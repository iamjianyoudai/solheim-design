import React, { useRef } from "react";
import Header from "./header/Header";

interface PageLayoutProps {
  children: React.ReactNode;
}

const PageLayout: React.FC<PageLayoutProps> = ({ children }) => {
  const mainContentRef = useRef<HTMLElement>(null);
  const contentLocale = "en_US";

  return (
    <>
      <Header />
      <main
        id="main"
        lang={contentLocale.replace("_", "-")}
        ref={mainContentRef}
        // className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8"
      >
        {children}
      </main>
      {/* <Footer /> */}
    </>
  );
};

export default PageLayout;
