"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  TitlelFotFooter,
  LinkForFooter,
  ListForFooter,
  FooterHandbooksBox,
} from "./FooterHandbooks.styled";

const FooterHandbooks = () => {
  // const pathname = usePathname();
  return (
    <FooterHandbooksBox>
      <TitlelFotFooter>Довідники</TitlelFotFooter>
      <nav>
        <ListForFooter>
          <li>
            <LinkForFooter
              href="/registration"
              // className={pathname === "#" ? "active" : ""}
            >
              Регламенти
            </LinkForFooter>
          </li>
          <li>
            <LinkForFooter
              href="/registration"
              // className={pathname === "#" ? "active" : ""}
            >
              Політика конфіденційності
            </LinkForFooter>
          </li>
          <li>
            <LinkForFooter
              href="/registration"
              // className={pathname === "#" ? "active" : ""}
            >
              Публічний договір (оферта)
            </LinkForFooter>
          </li>
          <li>
            <LinkForFooter
              href="/registration"
              // className={pathname === "#" ? "active" : ""}
            >
              Угоди{" "}
            </LinkForFooter>
          </li>
          <li>
            <LinkForFooter
              href="/registration"
              // className={pathname === "#" ? "active" : ""}
            >
              Тарифи
            </LinkForFooter>
          </li>
          <li>
            <LinkForFooter
              href="/registration"
              // className={pathname === "#" ? "active" : ""}
            >
              Інструкції
            </LinkForFooter>
          </li>
          <li>
            <LinkForFooter
              href="/registration"
              // className={pathname === "#" ? "active" : ""}
            >
              Контакти і реквізити
            </LinkForFooter>
          </li>
        </ListForFooter>
      </nav>
    </FooterHandbooksBox>
  );
};

export default FooterHandbooks;
