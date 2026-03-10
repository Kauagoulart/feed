import { format, formatDistanceToNow } from "date-fns";
import { ptBR } from "date-fns/locale";

import styles from "./Post.module.css";

export function Post() {
  const publishedDate = new Date();
  const publishedDateFormatted = format(
    publishedDate,
    "d 'de' LLLL 'às' HH:mm",
    { locale: ptBR },
  );
  const publishedDateRelativeToNow = formatDistanceToNow(publishedDate, {
    locale: ptBR,
    addSuffix: true,
  });

  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <img
            className={styles.avatar}
            src="https://github.com/kauagoulart.png"
            alt="Foto de Perfil"
          />
          <div className={styles.authorInfo}>
            <strong>Kauã</strong>
            <span>Developer</span>
          </div>
        </div>
        <time
          title={publishedDateFormatted}
          dateTime={publishedDate.toISOString()}
        >
          Publicado {publishedDateRelativeToNow}
        </time>
      </header>
      <div className={styles.content}>
        <p>Opa</p>

        <p>Primeiro post sendo feito!</p>

        <p>
          <a href="#">👉 github.com/kauagoulart</a>
        </p>
        <p>
          <a href="#">#primeiro_post</a>
          {"  "}
          <a href="#">#new</a>
          {"  "}
        </p>
      </div>
      <form className={styles.commentForm}>
        <strong>Deixe seu Feedback</strong>
        <textarea placeholder="Deixe um comentário" />
        <footer>
          <button type="submit">Publicar</button>
        </footer>
      </form>
    </article>
  );
}
