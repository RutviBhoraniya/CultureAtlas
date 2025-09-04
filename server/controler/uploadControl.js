



const uploadControls = {
  imageUpload: async (req, res) => {
    try {
      const uploadStream = cloudinary.uploader.upload_stream(
        { folder: "uploads" },
        (error, result) => {
          if (error) return res.status(500).json({ error });

          return res.status(200).json({
            publicId: result.public_id,
            url: result.secure_url,
          });
        }
      );

      streamifier.createReadStream(req.file.buffer).pipe(uploadStream);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  },
};
module.exports = uploadControls;