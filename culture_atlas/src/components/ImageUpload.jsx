import React, { useState } from 'react';

function ImageUpload() {
  const [file, setFile] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('image', file);  // 'image' matches multer setup

    const res = await fetch('http://localhost:3001/upload', {
      method: 'POST',
      body: formData,
    });

    const data = await res.json();
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="file"
        accept="image/*"
        onChange={(e) => setFile(e.target.files[0])}
      />
      <button type="submit">Upload Image</button>
    </form>
  );
}

export default ImageUpload;
