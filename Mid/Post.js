import React, { useState } from "react";

const Post = ({ goBack }) => {
  const [postContent, setPostContent] = useState("Post's text");

  const editPost = (newContent) => {
    setPostContent(newContent);
  };

  return (
    <div>
      <h1>Post</h1>
      <textarea
        value={postContent}
        onChange={(e) => editPost(e.target.value)}
      ></textarea>
      <button onClick={() => goBack()}>Back to Feed</button>
    </div>
  );
};

export default Post;
