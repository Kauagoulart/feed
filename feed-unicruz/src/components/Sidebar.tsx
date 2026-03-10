import { PencilLineIcon } from "@phosphor-icons/react";
import styles from "./Sidebar.module.css";
import { Avatar } from "./Avatar";

export function Sidebar() {
  return (
    <aside className={styles.sidebar}>
      <img
        className={styles.cover}
        src="https://avatars.githubusercontent.com/u/141740450?v=4"
        alt=""
      />
      <div className={styles.profile}>
        <Avatar hasBorder={true} src="https://github.com/kauagoulart.png" />
        <strong>Kauã</strong>
        <span>Developer</span>
      </div>
      <footer>
        <a href="#">
          <PencilLineIcon size={20} />
          Editar Perfil
        </a>
      </footer>
    </aside>
  );
}
