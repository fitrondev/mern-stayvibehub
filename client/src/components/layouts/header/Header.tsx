import Logo from "@/components/atoms/logo/Logo";
import NavLinks from "@/components/atoms/navLinks/NavLinks";
import MobileNav from "./MobileNav";

const Header = () => {
  return (
    <header className="shadow-sm">
      <div className="container h-20 flex items-center justify-between">
        <div className="inline-flex items-center gap-2">
          <Logo />
          <h1 className="text-xl font-semibold">Stay Vibe</h1>
        </div>

        <nav className="hidden lg:block space-x-6">
          <NavLinks />
        </nav>

        {/* Mobile */}
        <div className="lg:hidden">
          <MobileNav />
        </div>
      </div>
    </header>
  );
};
export default Header;
