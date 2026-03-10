import { ThumbsUpIcon, TrashIcon } from "@phosphor-icons/react";
import styles from "./Comment.module.css";
import { Avatar } from "./Avatar";

export function Comment() {
  return (
    <div className={styles.comment}>
      <Avatar />
      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTime}>
              <strong>Kauã</strong>
              <time title="1 hora atrás" dateTime="2026-03-10 18:41:00">
                Publicado Há 1 h
              </time>
            </div>
            <button title="Deletar Comentário">
              <TrashIcon size={24} />
            </button>
          </header>
          <p>Muito Bom! Primeiro post!!!</p>
        </div>
        <footer>
          <button>
            <ThumbsUpIcon />
            Aplaudir <span>20</span>
          </button>
        </footer>
      </div>
    </div>
  );
}
