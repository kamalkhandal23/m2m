const links = [
  "HOME",
  "SCHEDULE",
  "ABOUT US",
  "OUR FLEET",
  "EXPLORE",
  "FAQ",
  "CONTACT US",
];

export default function NavbarLinks() {
  return (
    <ul className="hidden md:flex items-center gap-10 text-[14px] font-semibold tracking-wide">

      {links.map((link, index) => (
        <li
          key={link}
          className={`cursor-pointer hover:text-[#46d7ff] transition ${
            index === 0 ? "text-[#46d7ff]" : ""
          }`}
        >
          {link}
        </li>
      ))}

    </ul>
  );
}