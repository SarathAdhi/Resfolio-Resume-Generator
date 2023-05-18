import React from "react";
import { BiLinkExternal } from "react-icons/bi";
import { useStore } from "@utils/store";
import Link from "next/link";
import clsx from "clsx";

const ClassName = "px-2 py-1 rounded-md bg-[#d5e3e2] text-black uppercase";
const titleClassName = ClassName;

const Template_2 = () => {
  const { formValues } = useStore();

  const {
    name,
    role,
    address,
    email,
    image,
    linkedin,
    github,
    objective,
    phone,
    skills,
    education,
    work,
    projects,
    extra,
  } = formValues;

  return (
    <div
      id="template-2"
      className="p-8 text-black min-h-screen flex flex-col items-center gap-4"
    >
      <div className="w-full flex items-center justify-between gap-4">
        {image && <img src={image} className="w-36 shadow-lg rounded-full" />}

        <div className="-mt-4 flex-shrink-0 grid text-end gap-1">
          <h2>{name}</h2>

          <h4 className="-mt-1 uppercase">{role}</h4>

          <div className=" text-black !text-base flex items-center gap-2">
            {phone && (
              <>
                <Link className="text-black link-color" href={`tel:${phone}`}>
                  {phone}
                </Link>{" "}
                |
              </>
            )}

            {address && <p>{address} | </p>}

            {email && (
              <>
                <Link
                  className="text-black link-color"
                  href={`mailto:${email}`}
                >
                  {email}
                </Link>{" "}
                |
              </>
            )}

            {linkedin && (
              <>
                <Link className="text-black link-color" href={linkedin}>
                  LinkedIn
                </Link>{" "}
                |
              </>
            )}

            {github && (
              <>
                <Link className="text-black link-color" href={github}>
                  GitHub
                </Link>
              </>
            )}
          </div>
        </div>
      </div>

      <div className="w-full grid gap-2">
        <h5 className={clsx(titleClassName, "title")}>Objective</h5>

        <p className="text-justify">{objective}</p>
      </div>

      <div className="w-full grid gap-2">
        <h5 className={clsx(titleClassName, "title")}>Skills</h5>

        <div className="flex flex-wrap items-center gap-2 ">
          {skills.map((skill, index) => (
            <span
              key={skill + index}
              className="leading-tight last:after:content-[''] after:content-[','] text-base text-center"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>

      <div className="w-full flex flex-col gap-4">
        <div className="grid gap-2">
          <h5 className={clsx(titleClassName, "title")}>Education History</h5>

          <div className="grid gap-2">
            {education.map((edu, index) => (
              <div key={index} className="flex items-end justify-between">
                <div>
                  <h5>{edu.e_degree}</h5>
                  <h6 className="tracking-wider text-base text-gray-400">
                    {edu.e_college}
                  </h6>
                </div>

                <div className="grid text-end text-gray-500">
                  <span className="font-semibold text-black">
                    Grade: {edu.e_grade}
                  </span>

                  <span className="font-semibold">
                    {edu.e_start} - {edu.e_end}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="grid gap-2">
          <h5 className={clsx(titleClassName, "title")}>Work Experience</h5>

          <div className="grid gap-2">
            {work.map((w, index) => (
              <div
                key={index}
                className="flex items-start justify-between gap-4"
              >
                <div>
                  <h5>{w.w_role}</h5>

                  <h6>
                    <Link
                      href={w.w_link}
                      className="link-color tracking-wider text-base"
                    >
                      @{w.w_company}
                    </Link>
                  </h6>
                </div>

                <span className="font-semibold text-gray-500">
                  {w.w_start} - {w.w_end}
                </span>
              </div>
            ))}
          </div>
        </div>

        <div className="grid gap-2">
          <h5 className={clsx(titleClassName, "title")}>Projects</h5>

          <div className="grid gap-2">
            {projects.map((w, index) => (
              <div key={index} className="space-y-1">
                <div className="w-full flex items-center gap-4 justify-between">
                  <h5>
                    <Link
                      className="link-color flex gap-2 items-center"
                      href={w.p_link}
                    >
                      {w.p_name} <BiLinkExternal />
                    </Link>
                  </h5>

                  <span className="flex-shrink-0 text-gray-500  font-semibold">
                    {w.p_start} - {w.p_end}
                  </span>
                </div>

                <span>{w.p_description}</span>
              </div>
            ))}
          </div>
        </div>

        {extra.length !== 0 && (
          <div className="w-full grid gap-2">
            <h5 className={clsx(titleClassName, "title")}>
              EXTRA-CURRICULAR ACTIVITIES
            </h5>

            <div className="flex flex-wrap items-center gap-2">
              {extra.map((e, index) => (
                <span
                  key={e + index}
                  className="last:after:content-[''] after:content-[','] text-base text-center"
                >
                  {e}
                </span>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Template_2;
