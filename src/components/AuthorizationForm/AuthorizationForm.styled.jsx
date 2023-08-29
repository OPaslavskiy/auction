import styled from "styled-components";
import Link from "next/link";
import { Formik, Form, Field, ErrorMessage } from "formik";

export const SectionStyled = styled.section`
  padding-top: 60px;
  padding-bottom: 100px;
`;

export const ConteinerStyled = styled.section`
  width: 1200px;
  padding-left: 255px;
  padding-right: 15px;
  margin-right: auto;
`;

export const Title = styled.h2`
  font-size: var(--fontSize30);
  font-weight: var(--fontWeight900);
  line-height: 150%;
  text-transform: uppercase;
  margin-bottom: 30px;
`;

export const Btn = styled.button`
  width: 370px;
  padding-top: 14px;
  padding-bottom: 16px;
  color: var(--whiteColor);
  font-size: var(--fontSize17);
  font-weight: var(--fontWeight500);
  border-radius: 8px;
  border: none;
  margin-bottom: 25px;
  background: linear-gradient(
    315deg,
    var(--accentColor) 0%,
    var(--accentColorLight) 100%
  );
`;

export const Label = styled.label`
  font-size: var(--fontSize14);
  font-weight: var(--fontWeight300);
`;

export const ForgotLink = styled(Link)`
  font-size: var(--fontSize14);
  font-weight: var(--fontWeight300);
  color: var(--accentColor);
  margin-left: 10px;
`;

export const Input = styled(Field)`
  width: 370px;
  height: 50px;
  border-radius: 8px;
  background-color: var(--colorForInput);
  border: none;
`;

export const BoxForLabel = styled.div`
  margin-bottom: 10px;
`;

export const LoginBox = styled.div`
  margin-bottom: 20px;
`;

export const PasswordBox = styled.div`
  margin-bottom: 25px;
`;

export const Check = styled(Field)`
  width: 22px;
  height: 22px;
  border-radius: 2px;
  background-color: var(--colorForInput);
  border: 1px solid #d9d9d9;
`;

export const LabelForCheck = styled(Label)`
  font-size: var(--fontSize14);
  font-weight: var(--fontWeight300);
  line-height: 140%;
`;

export const BoxForCheck = styled.div`
  display: flex;
  align-items: flex-end;
  gap: 12px;
  margin-bottom: 25px;
`;

export const LinkAuthPage = styled(Link)`
  font-size: var(--fontSize14);
  font-weight: var(--fontWeight300);
  color: var(--accentColor);
  line-height: 140%;
`;

export const NoAccauntBox = styled.div`
  display: flex;
  margin-top: 10px;
  gap: 10px;
`;

export const NoAccauntText = styled.p`
  font-size: var(--fontSize14);
  font-weight: var(--fontWeight300);
  line-height: 140%;
`;
