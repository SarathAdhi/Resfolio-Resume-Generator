import React from "react";
import { useStore } from "@utils/store";
import Link from "next/link";
import { BsTelephoneFill, BsLinkedin, BsGithub } from "react-icons/bs";
import { ImLocation } from "react-icons/im";
import { MdEmail, MdLocalActivity } from "react-icons/md";
import { FaBook, FaSuitcase, FaUserAlt } from "react-icons/fa";
import { FiTarget } from "react-icons/fi";
import { GiNotebook } from "react-icons/gi";
import { RiFileUserFill } from "react-icons/ri";

const Template_3 = () => {
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
      className="text-black min-h-screen grid grid-cols-10 gap-4"
    >
      <div className="col-span-4 flex-shrink-0 flex-c">
        <div className="w-full p-4 flex flex-col items-center gap-4 bg-sky-300">
          {image && (
            <img
              src={image}
              className="w-40 h-40 object-fill shadow-lg rounded-full"
            />
          )}

          <div className="-mt-2 flex-c">
            <h3>{name}</h3>

            <h5 className="-mt-1">{role}</h5>
          </div>
        </div>

        <div className="p-4 flex flex-col gap-8 bg-[#3e4140] h-full text-white">
          <div className="w-full">
            <div className="text-2xl flex items-center gap-4 mb-4 border-b-2 border-white">
              <FaUserAlt className="text-sky-400" />
              <h4 className="uppercase">Contact</h4>
            </div>

            {phone && (
              <p className="flex-cr gap-4">
                <BsTelephoneFill />

                <Link
                  href={`tel:${phone}`}
                  className="-mt-0.5 break-all text-white"
                >
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

                <Link
                  href={`mailto:${email}`}
                  className="-mt-0.5 break-all text-white"
                >
                  {email}
                </Link>
              </p>
            )}

            {linkedin && (
              <p className="flex-cr !items-start gap-4 ">
                <BsLinkedin />

                <Link href={linkedin} className="-mt-1 break-all text-white">
                  {linkedin}
                </Link>
              </p>
            )}

            {github && (
              <p className="flex-cr !items-start gap-4 ">
                <BsGithub />

                <Link href={github} className="-mt-1 break-all text-white">
                  {github}
                </Link>
              </p>
            )}
          </div>

          <div className="grid gap-2">
            <div className="text-2xl flex items-center gap-4 border-b-2 border-white">
              <FaBook className="text-sky-400" />
              <h4 className="uppercase">Education History</h4>
            </div>

            <div className="flex flex-col gap-4">
              {education.map((edu, index) => (
                <div key={index} className="flex flex-col">
                  <h6 className="flex items-center justify-between">
                    <span>
                      {edu.e_start.split(" ")[1]} - {edu.e_end.split(" ")[1]}
                    </span>
                  </h6>

                  <h5>{edu.e_degree}</h5>

                  <h6 className="tracking-wider text-base text-gray-400">
                    {edu.e_college}
                  </h6>
                </div>
              ))}
            </div>
          </div>

          <div className="w-full grid gap-4">
            <div className="text-2xl flex items-center gap-4 border-b-2 border-white">
              <RiFileUserFill className="text-sky-400" />
              <h4 className="uppercase">Skills</h4>
            </div>

            <div className="flex flex-wrap items-center gap-1">
              {skills.map((skill, index) => (
                <span
                  key={skill + index}
                  className="skills-bg last:flex-none flex-auto text-base text-center p-1 text-white font-semibold rounded-md"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="col-span-6 w-full flex flex-col gap-8 p-4">
        <div className="w-full grid gap-2">
          <div className="text-2xl flex items-center gap-4 border-b-2 border-black">
            <FiTarget className="text-sky-400" />
            <h4 className="uppercase">Objective</h4>
          </div>

          <p className="text-justify">{objective}</p>
        </div>

        <div className="grid gap-4">
          <div className="text-2xl flex items-center gap-4 border-b-2 border-black">
            <FaSuitcase className="text-sky-400" />
            <h4 className="uppercase">Work Experience</h4>
          </div>

          <div className="grid gap-2">
            {work.map((w, index) => (
              <div
                key={index}
                className="flex items-start justify-between gap-4"
              >
                <div>
                  <h5>{w.w_role}</h5>

                  <h6 className="tracking-wider text-base text-gray-500">
                    <Link href={w.w_link}>@{w.w_company}</Link>
                  </h6>
                </div>

                <span className="font-semibold">
                  {w.w_start} - {w.w_end}
                </span>
              </div>
            ))}
          </div>
        </div>

        <div className="grid gap-4">
          <div className="text-2xl flex items-center gap-4 border-b-2 border-black">
            <GiNotebook className="text-sky-400" />
            <h4 className="uppercase">Projects</h4>
          </div>

          <div className="grid gap-4">
            {projects.map((w, index) => (
              <div key={index} className="space-y-1">
                <div className="w-full flex items-start gap-4 justify-between">
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

        {extra.length !== 0 && (
          <div className="grid gap-4">
            <div className="text-2xl flex items-center gap-4 border-b-2 border-black">
              <MdLocalActivity className="text-sky-400" />
              <h4 className="uppercase">Extra-curricular activities</h4>
            </div>

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

export default Template_3;
