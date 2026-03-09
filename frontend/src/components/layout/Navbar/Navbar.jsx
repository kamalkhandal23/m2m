import NavbarLogo from "./NavbarLogo";
import NavbarLinks from "./NavbarLinks";
import NavbarActions from "./NavbarActions";

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full z-50">

      {/* gradient background */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#022f3f]/90 via-[#083c52]/70 to-transparent backdrop-blur-md"></div>

      <div className="relative max-w-[1300px] mx-auto flex items-center justify-between px-8 py-3 text-white">

        <NavbarLogo />

        <NavbarLinks />

        <NavbarActions />

      </div>

    </nav>
  );
}