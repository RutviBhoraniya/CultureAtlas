import React, { useEffect, useState } from "react";
import "../assets/css/Posts.css";
import Story from "../components/Story";
import Header from "../components/Header";
import Reel from "../components/Reel";
import Photoes from "../components/Photoes";

const AprovePost = () => {

    const [postData, setPostData] = useState([])


    const fetchPosts = () => {
        fetch(
            `https://cultureatlas-6v1m.onrender.com/post`
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

    const handleApprove = (postId) => {
        // filter out the approved post
        fetchPosts();
    };

    return (
        <>{localStorage.getItem("role") === "admin" &&
            <div className='AprovePost'>
                <div className="posts">
                    <Header />
                    <div className="posts-container">
                        {
                            postData.map((post, index) => {
                                if (!(post.aproved)) {
                                    if (post.type == "photoes")
                                        return <Photoes postId={post.postId} title={post.title} description={post.description} photoUrl={post.photo} key={index} role="admin" onApprove={handleApprove} />
                                    else if (post.type == "story")
                                        return <Story postId={post.postId} title={post.title} description={post.description} photoUrl={post.photo[0].url} key={index} role="admin" onApprove={handleApprove} />
                                    else if (post.type == "reel")
                                        return <Reel postId={post.postId} title={post.title} description={post.description} videoUrl={post.video?.url} key={index} role="admin" onApprove={handleApprove} />
                                }
                            })
                        }
                    </div>
                </div>
            </div>
        }</>
    )
}

export default AprovePost