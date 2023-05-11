import React, { useState, useEffect } from "react";
import { Component } from "types/component";
import clsx from "clsx";
import { Form, Input, Nav } from "rsuite";
import About from "./components/About";
import { UseStoreProps, useAuthStore, useStore } from "@utils/store";
import { Drawer, Button } from "rsuite";
import Education from "./components/Education";
import Skills from "./components/Skills";
import Work from "./components/Work";
import Project from "./components/Project";
import ExtraCurricular from "./components/ExtraCurricular";
import Templates from "./components/Templates";
import { useAuthState } from "@hooks/useAuthState";
import { addDoc, updateDoc } from "@backend/lib";
import { Templates as _Temp } from "@utils/constants";
import Template_1 from "./Templates/Template_1";

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
  uuid: string;
  open: boolean;
  setOpen: (open: boolean) => void;
  DownloadButton: React.ReactNode;
};

const BuilderForm: React.FC<Props> = ({
  uuid,
  open,
  setOpen,
  DownloadButton,
}) => {
  const { resumes, getUserResumes } = useAuthStore();
  const [active, setActive] = useState("about");
  const [placement, setPlacement] = useState<"left" | "right">("left");

  const { formValues, setFormValues, activeTemplate, setTemplate } = useStore();
  const { user } = useAuthState();

  const resume = resumes.find((e) => e.uuid === uuid);

  const [resumeName, setResumeName] = useState(
    resume ? resume.resumeName : "resume-" + resumes.length + 1
  );

  useEffect(() => {
    if (resume) {
      let newFormValues = resume;

      setFormValues(newFormValues);

      const TemplateComp = _Temp.find(
        (_, i) => `template-${i + 1}` === resume.template
      );

      setTemplate(TemplateComp ? TemplateComp : Template_1, resume.template);
    }
  }, []);

  return (
    <>
      <Drawer
        className="!w-full lg:!w-[50%]"
        size="lg"
        placement={placement}
        open={open}
        onClose={() => setOpen(false)}
      >
        <Drawer.Header>
          <Drawer.Actions className="flex">
            {DownloadButton}

            <Button
              className="lg:!inline-block !hidden"
              appearance="ghost"
              onClick={() =>
                setPlacement(placement === "left" ? "right" : "left")
              }
            >
              {placement === "left"
                ? "Bring to Right side"
                : "Bring to Left side"}
            </Button>

            {user && (
              <Button
                appearance="primary"
                onClick={async () => {
                  if (resume) {
                    await updateDoc("resumes", resume.id, {
                      ...formValues,
                      resumeName,
                      template: activeTemplate,
                    });
                  } else {
                    await addDoc("resumes", {
                      ...formValues,
                      resumeName,
                      user: user?.uid,
                      uuid,
                      template: activeTemplate,
                    });

                    getUserResumes();
                  }
                  // setOpen(false);
                }}
              >
                {resume ? "Update" : "Create"}
              </Button>
            )}
          </Drawer.Actions>
        </Drawer.Header>

        <Drawer.Body className="!p-5">
          {user && (
            <Input
              value={resumeName}
              onChange={(e) => setResumeName(e)}
              placeholder="Enter a name for your resume"
            />
          )}

          <Nav
            className="my-5 hidden md:block"
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

          <Nav
            className="mb-5 block md:hidden"
            appearance="subtle"
            vertical
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
