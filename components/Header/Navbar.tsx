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
      <nav className="font-work flex justify-between items-center py-10">
        <Link href="#" className="font-bold text-[45px] text-textPrimary">
          G3 Architects
        </Link>
        <ul className="flex justify-center items-center gap-x-20">
          {navLinks.map((item, i) => (
            <li
              key={i}
              className="font-medium text-[18px] text-[#424242] leading-7"
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
