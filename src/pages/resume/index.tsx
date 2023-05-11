import PageLayout from "@layouts/PageLayout";
import { useRouter } from "next/router";
import React, { useEffect } from "react";
import ShortUniqueId from "short-unique-id";

const Resume = () => {
  const router = useRouter();
  const uid = new ShortUniqueId({ length: 10 });

  useEffect(() => {
    const uuid = uid();
    router.replace(`/resume/${uuid}`);
  }, []);

  return <PageLayout title="Resume"></PageLayout>;
};

export default Resume;
