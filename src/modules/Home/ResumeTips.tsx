import React from "react";
import { Nav } from "rsuite";

const tips = [
  {
    title: "Highlight your accomplishments",
    description:
      "Rather than just listing your job duties, focus on what you have achieved in each role. Use bullet points to detail specific accomplishments, such as increasing sales revenue, streamlining processes, or improving customer satisfaction.",
  },
  {
    title: "Use relevant keywords",
    description:
      "Many companies use Applicant Tracking Systems (ATS) to scan resumes for keywords that match the job description. Make sure to include relevant keywords throughout your resume, but don't overdo it. Your resume should still be easy to read and understandable.",
  },
  {
    title: "Keep it concise",
    description:
      "Your resume should be no more than two pages long, so prioritize your most relevant experience and qualifications. Use bullet points and concise language to make your resume easy to scan.",
  },
  {
    title: "Customize your resume for each job",
    description:
      "Tailor your resume to the specific job you're applying for. Use the job description to identify the skills and qualifications that the employer is looking for, and make sure to highlight those in your resume.",
  },
  {
    title: "Proofread and edit",
    description:
      "Spelling and grammatical errors can make a bad impression on potential employers. Make sure to proofread your resume carefully and have someone else review it as well.",
  },
];

const ResumeTips = () => {
  const [active, setActive] = React.useState(tips[0].title);

  return (
    <div className="w-full grid gap-4">
      <h3 className="text-center">Tips to improve your Resume</h3>

      <div className="flex flex-col md:flex-row items-center  justify-between gap-8">
        <Nav
          appearance="subtle"
          vertical
          activeKey={active}
          onSelect={setActive}
        >
          {tips.map((tip) => (
            <Nav.Item
              className="uppercase"
              key={tip.title}
              eventKey={tip.title}
            >
              {tip.title}
            </Nav.Item>
          ))}
        </Nav>

        {tips.map(
          (tip) =>
            tip.title === active && (
              <div
                className="md:w-[450px] text-center md:text-left flex flex-col gap-2"
                key={tip.title}
              >
                <p>{tip.description}</p>
              </div>
            )
        )}
      </div>
    </div>
  );
};

export default ResumeTips;
