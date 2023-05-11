import { resumesCollectionRef } from "@backend/db";
import { filterDoc } from "@backend/lib";
import { UseStoreProps } from "@utils/store";
import { doc, where } from "firebase/firestore";
import { useState, useEffect } from "react";
import { useAuthState } from "./useAuthState";

export const useFetchMyResumes = () => {
  const [resumes, setResumes] = useState<UseStoreProps["formValues"][]>([]);
  const [isLoading, setIsLoading] = useState(true);

  const { user } = useAuthState();

  async function getProducts() {
    let resumes: UseStoreProps["formValues"][] = await filterDoc(
      "resumes",
      where("user", "==", doc(resumesCollectionRef, user?.uid))
    );

    setResumes(resumes);

    setIsLoading(false);
  }

  useEffect(() => {
    getProducts();
  }, []);

  return { isLoading, getProducts, resumes };
};
