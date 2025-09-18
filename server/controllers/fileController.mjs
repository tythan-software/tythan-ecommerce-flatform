// Avatar upload function
const uploadAvatar = async (req, res) => {
  try {
    if (!req.file) {
      return res.json({ success: false, message: "No file uploaded" });
    }

    // Upload image to Cloudinary in the tythan/users folder
    const uploadResult = await cloudinary.uploader.upload(req.file.path, {
      folder: "tythan/users",
      resource_type: "image",
      transformation: [
        { width: 400, height: 400, crop: "fill", gravity: "face" },
        { quality: "auto", fetch_format: "auto" },
      ],
    });

    // Clean up temporary file
    cleanupTempFile(req.file.path);

    res.json({
      success: true,
      message: "Avatar uploaded successfully",
      avatarUrl: uploadResult.secure_url,
    });
  } catch (error) {
    console.log("Avatar upload error", error);

    // Clean up temporary file even on error
    if (req.file?.path) {
      cleanupTempFile(req.file.path);
    }

    res.json({ success: false, message: error.message });
  }
};

export { uploadAvatar };