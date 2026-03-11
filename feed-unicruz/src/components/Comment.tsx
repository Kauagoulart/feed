import { ThumbsUpIcon, TrashIcon } from "@phosphor-icons/react";
import styles from "./Comment.module.css";
import { Avatar } from "./Avatar";

interface CommentProps {
  content: string;
  onDeleteComment: (comment: string) => void;
}

export function Comment({ content, onDeleteComment }: CommentProps) {
  function handleDeleteComment() {
    onDeleteComment(content);
  }

  return (
    <div className={styles.comment}>
      <Avatar hasBorder={false} src="https://github.com/kauagoulart.png" />
      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTime}>
              <strong>Kauã</strong>
              <time title="1 hora atrás" dateTime="2026-03-10 18:41:00">
                Publicado Há 1 h
              </time>
            </div>
            <button title="Deletar Comentário" onClick={handleDeleteComment}>
              <TrashIcon size={24} />
            </button>
          </header>
          <p>{content}</p>
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
