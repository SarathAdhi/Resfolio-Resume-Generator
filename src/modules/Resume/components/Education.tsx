import React from "react";
import { Grid } from "../BuilderForm";
import Input from "@elements/Input";
import DatePicker from "@components/elements/DatePicker";
import { ButtonGroup, Divider, Form, IconButton } from "rsuite";
import { MdAddCircle, MdRemoveCircle } from "react-icons/md";
import { EducationProps } from "@utils/store";
import moment from "moment";

type Props = {
  rowValue: EducationProps;
  onChange: (rowIndex: number, values: EducationProps) => void;
  rowIndex: number;
};

const EducationItem: React.FC<Props> = ({ rowValue, onChange, rowIndex }) => {
  const handleChange = (value: string, key: keyof EducationProps) => {
    onChange(rowIndex, { ...rowValue, [key]: value });
  };

  return (
    <>
      <Grid>
        <Input
          value={rowValue.e_college}
          label="College name"
          name="e_college"
          placeholder="Enter your College Name"
          onChange={(e) => handleChange(e, "e_college")}
        />

        <Input
          value={rowValue.e_college}
          label="Degree"
          name="e_degree"
          placeholder="Enter your Degree"
          onChange={(e) => handleChange(e, "e_degree")}
        />

        <DatePicker
          value={new Date(rowValue.e_start)}
          block
          label="Start Date"
          name="e_start"
          placeholder="Enter your Start Date"
          format="MM-yyyy"
          onChange={(e) =>
            handleChange(moment(e).format("MMM YYYY"), "e_start")
          }
        />

        <DatePicker
          value={new Date(rowValue.e_end)}
          block
          label="End Date"
          name="e_end"
          placeholder="Enter your End Date"
          format="MM-yyyy"
          onChange={(e) => handleChange(moment(e).format("MMM YYYY"), "e_end")}
        />

        <Input
          value={rowValue.e_grade}
          label="Grade"
          name="e_grade"
          placeholder="Enter your Grade"
          type="number"
          onChange={(e) => handleChange(e, "e_grade")}
        />
      </Grid>

      <Divider />
    </>
  );
};

type ControlProps = {
  value: EducationProps[];
  onChange: (value: React.SetStateAction<EducationProps[]>) => void;
};

const EducationInputControl: React.FC<ControlProps> = ({
  onChange,
  value,
  ...rest
}) => {
  const [EducationDetails, setEducationDetails] =
    React.useState<EducationProps[]>(value);

  const handleChangeEducationDetails = (
    nextEducationDetails: React.SetStateAction<EducationProps[]>
  ) => {
    console.log({ ...rest });

    setEducationDetails(nextEducationDetails);
    onChange?.(nextEducationDetails);
  };

  const handleInputChange = (rowIndex: number, value: EducationProps) => {
    const nextEducationDetails = [...EducationDetails];
    nextEducationDetails[rowIndex] = value;

    handleChangeEducationDetails(nextEducationDetails);
  };

  const handleMinus = () => {
    if (EducationDetails.length <= 1) return;

    handleChangeEducationDetails(EducationDetails.slice(0, -1));
  };

  const handleAdd = () => {
    handleChangeEducationDetails(
      EducationDetails.concat([
        { e_college: "", e_degree: "", e_start: "", e_end: "", e_grade: "" },
      ])
    );
  };
  return (
    <div className="grid gap-4">
      <ButtonGroup size="lg">
        <IconButton onClick={handleAdd} icon={<MdAddCircle />} />
        <IconButton onClick={handleMinus} icon={<MdRemoveCircle />} />
      </ButtonGroup>

      {EducationDetails.map((rowValue, index) => (
        <EducationItem
          key={index}
          rowIndex={index}
          rowValue={rowValue}
          onChange={handleInputChange}
        />
      ))}
    </div>
  );
};

const Education = () => {
  return <Form.Control name="education" accepter={EducationInputControl} />;
};

export default Education;
