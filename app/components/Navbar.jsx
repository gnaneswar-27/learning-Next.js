import Link from "next/link";
import React from "react";
import Logo from "./dojo-logo.png";
import Image from "next/image";

const Navbar = () => {
  return (
    <nav>
      <Image
       src={Logo}
       alt="logo"
       width={70}
       quality={100}
       placeholder="blur"
       />
      <h1>Helpdesk</h1>
      <Link href="/">DashBoard</Link>
      <Link href="/tickets">Tickets</Link>
    </nav>
  );
};

export default Navbar;
