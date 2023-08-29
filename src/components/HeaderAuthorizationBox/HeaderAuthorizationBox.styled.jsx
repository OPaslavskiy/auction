import styled from "styled-components";
import Link from "next/link";

export const AuthorizationBoxList = styled.ul`
  display: flex;
  gap: 10px;
  justify-content: center;
  align-items: center;
  margin-left: auto;
`;

export const AuthorizationLink = styled(Link)`
  font-size: var(--fontSize15);
  font-weight: var(--fontWeight500);
  padding: 15px 30px 16px 30px;
  border: 1px solid var(--accentColor);
  border-radius: 8px;
`;

export const RegistrationLink = styled(Link)`
  color: var(--whiteColor);
  font-size: var(--fontSize15);
  font-weight: var(--fontWeight500);
  padding: 15px 30px 16px 30px;
  border: none;
  border-radius: 8px;
  background: linear-gradient(
    315deg,
    var(--accentColor) 0%,
    var(--accentColorLight) 100%
  );
`;
