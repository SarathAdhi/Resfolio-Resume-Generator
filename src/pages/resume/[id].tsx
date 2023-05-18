import PageLayout from "@layouts/PageLayout";
import React, { useRef, useState, useEffect } from "react";
import {
  Button,
  Input,
  Loader,
  Popover,
  Tag,
  TagPicker,
  Whisper,
} from "rsuite";
import { useReactToPrint } from "react-to-print";
import BuilderForm from "@modules/Resume/BuilderForm";
import { HiOutlineArrowSmRight } from "react-icons/hi";
import { FiDownload } from "react-icons/fi";
import { ElementsColorProps, useAuthStore, useStore } from "@utils/store";
import { useRouter } from "next/router";
import withAuth from "@hoc/withAuth";
import Template_1 from "@modules/Resume/Templates/Template_1";
import { Templates as _Temp, initialFormValue } from "@utils/constants";
import { HexColorPicker } from "react-colorful";
import { OverlayTriggerHandle } from "rsuite/esm/Picker";
import { MdClose } from "react-icons/md";
import Head from "next/head";

const elements = ["Title", "Link", "Skills", "Text", "Icon"];

const data = elements.map((item) => ({
  label: item,
  value: item.toLowerCase(),
}));

type Props = {
  title?: string;
};

const ResumePage: React.FC<Props> = ({ title }) => {
  const router = useRouter();
  const uuid = `${router.query?.id}`;

  const { Template, setFormValues, setTemplate } = useStore();
  const { resumes } = useAuthStore();

  const myResumeRef = useRef(null);
  const triggerRef = useRef<OverlayTriggerHandle>(null);

  const [open, setOpen] = useState(false);
  const [isInitializingTemplate, setIsInitializingTemplate] = useState(true);
  const [elementKeys, setElementKeys] = useState([data[0].value]);
  const [elementsColor, setElementsColor] = useState<ElementsColorProps>({
    link: "",
    skills: "",
    title: "",
  });
  const [color, setColor] = useState("#1675e0");

  const downloadPdfDocument = useReactToPrint({
    content: () => myResumeRef.current,
  });

  function initializeTemplate() {
    const resume = resumes.find((e) => e.uuid === uuid);

    if (resume) {
      let newFormValues = resume;

      setFormValues(newFormValues);

      const TemplateComp = _Temp.find(
        (_, i) => `template-${i + 1}` === resume.template
      );

      setTemplate(TemplateComp ? TemplateComp : Template_1, resume.template);
    } else {
      setFormValues(initialFormValue);
      setTemplate(Template_1, "template-1");
    }

    setIsInitializingTemplate(false);
  }

  useEffect(() => {
    initializeTemplate();
  }, []);

  return (
    <>
      <Head>
        <style
          dangerouslySetInnerHTML={{
            __html: `
              .link-color {
                color: ${elementsColor.link} !important;
              }

              .title {
                color: ${elementsColor.title} !important;
              }

              .skills-bg {
                background-color: ${elementsColor.skills || "blue"} !important;
              }

              .text-color {
                color: ${elementsColor.text || "black"} !important;
              }

              .svg-color {
                color: ${elementsColor.icon || "black"} !important;
              }
         `,
          }}
        />
      </Head>

      <PageLayout
        title={title || `Resume - ${uuid}`}
        className="flex flex-col gap-4"
      >
        <button
          onClick={() => setOpen(true)}
          className="fixed left-0 top-[50%] bottom-[50%] h-10 rounded-r-lg text-2xl font-bold bg-gray-500 text-white"
        >
          <HiOutlineArrowSmRight />
        </button>

        <div className="grid place-content-center">
          <Whisper
            ref={triggerRef}
            trigger="none"
            placement="bottom"
            speaker={
              <Popover
                className="!z-[99]"
                title={
                  <div className="text-lg font-semibold">Select your color</div>
                }
              >
                <div className="space-y-2">
                  <button
                    className="absolute top-4 right-4"
                    onClick={() => triggerRef?.current?.close()}
                  >
                    <MdClose size={20} />
                  </button>

                  <TagPicker
                    value={elementKeys}
                    onSelect={(e) => {
                      setElementKeys(e);
                    }}
                    className="w-full"
                    menuClassName="!z-[99] w-auto"
                    data={data}
                    cleanable
                  />

                  <Input value={color} onChange={setColor} />

                  <HexColorPicker
                    color={color}
                    onChange={(e) => {
                      let obj: ElementsColorProps = {
                        ...elementsColor,
                      };

                      elementKeys.forEach((key) => {
                        obj[key] = e;
                      });

                      setElementsColor(obj);
                      setColor(e);
                    }}
                  />
                </div>
              </Popover>
            }
          >
            <div className="relative">
              <Button
                appearance="primary"
                onClick={() => triggerRef?.current?.open()}
              >
                Select your color
              </Button>

              <Tag color="green" className="z-50 absolute top-1.5 -right-8">
                New
              </Tag>
            </div>
          </Whisper>
        </div>

        <div className="flex flex-col lg:items-center gap-4 overflow-auto">
          <BuilderForm
            DownloadButton={
              <Button
                className="!rounded-md"
                onClick={downloadPdfDocument}
                startIcon={<FiDownload size={20} />}
              >
                <span className="hidden sm:inline-block"> Download Resume</span>
              </Button>
            }
            {...{ open, setOpen, uuid }}
          />

          <div className="card !p-0 flex w-[1000px]">
            <div className="flex" ref={myResumeRef}>
              {isInitializingTemplate ? (
                <Loader center />
              ) : (
                <Template elementsColor={elementsColor} />
              )}
            </div>
          </div>
        </div>
      </PageLayout>
    </>
  );
};

export { ResumePage as UnAuthResumePage };
export default withAuth(ResumePage);
