import React, { useState, useEffect } from "react";
import API from "../../api/index.js";
import "./styles/ActivityLog.css"; // Import CSS file for styling

function CommentsSection({ projectId }) {
  const [comments, setComments] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [newComment, setNewComment] = useState("");

  useEffect(() => {
    const fetchComments = async () => {
      if (!projectId) return;

      setLoading(true);
      try {
        const response = await API.get(`/api/projects/${projectId}/comments`);
        setComments(response.data);
      } catch (error) {
        console.error("Error fetching comments:", error);
        setError("Failed to load comments.");
      } finally {
        setLoading(false);
      }
    };

    fetchComments();
  }, [projectId]);

  const handleCommentChange = (event) => {
    setNewComment(event.target.value);
  };

  const handleCommentSubmit = async (event) => {
    event.preventDefault();
    if (newComment.trim() === "") return; // Prevent empty comments

    try {
      const response = await API.post(`/projects/${projectId}/comments`, {
        message: newComment,
      });
      setComments([...comments, response.data]); // Add the new comment to the list
      setNewComment(""); // Clear the input field
    } catch (error) {
      console.error("Error posting comment:", error);
      setError("Failed to post comment.");
    }
  };

  return (
    <div className="comments-section">
      <h3>Comments</h3>

      {loading && <p>Loading comments...</p>}
      {error && <p className="error">{error}</p>}

      {!loading && !error && (
        <ul className="comments-list">
          {comments.length > 0 ? (
            comments.map((comment) => (
              <li key={comment.id} className="comment">
                <p className="comment-author">{comment.author}</p>
                <p className="comment-date">
                  {new Date(comment.created_at).toLocaleString()}
                </p>
                <p className="comment-message">{comment.message}</p>
              </li>
            ))
          ) : (
            <p>No comments yet.</p>
          )}
        </ul>
      )}

      <form className="comment-form" onSubmit={handleCommentSubmit}>
        <textarea
          value={newComment}
          onChange={handleCommentChange}
          placeholder="Add a comment..."
        />
        <button type="submit">Post Comment</button>
      </form>
    </div>
  );
}

export default CommentsSection;