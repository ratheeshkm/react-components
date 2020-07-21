import React, { Fragment } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import "./login.css";
import { useForm } from "react-hook-form";

const Login = () => {
  const { register, handleSubmit, errors } = useForm();
  const onSubmit = (data) => console.log(data);

  return (
    <Fragment>
      <Container>
        <Row className="justify-content-md-center">
          <Col>
            <Form onSubmit={handleSubmit(onSubmit)}>
              <Form.Group controlId="userName">
                <Form.Label>User Name</Form.Label>
                <Form.Control
                  type="userName"
                  name="userName"
                  ref={register({ required: true })}
                  placeholder="Username"
                />
                {errors.userName && (
                  <Form.Text className="text-muted error">
                    <span className="error">This filed is required</span>
                  </Form.Text>
                )}
              </Form.Group>
              <Form.Group controlId="Password">
                <Form.Label>Password</Form.Label>
                <Form.Control
                  type="password"
                  name="password"
                  ref={register({ required: true })}
                  placeholder="Password"
                />
                {errors.password && (
                  <Form.Text className="text-muted error">
                    <span className="error">This filed is required</span>
                  </Form.Text>
                )}
              </Form.Group>
              <Form.Group controlId="userName">
                <Button variant="primary" type="submit">
                  Submit
                </Button>
              </Form.Group>
            </Form>
          </Col>
        </Row>
      </Container>
    </Fragment>
  );
};

export default Login;
