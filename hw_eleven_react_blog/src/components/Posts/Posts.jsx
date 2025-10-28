import React from "react";
import { Link } from "react-router-dom";

const posts = [
  { id: 1, title: "React Basics" },
  { id: 2, title: "Understanding React Router" },
  { id: 3, title: "React Hooks Deep Dive" },
];

const Posts = () => {
  return (
    <div>
      <h2>Blog Posts</h2>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>
            <Link to={`/posts/${post.id}`}>{post.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Posts;
