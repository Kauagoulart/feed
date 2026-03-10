import styles from "./Post.module.css";

export function Post() {
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
        <time title="10 de Março de 2026" dateTime="2026-03-10 18:24:00">
          Publicado há 1h
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
    </article>
  );
}
