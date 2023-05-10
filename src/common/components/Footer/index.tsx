import Link from "next/link";
import React from "react";
import { Footer as _Footer } from "rsuite";

const Footer = () => {
  return (
    <_Footer className="w-full bg-[#111] text-white space-y-4">
      <div className="p-4 grid justify-center sm:justify-start sm:grid-cols-3 gap-8">
        <img className="w-40" src="/logo.svg" />

        <div className="flex flex-col items-center text-center sm:items-start sm:text-left gap-2">
          <h5>Links</h5>

          <div className="grid">
            <Link href="/">Home</Link>
            <Link href="/resume">Resume</Link>
            <Link href="https://github.com/SarathAdhi/Resfolio-Resume-Generator">
              GitHub
            </Link>
          </div>
        </div>

        <div className="flex flex-col items-center text-center sm:items-start sm:text-left gap-2">
          <h5>Contributor</h5>

          <Link href="https://github.com/SarathAdhi">Sarath Adhithya</Link>
        </div>
      </div>

      <div className="p-2 bg-black">
        <p className="text-center">Copyright © 2023 Resfolio Resume Builder</p>
      </div>
    </_Footer>
  );
};

export default Footer;
