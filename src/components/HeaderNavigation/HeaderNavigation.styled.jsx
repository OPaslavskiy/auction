import styled from "styled-components";
import Link from "next/link";

export const NavigationList = styled.ul`
  display: flex;
  gap: 61px;
  justify-content: center;
  align-items: center;
`;

export const NavigationLink = styled(Link)`
  font-size: var(--fontSize15);
  font-weight: var(--fontWeight500);
  padding: 40px 0;
`;

export const StyledStar = styled.svg`
  width: 22px;
  height: 20px;
  stroke: var(--accentColor);
  fill: #fff;
  margin-right: 6px;
`;

export const NavigationLinkForStar = styled(Link)`
  display: flex;
  align-items: center;
`;
