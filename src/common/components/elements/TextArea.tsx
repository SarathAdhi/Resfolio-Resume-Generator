import React from "react";
import { Form, FormControlProps, Input } from "rsuite";

const _Textarea = React.forwardRef<HTMLTextAreaElement>((props, ref) => (
  <Input {...props} as="textarea" rows={5} ref={ref} />
));
_Textarea.displayName = "_Textarea";

type Props = {
  label: string;
} & FormControlProps;

const TextArea: React.FC<Props> = ({ name, label, ...rest }) => {
  return (
    <Form.Group controlId={name}>
      <Form.ControlLabel>{label}</Form.ControlLabel>
      <Form.Control name={name!} accepter={_Textarea} {...rest} />
    </Form.Group>
  );
};

export default TextArea;
