import "./styles.css";
import React, { useState, useEffect } from "react"; //Hooks
import Feed from "./Feed";
import Post from "./Post";
import Profile from "./Profile";

function App() {
  const [currentPage, setCurrentPage] = useState("feed");

  const goToPost = () => {
    setCurrentPage("post");
  };

  const goToProfile = () => {
    setCurrentPage("profile");
  };

  const goBack = () => {
    setCurrentPage("feed");
  };

  const changePage = (page) => {
    setCurrentPage(page);
  };

  let content = null;

  switch (currentPage) {
    case "feed":
      content = <Feed changePage={changePage} />;
      break;
    case "post":
      content = <Post changePage={changePage} />;
      break;
    case "profile":
      content = <Profile changePage={changePage} />;
      break;
    default:
      content = <Feed changePage={changePage} />;
  }

  switch (currentPage) {
    case "feed":
      content = <Feed goToPost={goToPost} goToProfile={goToProfile} />;
      break;
    case "post":
      content = <Post goBack={goBack} />;
      break;
    case "profile":
      content = <Profile goBack={goBack} />;
      break;
    default:
      content = <Feed goToPost={goToPost} goToProfile={goToProfile} />;
  }

  return (
    <div>
      <nav>
        <button onClick={() => changePage("feed")}>Main</button>
        <button onClick={() => changePage("post")}>Post</button>
        <button onClick={() => changePage("profile")}>Profile</button>
      </nav>

      {content}
    </div>
  );
}

export default App;
