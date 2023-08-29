"use client";
import {
  PhoneStyled,
  ArrowDownStyled,
  ContactBox,
} from "./HeaderContacts.styled";

const HeaderContacts = () => {
  return (
    <>
      <ContactBox>
        <PhoneStyled>
          <use href="symbol-defs.svg#icon-phone"></use>
        </PhoneStyled>
        <ArrowDownStyled>
          <use href="symbol-defs.svg#icon-arrowDown"></use>
        </ArrowDownStyled>
      </ContactBox>
      <div>123{/** ===== ВИПАДАЮЧЕ МЕНЮ КОНТАКТНИХ ДАНИХ===== */}</div>
    </>
  );
};

export default HeaderContacts;
