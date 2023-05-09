import React from "react";
import {
  Form,
  FormControlProps,
  TagPicker as _TagPicker,
  TagPickerProps,
} from "rsuite";

type Props = {
  label: string;
  type?: "number" | "text";
} & FormControlProps &
  TagPickerProps;

const TagPicker: React.FC<Props> = ({
  name,
  label,
  type = "text",
  ...rest
}) => {
  return (
    <Form.Group controlId={name}>
      <Form.ControlLabel>{label}</Form.ControlLabel>
      <Form.Control name={name!} accepter={_TagPicker} {...rest} />
    </Form.Group>
  );
};

export default TagPicker;
