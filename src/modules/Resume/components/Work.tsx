import React from "react";
import { Grid } from "../BuilderForm";
import Input from "@elements/Input";
import DatePicker from "@components/elements/DatePicker";
import { ButtonGroup, Divider, Form, IconButton } from "rsuite";
import { MdAddCircle, MdRemoveCircle } from "react-icons/md";
import { WorkProps } from "@utils/store";
import moment from "moment";

type Props = {
  rowValue: WorkProps;
  onChange: (rowIndex: number, values: WorkProps) => void;
  rowIndex: number;
};

const WorkItem: React.FC<Props> = ({ rowValue, onChange, rowIndex }) => {
  const handleChange = (value: string, key: keyof WorkProps) => {
    onChange(rowIndex, { ...rowValue, [key]: value });
  };

  return (
    <>
      <Grid>
        <Input
          label="Company Name"
          name="w_company"
          placeholder="Enter your Company Name"
          onChange={(e) => handleChange(e, "w_company")}
        />

        <Input
          label="Role"
          name="w_role"
          placeholder="Enter your Role"
          onChange={(e) => handleChange(e, "w_role")}
        />

        <Input
          label="Website"
          name="w_link"
          placeholder="Enter your Company Website"
          onChange={(e) => handleChange(e, "w_link")}
        />

        <DatePicker
          block
          label="Start Date"
          name="w_start"
          placeholder="Enter your Start Date"
          format="MM-yyyy"
          onChange={(e) =>
            handleChange(moment(e).format("MMM YYYY"), "w_start")
          }
        />

        <DatePicker
          block
          label="End Date"
          name="w_end"
          placeholder="Enter your End Date"
          format="MM-yyyy"
          onChange={(e) => handleChange(moment(e).format("MMM YYYY"), "w_end")}
        />
      </Grid>

      <Divider />
    </>
  );
};

const WorkInputControl: React.FC<{
  onChange: (value: React.SetStateAction<WorkProps[]>) => void;
}> = ({ onChange }) => {
  const [WorkDetails, setWorkDetails] = React.useState<WorkProps[]>([
    {
      w_company: "",
      w_role: "",
      w_end: "",
      w_link: "",
      w_start: "",
    },
  ]);

  const handleChangeWorkDetails = (
    nextWorkDetails: React.SetStateAction<WorkProps[]>
  ) => {
    console.log({ nextWorkDetails });
    setWorkDetails(nextWorkDetails);
    onChange?.(nextWorkDetails);
  };

  const handleInputChange = (rowIndex: number, value: WorkProps) => {
    const nextWorkDetails = [...WorkDetails];
    nextWorkDetails[rowIndex] = value;

    handleChangeWorkDetails(nextWorkDetails);
  };

  const handleMinus = () => {
    if (WorkDetails.length <= 1) return;

    handleChangeWorkDetails(WorkDetails.slice(0, -1));
  };

  const handleAdd = () => {
    handleChangeWorkDetails(
      WorkDetails.concat([
        {
          w_company: "",
          w_role: "",
          w_end: "",
          w_link: "",
          w_start: "",
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

      {WorkDetails.map((rowValue, index) => (
        <WorkItem
          key={index}
          rowIndex={index}
          rowValue={rowValue}
          onChange={handleInputChange}
        />
      ))}
    </div>
  );
};

const Work = () => {
  return <Form.Control name="work" accepter={WorkInputControl} />;
};

export default Work;
