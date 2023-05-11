import PageLayout from "@layouts/PageLayout";
import React, { useRef, useState } from "react";
import { Button, Nav, Tooltip, Whisper } from "rsuite";
import { useReactToPrint } from "react-to-print";
import BuilderForm from "@modules/Resume/BuilderForm";
import { HiOutlineArrowSmRight } from "react-icons/hi";
import { FiDownload } from "react-icons/fi";
import { useStore } from "@utils/store";

const ResumePage = () => {
  const myResumeRef = useRef(null);

  const [open, setOpen] = useState(false);

  const { Template } = useStore();

  const downloadPdfDocument = useReactToPrint({
    content: () => myResumeRef.current,
  });

  return (
    <PageLayout
      title="Resume Builder"
      ActionComponent={
        <Whisper
          placement="bottom"
          speaker={<Tooltip>Download Resume</Tooltip>}
        >
          <Nav.Item
            className="!bg-green-500 !text-white !p-2 sm:!px-4 sm:!py-2 !rounded-md !w-full !flex items-center gap-2"
            onClick={downloadPdfDocument}
            icon={<FiDownload size={20} />}
          >
            <span className="sm:hidden block">Download Resume</span>
          </Nav.Item>
        </Whisper>
      }
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
              className="!flex md:!hidden !bg-green-500 !text-white !rounded-md"
              onClick={downloadPdfDocument}
              startIcon={<FiDownload size={20} />}
            >
              Download Resume
            </Button>
          }
          {...{ open, setOpen }}
        />

        <div className="card !p-0 flex w-[1000px]">
          <div className="flex" ref={myResumeRef}>
            <Template />
          </div>
        </div>
      </div>
    </PageLayout>
  );
};

export default ResumePage;
