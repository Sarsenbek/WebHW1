import React, { useState } from "react";
import { posts } from "./data";

const Feed = ({ goToPost, goToProfile }) => {
  const [postList, setPostList] = useState(posts);
  const [newPost, setNewPost] = useState("");

  const addPost = () => {
    setPostList([...postList, { id: postList.length + 1, content: newPost }]);
    setNewPost("");
  };

  return (
    <div>
      <h1>Feed</h1>
      <textarea
        value={newPost}
        onChange={(e) => setNewPost(e.target.value)}
        placeholder="Write a new post..."
      ></textarea>
      <button onClick={addPost}>Add Post</button>
      <ul>
        {postList.map((post) => (
          <li key={post.id}>{post.content}</li>
        ))}
      </ul>
      <button onClick={() => goToPost()}>Go to Post</button>
      <button onClick={() => goToProfile()}>Go to Profile</button>
    </div>
  );
};

export default Feed;
