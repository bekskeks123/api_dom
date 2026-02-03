import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import PostList from "./components/PostList";
import PostDetail from "./components/PostDetail";
import "./index.css";

function App() {
  return (
    <Router>
      <div className="container">
        <h1 className="title">API посты</h1>
        <Routes>
          
          <Route path="/" element={<Navigate to="/posts" />} />
          <Route path="/posts" element={<PostList />} />
          <Route path="/posts/:id" element={<PostDetail />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
