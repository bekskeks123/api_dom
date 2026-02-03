import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

function PostDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [post, setPost] = useState(null);
  const [comments, setComments] = useState([]);
  const [showComments, setShowComments] = useState(false);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
      .then((res) => res.json())
      .then((data) => setPost(data));
  }, [id]);

  const loadComments = () => {
    fetch(`https://jsonplaceholder.typicode.com/posts/${id}/comments`)
      .then((res) => res.json())
      .then((data) => setComments(data));
    setShowComments(true);
  };

  if (!post) return <p>Загрузка</p>;

  return (
    <div>
      <h2>{post.title}</h2>
      <p>{post.body}</p>
      <button className="btn" onClick={() => navigate("/posts")}>
        Назад к списку
      </button>

      <div style={{ marginTop: "20px" }}>
        {!showComments ? (
          <button className="btn" onClick={loadComments}>
            Показать комментарии
          </button>) : (
          <div className="comments">
            <h3>Комментарии</h3>
            {comments.map((c) => (
              <div key={c.id} className="comment-card">
                <p><strong>{c.name}</strong> ({c.email})</p>
                <p>{c.body}</p>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default PostDetail;
