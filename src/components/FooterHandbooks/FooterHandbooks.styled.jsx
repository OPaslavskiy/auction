import styled from "styled-components";
import Link from "next/link";

export const FooterHandbooksBox = styled.div`
  margin-left: 174px;
  margin-right: 74px;
`;

export const TitlelFotFooter = styled.h3`
  color: #111;
  font-size: var(--fontSize16);
  font-weight: var(--fontWeight600);
  text-transform: uppercase;
  margin-bottom: 21px;
`;

export const LinkForFooter = styled(Link)`
  color: #555;
  font-size: var(--fontSize15);
  font-weight: var(--fontWeight300);
`;

export const ListForFooter = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 21px;
`;
