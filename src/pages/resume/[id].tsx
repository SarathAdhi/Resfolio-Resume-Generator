import PageLayout from "@layouts/PageLayout";
import React, { useRef, useState, useEffect } from "react";
import { Button, Loader } from "rsuite";
import { useReactToPrint } from "react-to-print";
import BuilderForm from "@modules/Resume/BuilderForm";
import { HiOutlineArrowSmRight } from "react-icons/hi";
import { FiDownload } from "react-icons/fi";
import { useAuthStore, useStore } from "@utils/store";
import { useRouter } from "next/router";
import withAuth from "@hoc/withAuth";
import Template_1 from "@modules/Resume/Templates/Template_1";
import { Templates as _Temp, initialFormValue } from "@utils/constants";

type Props = {
  title?: string;
};

const ResumePage: React.FC<Props> = ({ title }) => {
  const router = useRouter();
  const uuid = `${router.query?.id}`;

  const { Template, setFormValues, setTemplate } = useStore();
  const { resumes } = useAuthStore();

  const myResumeRef = useRef(null);

  const [open, setOpen] = useState(false);
  const [isInitializingTemplate, setIsInitializingTemplate] = useState(true);

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
            {isInitializingTemplate ? <Loader center /> : <Template />}
          </div>
        </div>
      </div>
    </PageLayout>
  );
};

export { ResumePage as UnAuthResumePage };
export default withAuth(ResumePage);
