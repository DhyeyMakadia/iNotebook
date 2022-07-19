import React, { useContext } from "react";
import { Form, Button, Container } from "react-bootstrap";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import AuthContext from "../context/authentication/AuthContext";

const Signup = () => {
  const { signup } = useContext(AuthContext);

  let schema = yup.object().shape({
    name: yup.string().required("This field is required"),
    email: yup.string().required("This field is required").email(),
    password: yup.string().required("This field is required"),
    cpassword: yup
      .string()
      .required("This field is required")
      .oneOf([yup.ref("password")], "Password must match!"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const signupSubmit = (data) => {
    const { cpassword, ...signupData } = data;
    console.log(signupData);
    console.log(cpassword);
    signup(signupData);
  };

  return (
    <>
      <Container>
        <h2 className="my-3">Signup</h2>
        <Form onSubmit={handleSubmit(signupSubmit)}>
          <Form.Group className="mb-3">
            <Form.Label>Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Name"
              {...register("name")}
            />
            <p className="text-danger">{errors.name?.message}</p>
          </Form.Group>

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

          <Form.Group className="mb-3">
            <Form.Label>Confirm Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Confirm Password"
              {...register("cpassword")}
            />
            <p className="text-danger">{errors.cpassword?.message}</p>
          </Form.Group>

          <Button variant="success" type="submit">
            Register
          </Button>
        </Form>
      </Container>
    </>
  );
};

export default Signup;
