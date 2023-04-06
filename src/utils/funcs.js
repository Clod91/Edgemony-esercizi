import { postsJSON } from "@/pages/api/posts";

export const getAllPosts = () => postsJSON;

export function getAllIds() {
  let ids = [];
  getAllPosts().map((post) => {
    ids.push(`/blog/${post.id}`);
  });

  return ids;
}

export function getPostData(id) {
  let post = null;
  getAllPosts().map((p) => {
    if (p.id === id) {
      post = p;
      return;
    }
  });
  return post;
}
