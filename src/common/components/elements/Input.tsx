import React from "react";
import { Form, FormControlProps, InputNumber, Input as _Input } from "rsuite";

type Props = {
  label: string;
  type?: "number" | "text";
} & FormControlProps;

const Input: React.FC<Props> = ({ name, label, type = "text", ...rest }) => {
  return (
    <Form.Group controlId={name}>
      <Form.ControlLabel>{label}</Form.ControlLabel>
      <Form.Control
        name={name!}
        accepter={type === "number" ? InputNumber : _Input}
        min={0}
        {...rest}
      />
    </Form.Group>
  );
};

export default Input;
