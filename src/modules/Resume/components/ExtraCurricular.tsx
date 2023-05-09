import React from "react";
import TagPicker from "@elements/TagPicker";
import { useStore } from "@utils/store";

const ExtraCurricular = () => {
  const { extra } = useStore((state) => state.formValues);
  const data = extra.map((label) => ({ label, value: label }));

  return (
    <TagPicker
      className="w-full"
      defaultValue={extra}
      data={data}
      label="Extra Curricular Activities"
      name="extra"
      placeholder="Select your Extra Curricular Activities"
      creatable
    />
  );
};

export default ExtraCurricular;
