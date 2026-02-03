import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function PostList() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((res) => res.json())
      .then((data) => setPosts(data));
  }, []);

  return (
    <div>
      <h2>Список постов</h2>
      <div className="post-list">
        {posts.map((post) => (
          <div key={post.id} className="card">
            <h3>{post.title}</h3>
            <Link to={`/posts/${post.id}`} className="btn">
              Читать подробнее
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default PostList;
