import { Link } from "react-router-dom";

interface Post {
  id: string;
  title: string;
}

function PostLink({ currentPost }: { currentPost: Post }) {
  return (
    <li>
      <Link to={`/blog/${currentPost.id}`}>{currentPost.title}</Link>
    </li>
  );
}

export default PostLink;
