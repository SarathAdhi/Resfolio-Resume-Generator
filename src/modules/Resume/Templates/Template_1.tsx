import React from "react";
import { Divider } from "rsuite";
import { useStore } from "@utils/store";
import Link from "next/link";
import { BsTelephoneFill, BsLinkedin, BsGithub } from "react-icons/bs";
import { ImLocation } from "react-icons/im";
import { MdEmail } from "react-icons/md";

const Template_1 = () => {
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
      id="template-1"
      className="p-8 !pb-0 text-color min-h-screen grid grid-cols-10 gap-4"
    >
      <div className="col-span-4 flex-shrink-0 p-2 flex-c gap-4 bg-[#f4f4f4] rounded-t-lg border-2 border-gray-500 border-b-0">
        {image && <img src={image} className="shadow-lg rounded-md" />}

        <div className="-mt-2 flex-c">
          <h3>{name}</h3>

          <h5 className="-mt-1">{role}</h5>
        </div>

        <Divider className="w-full !m-0 border border-gray-300" />

        <div className="w-full">
          {phone && (
            <p className="flex-cr gap-4">
              <BsTelephoneFill className="svg-color" />

              <Link
                href={`tel:${phone}`}
                className="-mt-0.5 break-all link-color"
              >
                {phone}
              </Link>
            </p>
          )}

          {address && (
            <p className="flex-cr gap-4">
              <ImLocation className="svg-color" />

              <span className="link-color">{address}</span>
            </p>
          )}

          {email && (
            <p className="flex-cr gap-4 ">
              <MdEmail className="svg-color" />

              <Link
                href={`mailto:${email}`}
                className="-mt-0.5 break-all link-color"
              >
                {email}
              </Link>
            </p>
          )}

          {linkedin && (
            <p className="flex-cr !items-start gap-4 ">
              <BsLinkedin className="svg-color" />

              <Link href={linkedin} className="-mt-1 break-all link-color">
                {linkedin}
              </Link>
            </p>
          )}

          {github && (
            <p className="flex-cr !items-start gap-4 ">
              <BsGithub className="svg-color" />

              <Link href={github} className="-mt-1 break-all link-color">
                {github}
              </Link>
            </p>
          )}
        </div>

        <div className="w-full grid gap-2">
          <h4 className="title-space title">Objective</h4>

          <p className="text-justify">{objective}</p>
        </div>

        <div className="w-full grid gap-4">
          <h4 className="title-space title">Skills</h4>

          <div className="flex flex-wrap items-center gap-1">
            {skills.map((skill, index) => (
              <span
                key={skill + index}
                className="skills-bg last:flex-none flex-auto text-base text-center p-1 text-white font-medium rounded-md"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>

      <div className="col-span-6 w-full flex flex-col gap-8">
        <div className="grid gap-2">
          <h4 className="title-space title">Education History</h4>

          <div className="grid gap-2">
            {education.map((edu, index) => (
              <div key={index} className="flex items-end justify-between">
                <div>
                  <h5>{edu.e_degree}</h5>
                  <h6 className="tracking-wider text-base text-gray-500">
                    {edu.e_college}
                  </h6>
                </div>

                <div className="grid text-end">
                  <span className="font-semibold">Grade: {edu.e_grade}</span>

                  <span className="font-semibold">
                    {edu.e_start} - {edu.e_end}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="grid gap-2">
          <h4 className="title-space title">Work Experience</h4>

          <div className="grid gap-2">
            {work.map((w, index) => (
              <div key={index} className="flex items-end justify-between gap-4">
                <div>
                  <h5>{w.w_role}</h5>
                  <h6 className="tracking-wider text-base text-gray-500">
                    @{w.w_company}
                  </h6>
                </div>

                <div className="grid text-end">
                  <span className="font-semibold">
                    <Link href={w.w_link} className="link-color">
                      {w.w_link}
                    </Link>
                  </span>

                  <span className="font-semibold">
                    {w.w_start} - {w.w_end}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="grid gap-2">
          <h4 className="title-space title">Projects</h4>

          <div className="grid gap-4">
            {projects.map((w, index) => (
              <div key={index} className="space-y-1">
                <div className="w-full flex items-center gap-4 justify-between">
                  <h5>
                    <Link href={w.p_link} className="link-color">
                      {w.p_name}
                    </Link>
                  </h5>

                  <span className="flex-shrink-0 font-semibold">
                    {w.p_start} - {w.p_end}
                  </span>
                </div>

                <p>{w.p_description}</p>
              </div>
            ))}
          </div>
        </div>

        {extra.length !== 0 && (
          <div className="grid gap-2">
            <h4 className="title-space title">Extra-curricular activities</h4>

            <ul className="grid gap-2 list-decimal">
              {extra.map((w, index) => (
                <li
                  key={index}
                  className="text-base list-inside list-item space-y-1"
                >
                  {w}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default Template_1;
