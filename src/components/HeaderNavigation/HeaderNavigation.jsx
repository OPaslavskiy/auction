"use client";
import { usePathname } from "next/navigation";
import {
  NavigationList,
  NavigationLink,
  StyledStar,
  NavigationLinkForStar,
} from "./HeaderNavigation.styled";

const HeaderNavigation = () => {
  const pathname = usePathname();
  return (
    <nav>
      <NavigationList>
        <li>
          <NavigationLink
            href="/registration"
            // className={pathname === "#" ? "active" : ""}
          >
            Аукціони
          </NavigationLink>
        </li>
        <li>
          <NavigationLink
            href="/registration"
            // className={pathname === "#" ? "active" : ""}
          >
            Заявки на участь
          </NavigationLink>
        </li>
        <li>
          <div>
            <NavigationLink
              href="/registration"
              // className={pathname === "#" ? "active" : ""}
            >
              Інше
            </NavigationLink>
            <div>{/** ===== ВИПАДАЮЧЕ МЕНЮ ===== */}</div>
          </div>
        </li>
        <li>
          <NavigationLink
            href="/registration"
            // className={pathname === "#" ? "active" : ""}
          >
            Запитання
          </NavigationLink>
        </li>
        <li>
          <NavigationLinkForStar
            href="/registration"
            // className={pathname === "#" ? "active" : ""}
          >
            <StyledStar>
              <use href="symbol-defs.svg#icon-star"></use>
            </StyledStar>
            Обране <span>(0)</span>
          </NavigationLinkForStar>
        </li>
      </NavigationList>
    </nav>
  );
};

export default HeaderNavigation;
