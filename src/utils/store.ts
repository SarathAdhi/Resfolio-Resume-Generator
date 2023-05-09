import { create } from "zustand";
import { Templates, skills } from "./constants";

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
  formValues: {
    name: "Sarath Adhithya",
    role: "Full-Stack Developer",
    email: "s.sarathadhithya@gmail.com",
    phone: "9876543210",
    address: "Chennai, India",
    linkedin: "https://www.linkedin.com/in/sarath-adhithya/",
    github: "https://github.com/SarathAdhi",
    objective:
      "Seeking a position in a competitive environment that would challenge me to push my boundaries and expand my knowledge in this field of computer science and programming.",
    image: "/assets/profile-photo.jpg",
    skills: skills,
    education: [
      {
        e_college: "VIT Chennai",
        e_degree: "B.Tech CSE with AI and Robotics",
        e_start: "Sept 2020",
        e_end: "Sept 2024",
        e_grade: "7.17",
      },
      {
        e_college: "SJPS",
        e_degree: "Computer science",
        e_start: "Sept 2020",
        e_end: "Sept 2024",
        e_grade: "7.17",
      },
    ],
    work: [
      {
        w_role: "FRONTEND DEVELOPER (FDE)",
        w_company: "Hushl",
        w_start: "July 2022",
        w_end: "Sept 2022",
        w_link: "https://hushl.in/",
      },
      {
        w_role: "FRONTEND DEVELOPER (FDE)",
        w_company: "Inkredo",
        w_start: "May 2022",
        w_end: "Aug 2022",
        w_link: "https://home.inkredo.in/",
      },
    ],
    projects: [
      {
        p_name: "Blog Ocean",
        p_description:
          "Blog Ocean is an open platform for all developers, where developers can learn, grow and teach everyone around the world through blogs.",
        p_link: "https://blog-ocean.vercel.app/",
        p_start: "May 2022",
        p_end: "Aug 2022",
      },
      {
        p_name: "Decentralized funding campaign USING BLOCKCHAIN",
        p_description:
          "A Funding Campaign that uses blockchain technology to transfer Campaign funds directly and securely to the owner's wallet. All the validations are done in the smart contract itself.  0% platform, or transaction fees.",
        p_link: "https://decentralized-funding-campaign.vercel.app",
        p_start: "May 2022",
        p_end: "Aug 2022",
      },
      {
        p_name: "Online Clipboard",
        p_description:
          "ClipBoard is a free online tool that helps you to Copy and Retrieve Text between any device. Just copy the text and share the ID. It even has a password-protected feature where you can edit the text in the future.",
        p_link: "https://0cb.vercel.app/",
        p_start: "May 2022",
        p_end: "Aug 2022",
      },
    ],
    extra: ["Cricket", "Video Editing", "Programming", "Travelling"],
  },

  setFormValues: (formValues) => {
    set({ formValues });
  },

  Template: Templates[0],
  activeTemplate: "template-1",
  setTemplate: (Template, activeTemplate) => set({ Template, activeTemplate }),
}));
