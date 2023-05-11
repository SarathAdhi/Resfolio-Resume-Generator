import React from "react";
import NavBar from "@components/NavBar";
import clsx from "clsx";
import { Component } from "types/component";
import { Container, Content } from "rsuite";
import Footer from "@components/Footer";
import Head from "next/head";

type Props = {
  title: string;
  ActionComponent?: React.ReactNode;
} & Component;

const PageLayout: React.FC<Props> = ({
  title,
  children,
  className,
  ActionComponent,
}) => {
  return (
    <>
      <Head>
        <title>{title} | ResFolio</title>
        <meta
          name="description"
          content="Resfolio is the ultimate online resume builder for job seekers who want to create a professional and impactful resume in minutes. Our user-friendly interface and customization options make it easy to create a resume that stands out from the crowd."
        />

        <meta
          name="og:title"
          property="og:title"
          content={title + " | ResFolio"}
        />

        <meta property="og:image" content="/templates/template-1.png" />

        <meta name="robots" content="index, follow" />
      </Head>

      <Container className="flex flex-col items-center min-h-screen">
        <NavBar ActionComponent={ActionComponent} />

        <Content
          className={clsx("p-2 sm:p-4 mb-4 max-w-full w-[1536px]", className)}
        >
          {children}
        </Content>

        <Footer />
      </Container>
    </>
  );
};

export default PageLayout;
