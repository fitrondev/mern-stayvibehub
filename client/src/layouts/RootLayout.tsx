import Footer from "@/components/layouts/footer/Footer";
import Header from "@/components/layouts/header/Header";
import { Outlet } from "react-router-dom";

const RootLayout = () => {
  return (
    <div>
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default RootLayout;
