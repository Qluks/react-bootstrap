import { Formik } from "formik";
import * as yup from "yup";
import React from "react";
import { Button, Col, Form, Row } from "react-bootstrap";
import FormSection1 from "./form-section-1";
import FormSection2 from "./form-section-2";
import FormSectionFriends from "./form-section-friends";

const schema = yup.object({
  firstName: yup.string().required(),
  lastName: yup.string().required(),
  username: yup.string().required(),
  city: yup.string().required(),
  state: yup.string().required(),
  zip: yup.string().required(),
  terms: yup.bool().required()
});

function FormExample() {
  return (
    <Row>
      <Col>
        <Formik
          validationSchema={schema}
          onSubmit={console.log}
          initialValues={{
            firstName: "Lucas",
            lastName: "Medeiros",
            city: undefined,
            state: "ON",
            friends: [{ firstName: "", lastName: "" }]
          }}
        >
          {({
            handleSubmit,
            handleChange,
            values,
            errors,
            isValid,
            isSubmitting
          }) => (
            <Form noValidate onSubmit={handleSubmit}>
              <Col>
                <FormSection1 />
              </Col>

              <Col>
                <FormSection2 />
              </Col>
              <Col>
                <Form.Group>
                  <Form.Check
                    required
                    name="terms"
                    label="Concordar com os termos."
                    onChange={handleChange}
                    isInvalid={!!errors.terms}
                    feedback={errors.terms}
                    id="validationFormik0"
                  />
                </Form.Group>
              </Col>
              <Col>
                <FormSectionFriends friends={values.friends} />
              </Col>

              <Col>
                <Button
                  disabled={!isValid || isSubmitting}
                  variant="success"
                  as="input"
                  size="lg"
                  type="submit"
                  value="Enviar"
                />
              </Col>
              <Col>
                <pre style={{ margin: "0 auto" }}>
                  {JSON.stringify(
                    { ...values, ...errors, isValid, isSubmitting },
                    null,
                    2
                  )}
                </pre>
              </Col>
            </Form>
          )}
        </Formik>
      </Col>
    </Row>
  );
}

export default FormExample;
