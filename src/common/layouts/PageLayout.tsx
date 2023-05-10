import React from "react";
import NavBar from "@components/NavBar";
import clsx from "clsx";
import { Component } from "types/component";
import { Container, Content } from "rsuite";
import Footer from "@components/Footer";

type Props = {
  ActionComponent?: React.ReactNode;
} & Component;

const PageLayout: React.FC<Props> = ({
  children,
  className,
  ActionComponent,
}) => {
  return (
    <>
      <Container className="flex flex-col items-center gap-8 min-h-screen">
        <NavBar ActionComponent={ActionComponent} />

        <Content
          className={clsx("p-2 sm:p-4 !pt-0 max-w-full w-[1536px]", className)}
        >
          {children}
        </Content>

        <Footer />
      </Container>
    </>
  );
};

export default PageLayout;
