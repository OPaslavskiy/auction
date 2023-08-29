"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  TitlelFotFooter,
  LinkForFooter,
  ListForFooter,
  FooterSectionsBox,
} from "./FooterSections.styled";

const FooterSections = () => {
  const pathname = usePathname();
  return (
    <FooterSectionsBox>
      <TitlelFotFooter>Розділи</TitlelFotFooter>
      <nav>
        <ListForFooter>
          <li>
            <LinkForFooter
              href="/registration"
              // className={pathname === "#" ? "active" : ""}
            >
              Аукціони
            </LinkForFooter>
          </li>
          <li>
            <LinkForFooter
              href="/registration"
              // className={pathname === "#" ? "active" : ""}
            >
              Заявки на участь
            </LinkForFooter>
          </li>
          <li>
            <LinkForFooter
              href="/registration"
              // className={pathname === "#" ? "active" : ""}
            >
              Об’єкти реєстру
            </LinkForFooter>
          </li>
          <li>
            <LinkForFooter
              href="/registration"
              // className={pathname === "#" ? "active" : ""}
            >
              Договри рестру
            </LinkForFooter>
          </li>
          <li>
            <LinkForFooter
              href="/registration"
              // className={pathname === "#" ? "active" : ""}
            >
              Дії
            </LinkForFooter>
          </li>
          <li>
            <LinkForFooter
              href="/registration"
              // className={pathname === "#" ? "active" : ""}
            >
              Заявки
            </LinkForFooter>
          </li>
          <li>
            <LinkForFooter
              href="/registration"
              // className={pathname === "#" ? "active" : ""}
            >
              Запитання
            </LinkForFooter>
          </li>
          <li>
            <LinkForFooter
              href="/registration"
              // className={pathname === "#" ? "active" : ""}
            >
              Налаштування
            </LinkForFooter>
          </li>
        </ListForFooter>
      </nav>
    </FooterSectionsBox>
  );
};

export default FooterSections;
