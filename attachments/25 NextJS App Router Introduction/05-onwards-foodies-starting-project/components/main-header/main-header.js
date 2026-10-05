import Link from "next/link";
import Image from "next/image";
import logoImg from "@/assets/logo.png";
import mainHeaderCLasses from "./main-header.module.css";
import MainHeaderBackground from "./main-header-background";

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
              <Link href="/meals">Browse Meals</Link>
            </li>
            <li>
              <Link href="/communities">Foodies</Link>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
};

export default MainHeader;
