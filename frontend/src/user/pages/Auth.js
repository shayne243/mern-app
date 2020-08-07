import React from "react";

import { useForm } from "../../shared/hooks/form-hook";
import "./Auth.css";
import Card from "../../shared/components/UIElements/Card";
import Input from "../../shared/components/FormElements/Input";
import Button from "../../shared/components/FormElements/Button";
import {
  VALIDATOR_EMAIL,
  VALIDATOR_MINLENGTH,
} from "../../shared/util/validators";

const Auth = () => {
  const [formState, inputHandler] = useForm(
    {
      email: {
        value: "",
        isValid: false,
      },
      password: {
        value: "",
        isValid: false,
      },
    },
    false
  );

  const authSubmitHandler = (event) => {
    event.preventDefault();
    console.log(formState.inputs);
  };

  return (
    <Card>
      <h2 className="authentication__header">Login</h2>
      <hr />
      <form className="authentication" onSubmit={authSubmitHandler}>
        <Input
          id="email"
          type="email"
          element="input"
          label="Email"
          validators={[VALIDATOR_EMAIL()]}
          errorText="Please enter a valid email address"
          onInput={inputHandler}
          initialValue={formState.inputs.email.value}
          initialValid={formState.inputs.email.isValid}
        />
        <Input
          id="password"
          type="password"
          element="input"
          label="Password"
          validators={[VALIDATOR_MINLENGTH(6)]}
          errorText="Please enter a valid password (min. 5 characters)"
          onInput={inputHandler}
          initialValue={formState.inputs.password.value}
          initialValid={formState.inputs.password.isValid}
        />
        <Button type="submit" disabled={!formState.isValid}>
          LOGIN
        </Button>
      </form>
    </Card>
  );
};

export default Auth;
