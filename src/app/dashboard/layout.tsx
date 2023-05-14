import Image from "next/image";
import SignOut from "@/components/SignOut";
import Logo from "@/assets/logo.svg";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div id="Page">
      <div id="HomeContainer">
        <div id="HomeHeader">
          <a href="#">
            <Logo className="w-10 h-10" alt="Quadra" />
          </a>
          <SignOut />
        </div>
        <div className="bg-gradient-to-r from-indigo-500 border rounded-lg">
          {children}
        </div>
      </div>
    </div>
  );
}
