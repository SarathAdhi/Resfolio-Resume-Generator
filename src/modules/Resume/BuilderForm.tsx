import React, { useState } from "react";
import { Component } from "types/component";
import clsx from "clsx";
import { Form, Nav } from "rsuite";
import About from "./components/About";
import { UseStoreProps, useStore } from "@utils/store";
import { Drawer, Button } from "rsuite";
import Education from "./components/Education";
import Skills from "./components/Skills";
import Work from "./components/Work";
import Project from "./components/Project";
import ExtraCurricular from "./components/ExtraCurricular";
import Templates from "./components/Templates";

export const Grid: React.FC<Component> = ({ className, children }) => (
  <div className={clsx("grid md:grid-cols-2 gap-4", className)}>{children}</div>
);

const Tabs = [
  { name: "Templates", Component: Templates },
  { name: "About", Component: About },
  { name: "Skills", Component: Skills },
  { name: "Education", Component: Education },
  { name: "Work", Component: Work },
  { name: "Projects", Component: Project },
  { name: "Extra Curricular", Component: ExtraCurricular },
];

type Props = {
  open: boolean;
  setOpen: (open: boolean) => void;
};

const BuilderForm: React.FC<Props> = ({ open, setOpen }) => {
  const { formValues, setFormValues } = useStore();
  const [active, setActive] = useState("about");

  console.log({ formValues });

  return (
    <>
      <Drawer placement="left" open={open} onClose={() => setOpen(false)}>
        <Drawer.Header>
          <Drawer.Title>Edit Details</Drawer.Title>
          <Drawer.Actions>
            <Button appearance="primary" onClick={() => setOpen(false)}>
              Save
            </Button>
          </Drawer.Actions>
        </Drawer.Header>

        <Drawer.Body className="!p-5">
          <Nav
            className="mb-5"
            appearance="subtle"
            activeKey={active}
            onSelect={setActive}
          >
            {Tabs.map(({ name }) => (
              <Nav.Item key={name} eventKey={name.toLowerCase()}>
                {name}
              </Nav.Item>
            ))}
          </Nav>

          <Form
            className="space-y-4"
            formValue={formValues}
            onChange={(val) =>
              setFormValues(val as UseStoreProps["formValues"])
            }
            fluid
          >
            {Tabs.map(
              ({ name, Component }) =>
                name.toLowerCase() === active && <Component key={name} />
            )}
          </Form>
        </Drawer.Body>
      </Drawer>
    </>
  );
};

export default BuilderForm;