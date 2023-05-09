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
    <div id="template-1" className="text-black h-full flex gap-4">
      <div className="w-72 flex-shrink-0 h-full p-2 flex-c gap-4 bg-[#f4f4f4] rounded-t-lg border-2 border-gray-500 border-b-0">
        {image && <img src={image} className="shadow-lg rounded-md" />}

        <div className="-mt-2 flex-c">
          <h3>{name}</h3>

          <h5 className="-mt-1">{role}</h5>
        </div>

        <Divider className="w-full !m-0 border border-gray-300" />

        <div className="w-full">
          {phone && (
            <p className="flex-cr gap-4">
              <BsTelephoneFill />

              <Link href={`tel:${phone}`} className="-mt-0.5 break-all">
                {phone}
              </Link>
            </p>
          )}

          {address && (
            <p className="flex-cr gap-4">
              <ImLocation />

              {address}
            </p>
          )}

          {email && (
            <p className="flex-cr gap-4 ">
              <MdEmail />

              <Link href={`mailto:${email}`} className="-mt-0.5 break-all">
                {email}
              </Link>
            </p>
          )}

          {linkedin && (
            <p className="flex-cr !items-start gap-4 ">
              <BsLinkedin />

              <Link href={linkedin} className="-mt-0.5 break-all">
                {linkedin}
              </Link>
            </p>
          )}

          {github && (
            <p className="flex-cr !items-start gap-4 ">
              <BsGithub />

              <Link href={github} className="-mt-0.5 break-all">
                {github}
              </Link>
            </p>
          )}
        </div>

        <div className="w-full grid gap-2">
          <h4 className="title">Objective</h4>

          <p className="text-justify">{objective}</p>
        </div>

        <div className="w-full grid gap-4">
          <h4 className="title">Skills</h4>

          <div className="flex flex-wrap items-center gap-2">
            {skills.map((skill, index) => (
              <span
                key={skill + index}
                className="last:flex-none flex-auto text-base text-center py-1 px-2 bg-blue-800 text-white font-medium rounded-md"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>

      <div className="w-full flex flex-col gap-8">
        <div className="grid gap-2">
          <h4 className="title">Education History</h4>

          <div className="grid gap-2">
            {education.map((edu, index) => (
              <div key={index} className="flex items-end justify-between">
                <div>
                  <h5>{edu.e_degree}</h5>
                  <h6 className="tracking-wider text-base text-gray-400">
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
          <h4 className="title">Work Experience</h4>

          <div className="grid gap-2">
            {work.map((w, index) => (
              <div key={index} className="flex items-end justify-between gap-4">
                <div>
                  <h5>{w.w_role}</h5>
                  <h6 className="tracking-wider text-base text-gray-400">
                    @{w.w_company}
                  </h6>
                </div>

                <div className="grid text-end">
                  <span className="font-semibold">
                    <Link href={w.w_link}>{w.w_link}</Link>
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
          <h4 className="title">Projects</h4>

          <div className="grid gap-4">
            {projects.map((w, index) => (
              <div key={index} className="space-y-1">
                <div className="w-full flex items-center gap-4 justify-between">
                  <h5>
                    <Link href={w.p_link}>{w.p_name}</Link>
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

        <div className="grid gap-2">
          <h4 className="title">Extra-curricular activities</h4>

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
      </div>
    </div>
  );
};

export default Template_1;
