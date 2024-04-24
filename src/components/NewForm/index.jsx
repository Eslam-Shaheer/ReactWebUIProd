import React from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useForm } from "react-hook-form";
const NewForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      username: "Shaheeer",
      password: "",
    },
  });
  console.log("new form re rendred");
  const onSubmit = (data) => console.log(data);
  // const handleSumbit=(onSubmit)=>{
  //     const data={username:"Ahmed",password:"aasas"}
  //     onSubmit(data)
  // }
  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter email"
          {...register("username", {
            required: true,
            minLength: 10,
            validate: (value) => value.includes("@"),
          })}
        />
        {errors.username && (
          <span className="text-danger fs-6">username min length is 10</span>
        )}
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control
          type="password"
          placeholder="Password"
          {...register("password", { required: true, minLength: 8 })}
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Check me out" />
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
};

export default React.memo(NewForm);
