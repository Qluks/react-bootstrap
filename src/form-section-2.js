import React from "react";
import { Col, Form } from "react-bootstrap";
import FormTextField from "./form-field";
import FormSelectField from "./form-select-field";

export default () => {
  return (
    <Form.Row>
      <FormSelectField
        as={Col}
        sm="4"
        controlId="validationFormik03"
        label="Cidade"
        type="text"
        name="city"
      >
        <option value="">Selecione uma cidade</option>
        <option>Recife</option>
        <option>Olinda</option>
        <option>Caruaru</option>
      </FormSelectField>

      <FormSelectField
        as={Col}
        sm="4"
        controlId="validationFormik04"
        label="Estado"
        type="text"
        name="state"
      >
        <option value="">Selecione um estado</option>
        <option>PE</option>
        <option>PB</option>
        <option>BA</option>
        <option>SP</option>
      </FormSelectField>

      <FormTextField
        as={Col}
        md="4"
        controlId="validationFormik05"
        label="CEP"
        type="text"
        name="zip"
      />
    </Form.Row>
  );
};
