import { create } from "zustand";
import { Templates, initialFormValue, skills } from "./constants";
import { signOut } from "firebase/auth";
import { auth } from "@backend/db";
import { filterDoc } from "@backend/lib";
import { where } from "firebase/firestore";
import { User } from "types/user";

export type EducationProps = {
  e_degree: string;
  e_college: string;
  e_grade: string;
  e_start: string;
  e_end: string;
};

export type WorkProps = {
  w_role: string;
  w_company: string;
  w_link: string;
  w_start: string;
  w_end: string;
};

export type ProjectProps = {
  p_name: string;
  p_description: string;
  p_link: string;
  p_start: string;
  p_end: string;
};

export type UseStoreProps = {
  formValues: {
    name: string;
    role: string;
    email: string;
    phone: string;
    address: string;
    linkedin: string;
    github: string;
    objective: string;
    image: string;
    skills: string[];
    education: EducationProps[];
    work: WorkProps[];
    projects: ProjectProps[];
    extra: string[];
  };
  setFormValues: (formValues: UseStoreProps["formValues"]) => void;

  Template: React.FC;
  activeTemplate: string;
  setTemplate: (Template: React.FC, activeTemplate: string) => void;
};

export const useStore = create<UseStoreProps>((set) => ({
  formValues: initialFormValue,

  setFormValues: (formValues) => {
    set({ formValues });
  },

  Template: Templates[0],
  activeTemplate: "template-1",
  setTemplate: (Template, activeTemplate) => set({ Template, activeTemplate }),
}));

type UseAuthStoreProps = {
  user: User | null;
  resumes: ({
    resumeName: string;
    uuid: string;
    id: string;
    template: string;
  } & UseStoreProps["formValues"])[];
  logout: () => void;
  getUserResumes: () => void;
};

export const useAuthStore = create<UseAuthStoreProps>((set) => ({
  user: null,
  resumes: [],

  logout: () => {
    localStorage.removeItem("token");
    signOut(auth);

    set({ resumes: [] });
  },

  getUserResumes: async () => {
    const token = localStorage.getItem("token");
    if (!token) return;

    let resumes = await filterDoc("resumes", where("user", "==", token));

    resumes.reverse();

    set({ resumes });
  },
}));
