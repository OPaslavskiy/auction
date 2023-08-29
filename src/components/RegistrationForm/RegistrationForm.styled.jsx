import React from "react";
import { Field, useField } from "formik";
import styled from "styled-components";

const StyledField = styled(Field)`
  border: 1px solid #ccc;
  padding: 8px;

  /* ${(props) =>
    props.hasError &&
    `
    border-color: red;
  `} */
`;

// export const CustomField = ({ name, ...props }) => {
//   const [field, meta] = useField(name);

//   const error = meta.touched && meta.error;

//   return <StyledField {...field} {...props} hasError={error} />;
// };
