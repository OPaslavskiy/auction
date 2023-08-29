"use client";
import FooterButtomLine from "../FooterButtomLine/FooterButtomLine";
import FooterContacts from "../FooterContacts/FooterContacts";
import FooterHandbooks from "../FooterHandbooks/FooterHandbooks";
import FooterSections from "../FooterSections/FooterSections";
import { FooterStyled, MainFooterSection } from "./Footer.styled";

const Footer = () => {
  return (
    <FooterStyled>
      <MainFooterSection>
        <FooterSections />
        <FooterHandbooks />
        <FooterContacts />
      </MainFooterSection>
      <FooterButtomLine />
    </FooterStyled>
  );
};

export default Footer;
