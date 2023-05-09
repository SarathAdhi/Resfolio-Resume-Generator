import React from "react";
import TagPicker from "@elements/TagPicker";
import { skills } from "@utils/constants";
import { useStore } from "@utils/store";

const data = skills.map((label) => ({ label, value: label }));

const Skills = () => {
  const { skills: _skills } = useStore((state) => state.formValues);

  return (
    <TagPicker
      className="w-full"
      defaultValue={_skills}
      data={data}
      label="Skills"
      name="skills"
      placeholder="Select your Skills"
      creatable
    />
  );
};

export default Skills;
