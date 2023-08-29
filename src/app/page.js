import Header from "@/components/Header/Header";
import styles from "./page.module.css";
import "normalize.css/normalize.css";
import Footer from "@/components/Footer/Footer";
import AuthorizationForm from "@/components/AuthorizationForm/AuthorizationForm";
import AuthorizationPage from "./authorization/page";

export default function Home() {
  return <AuthorizationPage />;
}
