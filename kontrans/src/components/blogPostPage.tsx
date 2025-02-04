import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { db, doc, getDoc } from "../storage/firebaseConfig";

export function BlogPostPage() {
  const { id } = useParams();
  interface Post {
    title: string;
    imageUrl: string;
    content: string;
  }

  const [post, setPost] = useState<Post | null>(null);

  useEffect(() => {
    async function fetchPost() {
      if (!id) return;
      const docRef = doc(db, "posts", id);
      const docSnap = await getDoc(docRef);
      if (docSnap.exists()) {
        setPost(docSnap.data() as Post);
      }
    }
    fetchPost();
  }, [id]);

  if (!post) return <p>Loading...</p>;

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-4">{post.title}</h1>
      <img src={post.imageUrl} alt={post.title} className="w-full mb-4" />
      <p className="text-lg">{post.content}</p>
    </div>
  );
}
