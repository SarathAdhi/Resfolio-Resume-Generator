import { useRouter } from "next/router";
import React, { useEffect } from "react";
import ShortUniqueId from "short-unique-id";
import { UnAuthResumePage } from "@pages/resume/[id]";
import { useAuthState } from "@hooks/useAuthState";
import { Notification, useToaster } from "rsuite";

const message = (
  <Notification
    type="info"
    header={<h5>Login to Save</h5>}
    className="!text-xl"
    closable
  >
    <p>Login and Create Unlimited Resumes to Save & Edit it.</p>
  </Notification>
);

const Resume = () => {
  const router = useRouter();
  const uid = new ShortUniqueId({ length: 10 });
  const { user } = useAuthState();

  const toaster = useToaster();

  useEffect(() => {
    if (user) {
      const uuid = uid();
      router.replace(`/resume/${uuid}`);
    } else {
      toaster.push(message, {
        placement: "topCenter",
      });
    }
  }, [user]);

  return <UnAuthResumePage title="Resume" />;
};

export default Resume;
