import React from "react";
import { Col, InputGroup, Form } from "react-bootstrap";
import FormTextField from "./form-field";
import { useSpring, animated } from "react-spring";

const AnimatedRow = animated(Form.Row);

const animation = {
  transform: "translate3d(0px,0,0) scale(1) rotateX(0deg)"
};

export default () => {
  const props = useSpring(animation);
  return (
    <AnimatedRow style={props}>
      <FormTextField
        as={Col}
        sm="4"
        controlId="validationFormik01"
        label="Primeiro nome"
        type="text"
        name="firstName"
      />

      <FormTextField
        as={Col}
        sm="4"
        controlId="validationFormik02"
        label="Último nome"
        type="text"
        name="lastName"
      />

      <FormTextField
        as={Col}
        md="4"
        controlId="validationFormikUsername"
        label="Nome de usuário"
        type="text"
        name="username"
        inputGroupPrepend={
          <InputGroup.Prepend>
            <InputGroup.Text id="inputGroupPrepend">@</InputGroup.Text>
          </InputGroup.Prepend>
        }
      />
    </AnimatedRow>
  );
};
