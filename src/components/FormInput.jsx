import { useState } from "react";
import "./formInput.css";

const FormInput = ({ label, errorMessage, onChange, ...inputProps }) => {
  const [focused, setFocused] = useState(false);

  return (
    <div className="formInput">
      <label>{label}</label>
      <input
        {...inputProps}
        onChange={onChange}
        onBlur={() => setFocused(false)}
        onFocus={() => setFocused(true)}
        className={focused ? "focused" : ""}
      />
      {errorMessage && <span>{errorMessage}</span>}
    </div>
  );
};

export default FormInput;
