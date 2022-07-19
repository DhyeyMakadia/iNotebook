import React from "react";
import { Form, Button, Container } from "react-bootstrap";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import AuthContext from "../context/authentication/AuthContext";
import { useContext } from "react";

const Login = () => {
  const { login } = useContext(AuthContext);

  let schema = yup.object().shape({
    email: yup.string().required("This field is required"),
    password: yup.string().required("This field is required"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const loginSubmit = (data) => {
    login(data);
  };

  return (
    <>
      <Container>
        <h2 className="my-3">Login</h2>
        <Form onSubmit={handleSubmit(loginSubmit)}>
          <Form.Group className="mb-3">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter email"
              {...register("email")}
            />
            <p className="text-danger">{errors.email?.message}</p>
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Password"
              {...register("password")}
            />
            <p className="text-danger">{errors.password?.message}</p>
          </Form.Group>

          <Button variant="success" type="submit">
            Submit
          </Button>
        </Form>
      </Container>
    </>
  );
};

export default Login;
