import React from "react";
import { Button, Card, Col, Form } from "react-bootstrap";
import { FieldArray } from "formik";
import FormTextField from "./form-field";
function FormSectionFriends({ friends }) {
  return (
    <FieldArray
      name="friends"
      render={arrayHelpers => (
        <>
          {friends && friends.length > 0 ? (
            friends.map((friend, index) => (
              <Card key={index}>
                <Card.Header>
                  <Card.Title>Amigo {index + 1}</Card.Title>
                </Card.Header>
                <Card.Body>
                  <Form.Row>
                    <FormTextField
                      as={Col}
                      sm="4"
                      controlId={`friends.${index}.firstName`}
                      label="Primeiro Nome"
                      type="text"
                      name={`friends.${index}.firstName`}
                    />
                    <FormTextField
                      as={Col}
                      sm="4"
                      controlId={`friends.${index}.lastName`}
                      label="Último nome"
                      type="text"
                      name={`friends.${index}.lastName`}
                    />
                  </Form.Row>
                </Card.Body>
                <Card.Footer>
                  <Button
                    type="button"
                    variant="outline-danger"
                    size="lg"
                    onClick={() => arrayHelpers.remove(index)} // remove a friend from the list
                  >
                    -
                  </Button>
                  <Button
                    type="button"
                    variant="outline-success"
                    size="lg"
                    onClick={() =>
                      arrayHelpers.push({
                        firstName: "",
                        lastName: ""
                      })
                    }
                  >
                    +
                  </Button>
                </Card.Footer>
              </Card>
            ))
          ) : (
            <Button type="button" onClick={() => arrayHelpers.push("")}>
              Adicionar um amigo
            </Button>
          )}
        </>
      )}
    />
  );
}

export default FormSectionFriends;
