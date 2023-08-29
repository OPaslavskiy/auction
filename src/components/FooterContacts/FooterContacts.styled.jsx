import styled from "styled-components";
import Link from "next/link";

export const TitelForContact = styled.h4`
  color: #555;
  font-size: var(--fontSize14);
  font-weight: var(--fontWeight400);
  line-height: 140%;
  max-width: 270px;
  margin-bottom: 31px;
`;

export const BackgroungForIconLink = styled(Link)`
  background-color: var(--accentColor);
  display: flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;
  border-radius: 50%;
`;

export const StyledIcon = styled.svg`
  width: 18px;
  height: 18px;
`;

export const ContactsList = styled.ul`
  display: flex;
  gap: 20px;
`;

export const BoxForContact = styled.div`
  margin-top: 40px;
`;
