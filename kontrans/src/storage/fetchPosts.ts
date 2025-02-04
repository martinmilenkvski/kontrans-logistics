import { db, collection, getDocs } from "./firebaseConfig";

export async function getAllBlogPosts() {
  const querySnapshot = await getDocs(collection(db, "posts"));
  return querySnapshot.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  }));
}
