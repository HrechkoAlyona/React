import React from "react";
import { useParams, useNavigate } from "react-router-dom";

const PostDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  return (
    <div>
      <h2>Post #{id}</h2>
      <p>This is the detailed view of the post with ID: {id}</p>
      <button onClick={() => navigate("/posts")}>Back to Posts</button>
    </div>
  );
};

export default PostDetail;
