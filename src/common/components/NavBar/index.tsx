import React from "react";
import { Navbar as RSNavbar, Nav } from "rsuite";
import Link from "next/link";
import { MdLibraryBooks } from "react-icons/md";

type Props = {
  ActionComponent?: React.ReactNode;
};

const Navbar: React.FC<Props> = ({ ActionComponent }) => {
  return (
    <RSNavbar className="z-50 sticky top-0 flex items-center justify-center gap-4 w-full">
      <div className="max-w-full w-[1536px] p-1">
        <RSNavbar.Brand as={Link} href="/" className="!px-0">
          <img src="/logo.svg" className="w-32" />
        </RSNavbar.Brand>

        <Nav className="!text-base !font-semibold flex items-center" pullRight>
          <Nav.Item
            className="!rounded-md"
            as={Link}
            href="/resume"
            icon={<MdLibraryBooks />}
          >
            Resume
          </Nav.Item>

          {ActionComponent}
        </Nav>
      </div>
    </RSNavbar>
  );
};

export default Navbar;
