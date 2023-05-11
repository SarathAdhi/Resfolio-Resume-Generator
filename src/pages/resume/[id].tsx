import PageLayout from "@layouts/PageLayout";
import React, { useRef, useState } from "react";
import { Button } from "rsuite";
import { useReactToPrint } from "react-to-print";
import BuilderForm from "@modules/Resume/BuilderForm";
import { HiOutlineArrowSmRight } from "react-icons/hi";
import { FiDownload } from "react-icons/fi";
import { useStore } from "@utils/store";
import { useRouter } from "next/router";

const ResumePage = () => {
  const myResumeRef = useRef(null);

  const [open, setOpen] = useState(false);

  const { Template } = useStore();

  const downloadPdfDocument = useReactToPrint({
    content: () => myResumeRef.current,
  });

  const router = useRouter();
  const uuid = `${router.query?.id}`;

  return (
    <PageLayout title="Resume Builder" className="flex flex-col gap-4">
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
            <Template />
          </div>
        </div>
      </div>
    </PageLayout>
  );
};

export default ResumePage;
