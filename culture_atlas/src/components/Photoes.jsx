import React, { useRef, useState, useEffect } from 'react'
import '../assets/css/Photoes.css'

const Photoes = ({ title, description, photoUrl, postId, role, onApprove }) => {


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



  const containerRef = useRef(null)
  const [currentIndex, setCurrentIndex] = useState(1)

  // Track which image is currently in view
  useEffect(() => {
    const container = containerRef.current

    const handleScroll = () => {
      const scrollLeft = container.scrollLeft
      const imageWidth = container.offsetWidth
      const index = Math.round(scrollLeft / imageWidth) + 1
      setCurrentIndex(index)
    }

    container.addEventListener('scroll', handleScroll)
    return () => container.removeEventListener('scroll', handleScroll)
  }, [])

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
    <div className="photoes-card">
      <div className="photoes-image-container" ref={containerRef}>
        {photoUrl.map((url, index) => (
          <img
            key={index}
            src={url.url}
            alt={`${title} ${index + 1}`}
            className="photoes-image"
          />
        ))}
        <div className="photoes-counter">
          {currentIndex} / {photoUrl.length}
        </div>
      </div>
      <button
        className={`like-btn ${liked ? "liked" : "not-liked"}`}
        onClick={handleLike}
      >
        {liked ? <> <img src='/images/like_filled.png' height="20px" /> Liked </> :
          <> <img src='/images/like_border.png' height="20px" /> Like </>}
      </button>
      <h3 className="photoes-title">{title}</h3>
      <p className="photoes-description">{description}</p>
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

export default Photoes
