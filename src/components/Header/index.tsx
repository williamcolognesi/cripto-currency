import styles from "./header.module.css";
import logo from "../../../public/logo.png";
import { Link } from "react-router-dom";

export function Header() {
  return (
    <header className={styles.container}>
      <Link to="/">
        <img src={logo} alt="Logo do bitcoin" />
      </Link>
    </header>
  );
}
