import type { Metadata } from "next";
import MainNavbar from "@/components/main/MainNavbar";
import MainFooter from "@/components/main/MainFooter";

export const metadata: Metadata = {
  title: {
    template: "%s, Kovana Coffee",
    default: "Kovana Coffee, Website Utama",
  },
};

export default function MainLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <MainNavbar />
      <main className="flex-1">{children}</main>
      <MainFooter />
    </>
  );
}
