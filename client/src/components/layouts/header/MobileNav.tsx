import NavLinks from "@/components/atoms/navLinks/NavLinks";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { RiMenu3Fill } from "react-icons/ri";

const MobileNav = () => {
  return (
    <Sheet>
      <SheetTrigger>
        <RiMenu3Fill className="size-6" />
      </SheetTrigger>
      <SheetContent className="h-full">
        <nav className="h-full flex flex-col justify-center gap-6">
          <NavLinks className="text-2xl font-semibold" />
        </nav>
      </SheetContent>
    </Sheet>
  );
};
export default MobileNav;
