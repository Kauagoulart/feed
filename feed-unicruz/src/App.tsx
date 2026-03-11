import { Header } from "./components/Header";
import { Sidebar } from "./components/Sidebar";
import { Post } from "./components/Post";

import styles from "./App.module.css";

type Content = {
  type: "paragraph" | "link";
  content: string;
};

type PostType = {
  id: number;
  author: {
    avatarUrl: string;
    name: string;
    role: string;
  };
  content: Content[];
  publishedAt: Date;
};

const posts: PostType[] = [
  {
    id: 1,
    author: {
      avatarUrl: "https://github.com/cthaiur.png",
      name: "Thaiur",
      role: "Web Developer",
    },
    content: [
      { type: "paragraph", content: "Bom dia!" },
      {
        type: "paragraph",
        content: "Fiz um projeto para a turma.",
      },
      { type: "link", content: "👉 https://github.com/cthaiur" },
      { type: "link", content: "#novoprojeto" },
      { type: "link", content: "#nlw" },
      { type: "link", content: "#rocketseat" },
    ],
    publishedAt: new Date("2026-02-10 20:00:00"),
  },
  {
    id: 2,
    author: {
      avatarUrl: "https://github.com/rannow14.png",
      name: "Victor",
      role: "Alemão",
    },
    content: [
      { type: "paragraph", content: "Opa" },
      {
        type: "paragraph",
        content: "Cara, que sono.",
      },
      { type: "link", content: "👉 [link]https://github.com/rannow14" },
    ],
    publishedAt: new Date("2001-09-11 21:00:00"),
  },
];

export default function App() {
  return (
    <div>
      <Header />
      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          {posts.map((post) => (
            <Post
              key={post.id}
              author={post.author}
              content={post.content}
              publishedAt={post.publishedAt}
            />
          ))}
        </main>
      </div>
    </div>
  );
}
