import React, { useState } from "react";
import '../assets/css/UploadPost.css'

const UploadPost = () => {
  const [type, setType] = useState("");
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [contry, setContry] = useState("");
  const [category, setcategory] = useState([]);
  const [photos, setPhotos] = useState([]);
  const [video, setVideo] = useState(null);
  const [storyPhoto, setStoryPhoto] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleTypeChange = (e) => {
    setType(e.target.value);
    setPhotos([]);
    setVideo(null);
    setStoryPhoto(null);
  };

  const handleContryChange = (e) => {
    setContry(e.target.value)
  }

  const handleCategoryChange = (e) => {
    const value = e.target.value;
    const checked = e.target.checked;

    if (checked) {
      setcategory((prev) => [...prev, value]);
    } else {
      setcategory((prev) => prev.filter((item) => item !== value));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const formData = new FormData();
    formData.append("userid", localStorage.getItem("userid"))
    console.log(localStorage.getItem("userid"))
    formData.append("title", title);
    formData.append("description", description);
    formData.append("contry", contry);
    formData.append("type", type);
    formData.append("category", category.join(",")); // key update here

    // Append multiple photos
    photos.forEach((photo) => {
      formData.append("photos", photo);
    });

    // Append video or storyPhoto depending on type
    if (video) {
      formData.append("video", video);
    }

    if (storyPhoto) {
      formData.append("photos", storyPhoto);
    }

    try {
      if (type == "photoes" || type == "story") {
        const response = await fetch("https://cultureatlas-6v1m.onrender.com/post/addPhotosPost", {
          method: "POST",
          body: formData,
        });
        const data = await response.json();
        console.log("Server Response:", data);
        alert(data.message);
      } else if (type == "reel") {
        const response = await fetch("https://cultureatlas-6v1m.onrender.com/post/addReelsPost", {
          method: "POST",
          body: formData,
        });
        const data = await response.json();
        console.log("Server Response:", data);
        alert(data.message);
      }

    } catch (error) {
      console.error("Upload failed:", error);
      alert("Upload failed!");
    } finally {
      setLoading(false);
    }
  };


  return (
    <>{localStorage.getItem("isLoggedIn") === "true" &&
      <div className="UploadPost">
        <div className="form-container">
          <form id="postUpload" onSubmit={handleSubmit}>
            <h2>Upload Your Post</h2>

            <label>Title</label>
            <input
              type="text"
              placeholder="Enter title"
              onChange={(e) => setTitle(e.target.value)} />

            <label>Country</label>
            <select value={contry} onChange={handleContryChange}>
              <option value="">--Select--</option>
              <option value="India">India</option>
              <option value="Japan">Japan</option>
              <option value="France">France</option>
              <option value="Brazil">Brazil</option>
              <option value="Italy">Italy</option>
              <option value="Russia">Russia</option>
            </select>

            <label>Type</label>
            <div className="radio-group">
              <label><input type="radio" className="type" name="type" value="reel" onChange={handleTypeChange} /> Reel</label>
              <label><input type="radio" className="type" name="type" value="photoes" onChange={handleTypeChange} /> Photoes</label>
              <label><input type="radio" className="type" name="type" value="story" onChange={handleTypeChange} /> Story</label>
            </div>

            <label>Category</label>
            <div className="checkbox-group">
              {["Gastronome", "change maker", "adventure", "festival fanatic", "arts enthusiast", "socialite", "family minded", "naturalist"].map((interest, i) => (
                <label key={i}>
                  <input
                    className="interest"
                    type="checkbox"
                    value={interest}
                    onChange={handleCategoryChange}
                    checked={category.includes(interest)}
                  />
                  {interest}
                </label>
              ))}
            </div>

            {type === "photoes" && (
              <>
                <label>Upload Photos</label>
                <input
                  type="file"
                  accept="image/*"
                  multiple
                  onChange={(e) => setPhotos(Array.from(e.target.files))}
                  className="photos"
                />
                {photos.length > 0 && (
                  <div className="photo-preview-grid">
                    {photos.map((photo, index) => (
                      <img
                        key={index}
                        src={URL.createObjectURL(photo)}
                        alt={`preview-${index}`}
                        className="preview-img"
                        height="100px"
                      />
                    ))}
                  </div>
                )}

              </>
            )}


            {type === "reel" && (
              <>
                <label>Upload Video</label>
                <input
                  type="file"
                  accept="video/*"
                  onChange={(e) => setVideo(e.target.files[0])}
                  className="video" />
                {video && (
                  <video
                    controls
                    width="300px"
                    style={{ marginTop: "10px", borderRadius: "8px" }}
                  >
                    <source src={URL.createObjectURL(video)} type={video.type} />
                    Your browser does not support the video tag.
                  </video>
                )}
              </>
            )}

            {type === "story" && (
              <>
                <label>Upload Story Photo</label>
                <input
                  type="file"
                  accept="image/*"
                  onChange={(e) => setStoryPhoto(e.target.files[0])}
                  className="storyPhoto" />
                {storyPhoto && (
                  <img
                    src={URL.createObjectURL(storyPhoto)}
                    alt="story-preview"
                    style={{ marginTop: "10px", width: "200px", borderRadius: "10px" }}
                  />
                )}
              </>
            )}

            {type == "story" ? <label>Tell your Story</label> : <label>Description</label>}

            <textarea
              placeholder="Enter description..."
              rows="4"
              onChange={(e) => setDescription(e.target.value)} />

            <button type="submit" className="btn-upload" disabled={loading}>
              {loading ? "Uploading..." : "Submit"}
            </button>
          </form>
        </div>


        {loading && (
          <div className="loader-overlay">
            <div className="loader"></div>
            <p>Uploading...</p>
          </div>
        )}

      </div>
    }</>
  );
};

export default UploadPost;
