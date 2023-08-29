"use client";
import HeaderAuthorizationBox from "../HeaderAuthorizationBox/HeaderAuthorizationBox";
import HeaderContacts from "../HeaderContacts/HeaderContacts";
import HeaderNavigation from "../HeaderNavigation/HeaderNavigation";
import { HeaderStyled } from "./Header.styled";

const Header = () => {
  return (
    <HeaderStyled>
      <HeaderNavigation />
      <HeaderContacts />
      <HeaderAuthorizationBox />
    </HeaderStyled>
  );
};

export default Header;
