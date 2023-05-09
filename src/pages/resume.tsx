import PageLayout from "@layouts/PageLayout";
import React, { useRef, useState } from "react";
import { Button, Nav } from "rsuite";
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
      ActionComponent={
        <Nav.Item
          as={Button}
          className="!rounded-md !text-base !font-semibold"
          onClick={downloadPdfDocument}
          icon={<FiDownload />}
        >
          Download Resume
        </Nav.Item>
      }
      className="flex flex-col gap-4"
    >
      <button
        onClick={() => setOpen(true)}
        className="fixed left-0 top-[50%] bottom-[50%] h-10 rounded-r-lg text-2xl font-bold bg-gray-500 text-white"
      >
        <HiOutlineArrowSmRight />
      </button>

      <div className="grid gap-4">
        <BuilderForm {...{ open, setOpen }} />

        <div className="card !p-0">
          <div className="p-8 pb-0 h-screen" ref={myResumeRef}>
            <Template />
          </div>
        </div>
      </div>
    </PageLayout>
  );
};

export default ResumePage;
