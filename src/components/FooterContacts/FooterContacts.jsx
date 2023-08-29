"use client";
import {
  TitelForContact,
  StyledIcon,
  BackgroungForIconLink,
  ContactsList,
  BoxForContact,
} from "./FooterContacts.styled";

const FooterContacts = () => {
  return (
    <BoxForContact>
      <TitelForContact>
        Державні та комерційні електронні аукціони України
      </TitelForContact>
      <ContactsList>
        <li>
          <BackgroungForIconLink href="/registration">
            <StyledIcon>
              <use href="symbol-defs.svg#icon-viber"></use>
            </StyledIcon>
          </BackgroungForIconLink>
        </li>
        <li>
          <BackgroungForIconLink href="/registration">
            <StyledIcon>
              <use href="symbol-defs.svg#icon-telegram"></use>
            </StyledIcon>
          </BackgroungForIconLink>
        </li>
        <li>
          <BackgroungForIconLink href="/registration">
            <StyledIcon>
              <use href="symbol-defs.svg#icon-watsup"></use>
            </StyledIcon>
          </BackgroungForIconLink>
        </li>
        <li>
          <BackgroungForIconLink href="/registration">
            <StyledIcon>
              <use href="symbol-defs.svg#icon-facebook"></use>
            </StyledIcon>
          </BackgroungForIconLink>
        </li>
      </ContactsList>
    </BoxForContact>
  );
};

export default FooterContacts;
