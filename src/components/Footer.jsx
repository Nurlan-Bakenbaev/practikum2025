import React from "react";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="w-full py-6 border-t m-10">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4 px-4">
        <div className=" text-lg font-semibold">Praktikum 2025</div>
    
        <nav className="flex gap-6 ">
          <Link href="/" className="hover:underline">
            Startseite
          </Link>
          <Link href="/praktikum" className="hover:underline">
            Praktikum
          </Link>
          <Link href="/about" className="hover:underline">
            Über uns
          </Link>
          <Link href="/kontakt" className="hover:underline">
            Kontakt
          </Link>
        </nav>
      </div>
          <div className="text-sm text-center ">
          &copy; {new Date().getFullYear()} Alle Rechte vorbehalten.
          <br />
          Bilder von
          <a
            href="https://www.freepik.com"
            target="_blank"
            rel="noopener noreferrer"
            className="underline">
            Freepik
          </a>
        </div>
    </footer>
  );
};

export default Footer;
