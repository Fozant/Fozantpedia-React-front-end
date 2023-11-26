import React, { useState } from "react";
import "./app.css";
import FormInput from "./components/FormInput";
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import SignIn from "./components/SignIn";

const App = () => {
  const [values, setValues] = useState({
    username: "",
    email: "",
    birthday: "",
    password: "",
    confirmPassword: "",
  });

  const inputs = [
    {
      id: 1,
      name: "username",
      type: "text",
      placeholder: "Username",
      label: "Username",
      required: true,
    },
    {
      id: 2,
      name: "email",
      type: "email",
      placeholder: "Email",
      label: "Email",
      required: true,
    },
    {
      id: 3,
      name: "birthday",
      type: "date",
      placeholder: "Birthday",
      label: "Birthday",
    },
    {
      id: 4,
      name: "password",
      type: "password",
      placeholder: "Password",
      label: "Password",
      required: true,
    },
    {
      id: 5,
      name: "confirmPassword",
      type: "password",
      placeholder: "Confirm Password",
      label: "Confirm Password",
      required: true,
    },
   
  ];
  

  const handleSubmit = (e) => {
    e.preventDefault();
    // Validation logic and form submission here
  };

  const onChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  return (
    <div className="app">
      <Router>
        <Switch>
          <Route path="/signin">
            <SignIn />
          </Route>
          <Route path="/">
            <form onSubmit={handleSubmit}>
              <h1>Register</h1>
              {inputs.map((input) => (
                <FormInput
                  key={input.id}
                  {...input}
                  value={values[input.name]}
                  onChange={onChange}
                  errorMessage={
                    input.required && values[input.name].trim().length === 0
                      ? `${input.label} is required`
                      : ''
                  }
                />
              ))}
              <button type="submit">Submit</button>
              <Link to="/signin" className="signInText">
                Already have an account? Sign in
              </Link>
            </form>
          </Route>
        </Switch>
      </Router>
    </div>
  );
};

export default App;