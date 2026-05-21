import { ReactNode } from "react";
import Header from "./Header";
import Footer from "./Footer";
import CookieConsent from "./CookieConsent";

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      <main className="flex-1">{children}</main>
      <Footer />
      <CookieConsent />
    </div>
  );
};

export default Layout;
