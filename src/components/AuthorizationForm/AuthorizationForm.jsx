"use client";
import Link from "next/link";
import { Formik, Form, Field, ErrorMessage } from "formik";
import {
  SectionStyled,
  ConteinerStyled,
  Title,
  Btn,
  Label,
  ForgotLink,
  Input,
  BoxForLabel,
  LoginBox,
  PasswordBox,
  Check,
  LabelForCheck,
  BoxForCheck,
  LinkAuthPage,
  NoAccauntBox,
  NoAccauntText,
} from "./AuthorizationForm.styled";

const AuthorizationForm = () => {
  const handleSubmit = (values) => {
    console.log(values);
  };
  return (
    <SectionStyled>
      <ConteinerStyled>
        <Title>Авторизація</Title>
        <Formik
          initialValues={{ username: "", password: "", rememberMe: false }}
          onSubmit={handleSubmit}
        >
          {() => (
            <Form>
              <LoginBox>
                <BoxForLabel>
                  <Label htmlFor="username">Логін</Label>
                </BoxForLabel>

                <Input type="text" id="username" name="username" />
                <ErrorMessage name="username" component="div" />
              </LoginBox>

              <PasswordBox>
                <BoxForLabel>
                  <Label htmlFor="password">Пароль</Label>
                  <ForgotLink href="/registration">Забули пароль?</ForgotLink>
                </BoxForLabel>
                <Input type="password" id="password" name="password" />
                <ErrorMessage name="password" component="div" />
              </PasswordBox>

              <BoxForCheck>
                <Check type="checkbox" name="rememberMe" />
                <LabelForCheck htmlFor="rememberMe">
                  Запам'ятати мене
                </LabelForCheck>
              </BoxForCheck>

              <Btn type="submit">Авторизуватися</Btn>
            </Form>
          )}
        </Formik>
        <LinkAuthPage href="/registration">Не прийшов лист?</LinkAuthPage>
        <NoAccauntBox>
          <NoAccauntText>Немає акаунта?</NoAccauntText>
          <LinkAuthPage href="/registration">Зареєструйтесь</LinkAuthPage>
        </NoAccauntBox>
      </ConteinerStyled>
    </SectionStyled>
  );
};

export default AuthorizationForm;
