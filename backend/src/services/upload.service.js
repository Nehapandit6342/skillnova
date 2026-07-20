import cloudinary from "../config/cloudinary.js";
import streamifier from "streamifier";

export const uploadImage = (file, folder = "skillnova") => {
  return new Promise((resolve, reject) => {
    if (!file) {
      return resolve(null);
    }

    const stream = cloudinary.uploader.upload_stream(
      {
        folder,
      },
      (error, result) => {
        if (error) return reject(error);

        resolve(result.secure_url);
      },
    );

    streamifier.createReadStream(file.buffer).pipe(stream);
  });
};
