import React from "react";
import { StyledInput, Container, Error, StyledLabel } from "./styles";

const Input = ({ label, type, name, handleChange, value }) => {
  return (
    <Container>
      <StyledLabel htmlFor={name}>{label}</StyledLabel>
      <StyledInput
        value={value}
        id={name}
        name={name}
        type={type}
        onChange={handleChange}
      />
      <Error>error</Error>
    </Container>
  );
};

export default Input;
