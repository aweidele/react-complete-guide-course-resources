import Image from "next/image";
import Link from "next/link";
import logoImg from "@/assets/logo.png";
import mainHeaderCLasses from "./main-header.module.css";
import MainHeaderBackground from "./main-header-background";
import NavLink from "./nav-link";

const MainHeader = () => {
  return (
    <>
      <MainHeaderBackground />
      <header className={mainHeaderCLasses.header}>
        <Link className={mainHeaderCLasses.logo} href="/">
          <Image src={logoImg} alt="A plate with food on it" priority />
          NextLevel Food
        </Link>

        <nav className={mainHeaderCLasses.nav}>
          <ul>
            <li>
              {/* Use client components as far down the compoent tree as possible, to reduce how much
                  is executed client side */}
              <NavLink href="/meals">Browse Meals</NavLink>
            </li>
            <li>
              <NavLink href="/community">Foodies</NavLink>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
};

export default MainHeader;
