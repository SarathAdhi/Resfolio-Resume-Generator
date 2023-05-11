import Image from "next/image";
import React from "react";
import { Carousel } from "rsuite";

const tips = [
  {
    title: "Highlight your accomplishments",
    description:
      "Rather than just listing your job duties, focus on what you have achieved in each role. Use bullet points to detail specific accomplishments, such as increasing sales revenue, streamlining processes, or improving customer satisfaction.",
    img: "/assets/accomplishments.png",
  },
  {
    title: "Use relevant keywords",
    description:
      "Many companies use Applicant Tracking Systems (ATS) to scan resumes for keywords that match the job description. Make sure to include relevant keywords throughout your resume, but don't overdo it. Your resume should still be easy to read and understandable.",
    img: "/assets/keyword.png",
  },
  {
    title: "Keep it concise",
    description:
      "Your resume should be no more than two pages long, so prioritize your most relevant experience and qualifications. Use bullet points and concise language to make your resume easy to scan.",
    img: "/assets/concise.png",
  },
  {
    title: "Customize your resume for each job",
    description:
      "Tailor your resume to the specific job you're applying for. Use the job description to identify the skills and qualifications that the employer is looking for, and make sure to highlight those in your resume.",
    img: "/assets/customize.png",
  },
  {
    title: "Proofread and edit",
    description:
      "Spelling and grammatical errors can make a bad impression on potential employers. Make sure to proofread your resume carefully and have someone else review it as well.",
    img: "/assets/proofread.png",
  },
];

const ResumeTips = () => {
  return (
    <div className="w-full grid gap-4">
      <h2 className="text-center text-black">Tips to improve your Resume</h2>

      <Carousel
        autoplay
        placement="bottom"
        shape="dot"
        className="!h-auto md:!h-80 !rounded-lg"
      >
        {tips.map((tip) => (
          <div
            key={tip.title}
            className="p-2 sm:p-4 rounded-lg !bg-slate-100 text-center flex flex-col md:justify-center items-center gap-4"
          >
            <h4 className="uppercase">{tip.title}</h4>
            <Image width={80} height={80} src={tip.img} alt={tip.title} />
            <p className="text-lg mb-6">{tip.description}</p>
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default ResumeTips;
