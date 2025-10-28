import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home/Home";
import Posts from "./components/Posts/Posts";
import PostDetail from "./components/PostDetail/PostDetail";
import NavBar from "./components/NavBar/NavBar";
import styles from "./App.module.css";

const App = () => {
  return (
    <div className={styles.app}>
      <NavBar />
      <div className={styles.container}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/posts" element={<Posts />} />
          <Route path="/posts/:id" element={<PostDetail />} />
        </Routes>
      </div>
    </div>
  );
};

export default App;
