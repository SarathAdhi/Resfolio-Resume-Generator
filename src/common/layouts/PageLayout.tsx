import React from "react";
import NavBar from "@components/NavBar";
import clsx from "clsx";
import { Component } from "types/component";

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
      <main className="flex flex-col items-center min-h-screen">
        <NavBar ActionComponent={ActionComponent} />

        <div className={clsx("p-4 max-w-full w-[1536px]", className)}>
          {children}
        </div>
      </main>
    </>
  );
};

export default PageLayout;
