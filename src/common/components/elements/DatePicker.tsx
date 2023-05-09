import React from "react";
import {
  DatePickerProps,
  Form,
  FormControlProps,
  DatePicker as _DatePicker,
} from "rsuite";

type Props = {
  label: string;
} & FormControlProps &
  DatePickerProps;

const DatePicker: React.FC<Props> = ({ name, label, ...rest }) => {
  return (
    <Form.Group controlId={name}>
      <Form.ControlLabel>{label}</Form.ControlLabel>
      <Form.Control name={name!} accepter={_DatePicker} {...rest} />
    </Form.Group>
  );
};

export default DatePicker;
