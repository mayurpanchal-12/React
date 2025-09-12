import { Link } from "react-router-dom";

export default function Home() {
  const posts = [
    { id: 1, title: "React Router Basics" },
    { id: 2, title: "Nested Routes Example" },
    { id: 3, title: "Dynamic Params in Router" },
  ];

  return (
    <>
      <h1>Welcome to My Blog</h1>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>
            <Link to={`/posts/${post.id}`}>{post.title}</Link>
          </li>
        ))}
      </ul>
    </>
  );
}
