import React from "react";
import { Grid } from "../BuilderForm";
import Input from "@elements/Input";
import DatePicker from "@components/elements/DatePicker";
import { ButtonGroup, Divider, Form, IconButton } from "rsuite";
import { MdAddCircle, MdRemoveCircle } from "react-icons/md";
import { ProjectProps } from "@utils/store";
import moment from "moment";
import TextArea from "@components/elements/TextArea";

type Props = {
  rowValue: ProjectProps;
  onChange: (rowIndex: number, values: ProjectProps) => void;
  rowIndex: number;
};

const ProjectItem: React.FC<Props> = ({ rowValue, onChange, rowIndex }) => {
  const handleChange = (value: string, key: keyof ProjectProps) => {
    onChange(rowIndex, { ...rowValue, [key]: value });
  };

  return (
    <>
      <Grid>
        <Input
          label="Project Name"
          name="p_name"
          placeholder="Enter your Project Name"
          onChange={(e) => handleChange(e, "p_name")}
        />

        <Input
          label="Link"
          name="p_link"
          placeholder="Enter your Project Link"
          onChange={(e) => handleChange(e, "p_link")}
        />

        <DatePicker
          block
          label="Start Date"
          name="p_start"
          placeholder="Enter your Start Date"
          format="MM-yyyy"
          onChange={(e) =>
            handleChange(moment(e).format("MMM YYYY"), "p_start")
          }
        />

        <DatePicker
          block
          label="End Date"
          name="p_end"
          placeholder="Enter your End Date"
          format="MM-yyyy"
          onChange={(e) => handleChange(moment(e).format("MMM YYYY"), "p_end")}
        />
      </Grid>

      <TextArea
        label="Description"
        name="p_description"
        placeholder="Enter your Project Description"
        onChange={(e) => handleChange(e, "p_description")}
      />

      <Divider />
    </>
  );
};

const ProjectInputControl: React.FC<{
  onChange: (value: React.SetStateAction<ProjectProps[]>) => void;
}> = ({ onChange }) => {
  const [ProjectDetails, setProjectDetails] = React.useState<ProjectProps[]>([
    {
      p_name: "",
      p_description: "",
      p_link: "",
      p_start: "",
      p_end: "",
    },
  ]);

  const handleChangeProjectDetails = (
    nextProjectDetails: React.SetStateAction<ProjectProps[]>
  ) => {
    console.log({ nextProjectDetails });
    setProjectDetails(nextProjectDetails);
    onChange?.(nextProjectDetails);
  };

  const handleInputChange = (rowIndex: number, value: ProjectProps) => {
    const nextProjectDetails = [...ProjectDetails];
    nextProjectDetails[rowIndex] = value;

    handleChangeProjectDetails(nextProjectDetails);
  };

  const handleMinus = () => {
    if (ProjectDetails.length <= 1) return;

    handleChangeProjectDetails(ProjectDetails.slice(0, -1));
  };

  const handleAdd = () => {
    handleChangeProjectDetails(
      ProjectDetails.concat([
        {
          p_name: "",
          p_description: "",
          p_link: "",
          p_start: "",
          p_end: "",
        },
      ])
    );
  };
  return (
    <div className="grid gap-4">
      <ButtonGroup size="lg">
        <IconButton onClick={handleAdd} icon={<MdAddCircle />} />
        <IconButton onClick={handleMinus} icon={<MdRemoveCircle />} />
      </ButtonGroup>

      {ProjectDetails.map((rowValue, index) => (
        <ProjectItem
          key={index}
          rowIndex={index}
          rowValue={rowValue}
          onChange={handleInputChange}
        />
      ))}
    </div>
  );
};

const Project = () => {
  return <Form.Control name="projects" accepter={ProjectInputControl} />;
};

export default Project;
