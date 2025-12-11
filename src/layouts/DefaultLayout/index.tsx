import type { ReactNode } from "react";
import { Footer } from "../../components/Footer";
import { Header } from "../../components/Header";

interface DefaultLayoutProps {
  children: ReactNode;
}

export function DefaultLayout({ children }: DefaultLayoutProps) {
  return (
    <div className="flex flex-col min-h-screen">
      <div className="fixed top-0 left-0 w-full bg-white z-50">
        <Header />
      </div>

      <main className="flex-1 pt-20">{children}</main>

      <Footer />
    </div>
  );
}
