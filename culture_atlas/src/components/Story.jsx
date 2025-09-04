import React from 'react'
import '../assets/css/Story.css'
import { useState } from 'react';
import { useEffect } from 'react';

const Story = ({ title, description, photoUrl, postId, role, onApprove  }) => {

  const [liked, setLiked] = useState(false);
  const currentUserId = localStorage.getItem("userid")
  //check if liked
  useEffect(() => {
    const checkLike = async () => {
      try {
        const res = await fetch(`http://localhost:3001/postLike/check?postId=${postId}&userid=${currentUserId}`);
        const data = await res.json();
        if (data.liked) {
          setLiked(true);
        }
      } catch (err) {
        console.error(err);
      }
    };
    checkLike();
  }, [postId, currentUserId]);

  const handleLike = async () => {
    if (!currentUserId) {
      alert("Please login to like this post");
      return;
    }

    try {
      if (!liked) {
        const res = await fetch("http://localhost:3001/postLike/like", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ postId, userid: currentUserId }),
        });
        const data = await res.json();
        if (data.success) {
          setLiked(true);
        } else {
          alert(data.message || "Failed to like");
        }
      } else {
        await fetch(
          `http://localhost:3001/postLike/unlike?postId=${postId}&userid=${currentUserId}`,
          { method: "DELETE" }
        );
        setLiked(false);
      }
    } catch (err) {
      console.error(err);
    }
  };

  const handleApprove = async () => {
    try {
      const res = await fetch(
        `http://localhost:3001/post/approve?postId=${postId}`,
        { method: "POST" }
      );
      const data = await res.json();
      if (data.success) {
        alert("Post approved ");
        if (onApprove) onApprove(postId);
      } else {
        alert(data.message || "Failed to approve");
      }
    } catch (err) {
      console.error(err);
    }
  };


  return (
    <div className="story-card">
      <img src={photoUrl} alt={title} className="story-image" />
      <button
        className={`like-btn ${liked ? "liked" : "not-liked"}`}
        onClick={handleLike}
      >
        {liked ? <> <img src='/images/like_filled.png' height="20px" /> Liked </> :
          <> <img src='/images/like_border.png' height="20px" /> Like </>}
      </button>
      <h3 className="story-title">{title}</h3>
      <p className="story-description">{description}</p>
      {
        (role === "admin" && (
          <button
            className="approve-btn"
            onClick={handleApprove}
          >
             Approve
          </button>
        ))
      }
    </div>
  )
}

export default Story