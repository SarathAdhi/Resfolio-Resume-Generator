import React from "react";
import { Navbar as RSNavbar, Nav, Header, Tooltip, Whisper } from "rsuite";
import Link from "next/link";
import { MdLibraryBooks } from "react-icons/md";
import { BsGithub } from "react-icons/bs";
import { HiHome, HiUser } from "react-icons/hi";
import Image from "next/image";
import { BiLogIn } from "react-icons/bi";
import { useFirebaseLogin } from "@hooks/useFirebaseLogin";
import { useAuthState } from "@hooks/useAuthState";
import { FaUser, FaUserAlt } from "react-icons/fa";

type Props = {
  ActionComponent?: React.ReactNode;
};

const pages = [
  {
    name: "Home",
    href: "/",
    Icon: HiHome,
  },
  {
    name: "Resume Builder",
    href: "/resume",
    Icon: MdLibraryBooks,
  },
  {
    name: "My Profile",
    href: "/profile",
    Icon: HiUser,
  },
];

const Navbar: React.FC<Props> = ({ ActionComponent }) => {
  const { user, loading } = useAuthState();
  const { handleLogin } = useFirebaseLogin();

  return (
    <Header className="w-full z-50 sticky top-0">
      <RSNavbar className="flex items-center justify-center gap-4 w-full">
        <div className="max-w-full w-[1536px] sm:p-1 flex items-center">
          <RSNavbar.Brand as={Link} href="/" className="!px-0">
            <Image
              width={100}
              height={100}
              src="/logo.svg"
              className="w-20 mt-1 sm:mt-0 sm:w-32"
              alt="Resfolio logo"
            />
          </RSNavbar.Brand>

          <div className="flex-1" />

          <Nav
            className="!text-base !font-semibold flex items-center"
            pullRight
          >
            {pages.map(({ Icon, name, href }) => (
              <Whisper
                key={name}
                placement="bottom"
                speaker={<Tooltip>{name}</Tooltip>}
              >
                <Nav.Item
                  className="!hidden sm:!flex"
                  as={Link}
                  href={href}
                  icon={<Icon size={20} />}
                />
              </Whisper>
            ))}

            {!user && (
              <Whisper placement="bottom" speaker={<Tooltip>Login</Tooltip>}>
                <Nav.Item
                  className="!hidden sm:!flex"
                  onClick={handleLogin}
                  icon={<BiLogIn size={20} />}
                />
              </Whisper>
            )}

            <Nav.Menu
              title="More"
              placement="bottomEnd"
              className="!p-0 sm:!hidden !text-sm"
            >
              <div className="space-y-2 p-2">
                {pages.map(({ Icon, name, href }) => (
                  <Nav.Item
                    key={name}
                    as={Link}
                    className="!p-2 !rounded-md !w-full !flex items-center gap-2"
                    href={href}
                    icon={<Icon size={20} />}
                  >
                    {name}
                  </Nav.Item>
                ))}

                <Nav.Item
                  as={Link}
                  className="!p-2 !rounded-md !w-full !flex items-center gap-2"
                  href="https://github.com/SarathAdhi/Resfolio-Resume-Generator"
                  target="_blank"
                  icon={<BsGithub size={20} />}
                >
                  GitHub
                </Nav.Item>

                {ActionComponent}
              </div>
            </Nav.Menu>

            <div className="!hidden sm:!flex">{ActionComponent}</div>

            <Whisper
              placement="bottom"
              speaker={<Tooltip>Star on GitHub</Tooltip>}
            >
              <Nav.Item
                as={Link}
                className="!hidden sm:!flex"
                href="https://github.com/SarathAdhi/Resfolio-Resume-Generator"
                target="_blank"
              >
                <BsGithub size={20} />
              </Nav.Item>
            </Whisper>
          </Nav>
        </div>
      </RSNavbar>
    </Header>
  );
};

export default Navbar;
