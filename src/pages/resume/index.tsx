import { useRouter } from "next/router";
import React, { useEffect } from "react";
import ShortUniqueId from "short-unique-id";
import { UnAuthResumePage } from "@pages/resume/[id]";
import { useAuthState } from "@hooks/useAuthState";

const Resume = () => {
  const router = useRouter();
  const uid = new ShortUniqueId({ length: 10 });
  const { user } = useAuthState();

  useEffect(() => {
    if (user) {
      const uuid = uid();
      router.replace(`/resume/${uuid}`);
    }
  }, []);

  return <UnAuthResumePage title="Resume" />;
};

export default Resume;
