import { useParams } from "react-router-dom";

export default function PostDetail() {
  const { postid } = useParams();
  return <h1>Reading Blog Post #{postid}</h1>;
}

