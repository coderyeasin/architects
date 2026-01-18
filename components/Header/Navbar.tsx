import Link from "next/link";

interface navType {
  name: string;
  path: string;
}

const navLinks: navType[] = [
  { name: "Home", path: "/" },
  { name: "About", path: "#" },
  { name: "Contact Us", path: "#" },
  { name: "Login", path: "#" },
];

const Navbar = () => {
  return (
    <header>
      <nav className="font-work flex flex-col md:flex-row justify-between items-center py-6 md:py-10 gap-4 md:gap-0">
        <Link
          href="#"
          className="font-bold text-2xl md:text-[45px] text-textPrimary mb-2 md:mb-0"
        >
          G3 Architects
        </Link>
        <ul className="flex flex-col md:flex-row justify-center items-center gap-4 md:gap-x-20">
          {navLinks.map((item, i) => (
            <li
              key={i}
              className="font-medium text-base md:text-[18px] text-[#424242] leading-7"
            >
              <Link href={item.path}>{item.name}</Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
