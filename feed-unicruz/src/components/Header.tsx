import styles from "./Header.module.css";
import logoUnicruz from "../assets/logo-unicruz.svg";
export function Header() {
  return (
    <div className={styles.header}>
      <img src={logoUnicruz} alt="Logo Unicruz" />
      <strong>Ciência da Computação - UNICRUZ</strong>
    </div>
  );
}
