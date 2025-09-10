import React, { useEffect, useState } from "react";
import "../assets/css/Posts.css";
import { useLocation } from "react-router-dom";
import Story from "../components/Story";
import Header from "../components/Header";
import Reel from "../components/Reel";
import Photoes from "../components/Photoes";

const Posts = () => {
  const [postData, setPostData] = useState([])

  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const category = params.get("category");
  const contry = params.get("contry");

  const fetchPosts = () => {
    fetch(
      `https://cultureatlas-6v1m.onrender.com/post?category=${encodeURIComponent(category)}&contry=${encodeURIComponent(contry)}`
    ).then((rawdata) => {
      return rawdata.json()
    }).then((data) => {
      console.log(data)
      setPostData(data);
    }).catch((err) => {
      console.log(err)
    })
  }

  useEffect(() => {
    fetchPosts();
  }, [])

  return (
    <div className="posts">
      <Header />
      
      <div className="posts-container">
        {
          postData.map((post, index) => {
            if (post.aproved) {
              if (post.type == "photoes")
                return <Photoes postId={post.postId} title={post.title} description={post.description} photoUrl={post.photo} key={index} role="user" />
              else if (post.type == "story")
                return <Story postId={post.postId} title={post.title} description={post.description} photoUrl={post.photo[0].url} key={index} role="user" />
              else if (post.type == "reel")
                return <Reel postId={post.postId} title={post.title} description={post.description} videoUrl={post.video?.url} key={index} role="user" />
            }
          })
        }
      </div>
    </div>
  );
};

export default Posts;
