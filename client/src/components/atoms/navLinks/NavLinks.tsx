import { cn } from "@/lib/utils";
import { NavLink } from "react-router-dom";

const links = [
  { title: "Home", path: "/" },
  { title: "Browser by", path: "/browserby" },
  { title: "Stories", path: "/stories" },
  { title: "Agents", path: "/agents" },
];

const NavLinks = ({ className }: { className?: string }) => {
  return (
    <>
      {links.map((item, index) => (
        <NavLink
          to={item.path}
          key={index}
          className={({ isActive }) => (isActive ? "text-primary" : "")}>
          <span
            className={cn(
              "hover:text-primary transition-colors duration-300 ease-in-out",
              className
            )}>
            {item.title}
          </span>
        </NavLink>
      ))}
    </>
  );
};
export default NavLinks;
