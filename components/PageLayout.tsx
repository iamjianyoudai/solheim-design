import React, { useRef } from "react";
import { Header } from "./Header";

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
      >
        {children}
      </main>
      {/* <Footer /> */}
    </>
  );
};

export default PageLayout;
