import React, { useState, useRef } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
const FormComponent = () => {
  const usernameInput = useRef();
  const passwordInput = useRef();

  const [userData, setUserData] = useState({
    username: "",
    password: "",
  });

  const [errors, setErrors] = useState({
    username: false,
    password: false,
    root: false,
  });

  const [successed, setSuccessed] = useState(false);

  const minValidation = {
    username: 3,
    password: 8,
  };

  const handleChange = (event) => {
    // const inputValue = event.target.value;
    // const inputName = event.target.name;
    // setUserData({ ...userData, [inputName]: inputValue });
    // if (inputValue.length < minValidation[inputName]) {
    //   setErrors({ ...errors, [inputName]: true });
    // } else {
    //   setErrors({ ...errors, [inputName]: false });
    // }
    // if (event.target.name == "username") {
    //   if (value.length < 3) {
    //     setErrors({ ...errors, username: true });
    //   } else {
    //     setErrors({ ...errors, username: false });
    //   }
    //   setUserData({ ...userData, username: value });
    // } else {
    //   if (value.length < 8) {
    //     setErrors({ ...errors, password: true });
    //   } else {
    //     setErrors({ ...errors, password: false });
    //   }
    //   setUserData({ ...userData, password: value });
    // }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (userData.username == "Eslam") {
      setErrors({ ...errors, root: false });
      setSuccessed(true);
    } else {
      setSuccessed(false);
      setErrors({ ...errors, root: true });
    }
  };

  const inputProps = {
    type: "text",
    id: "username",
    name: "username",
    onChange: { handleChange },
    ref: { usernameInput },
  };

  return (
    <form className="d-flex flex-column gap-2" onSubmit={handleSubmit}>
      <div className="d-flex flex-column">
        <label htmlFor="username">Username</label>
        <input {...inputProps} />
        {errors.username && (
          <span className="text-danger fs-6">
            Username min length is 3 chars
          </span>
        )}
      </div>
      <div className="d-flex flex-column">
        <label htmlFor="password">Password</label>
        <input
          type="password"
          id="password"
          name="password"
          onChange={handleChange}
          ref={passwordInput}
        />
      </div>

      {errors.password && (
        <span className="text-danger fs-6">Password min length is 8</span>
      )}
      <button className="btn btn-primary">Submit</button>

      {successed && (
        <span className="text-success fs-5">Login successfully</span>
      )}
      {errors.root && (
        <span className="text-danger fs-5">Wrong username or password</span>
      )}
    </form>

    // <Form>
    //   <Form.Group className="mb-3" controlId="formBasicEmail">
    //     <Form.Label>Email address</Form.Label>
    //     <Form.Control type="email" placeholder="Enter email" />
    //     <Form.Text className="text-muted">
    //       We'll never share your email with anyone else.
    //     </Form.Text>
    //   </Form.Group>

    //   <Form.Group className="mb-3" controlId="formBasicPassword">
    //     <Form.Label>Password</Form.Label>
    //     <Form.Control type="password" placeholder="Password" />
    //   </Form.Group>
    //   <Form.Group className="mb-3" controlId="formBasicCheckbox">
    //     <Form.Check type="checkbox" label="Check me out" />
    //   </Form.Group>
    //   <Button variant="primary" type="submit">
    //     Submit
    //   </Button>
    // </Form>
  );
};

export default FormComponent;
