import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Footer as _Footer } from "rsuite";

const Footer = () => {
  return (
    <_Footer className="w-full bg-[#111] text-white space-y-4">
      <div className="p-4 flex flex-col items-center justify-center gap-8">
        <div className="max-w-full w-[800px] flex flex-col items-center justify-center gap-4">
          <Image
            width={100}
            height={100}
            className="w-40"
            src="/logo.svg"
            alt="Resfolio logo"
          />

          <p className="text-center">
            Resfolio is the ultimate online resume builder for job seekers who
            want to create a professional and impactful resume in minutes.
          </p>
        </div>

        <div className="flex items-center text-center gap-4">
          <Link href="/">Home</Link>
          <Link href="/resume">Resume</Link>
          <Link href="https://github.com/SarathAdhi/Resfolio-Resume-Generator">
            GitHub
          </Link>
        </div>
      </div>

      <div className="p-2 bg-black">
        <p className="text-center">Copyright © 2023 Resfolio Resume Builder</p>
        <p className="text-center">
          Designed by -{" "}
          <Link href="https://github.com/SarathAdhi">Sarath Adhithya</Link>
        </p>
      </div>
    </_Footer>
  );
};

export default Footer;
