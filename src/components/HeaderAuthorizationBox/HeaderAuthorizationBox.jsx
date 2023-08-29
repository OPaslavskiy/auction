"use client";
import Link from "next/link";
import {
  AuthorizationBoxList,
  AuthorizationLink,
  RegistrationLink,
} from "./HeaderAuthorizationBox.styled";

const HeaderAuthorizationBox = () => {
  return (
    <AuthorizationBoxList>
      <li>
        <AuthorizationLink href="/">Вхід</AuthorizationLink>
      </li>
      <li>
        <RegistrationLink href="/registration">Реєстрація</RegistrationLink>
      </li>
    </AuthorizationBoxList>
  );
};

export default HeaderAuthorizationBox;
