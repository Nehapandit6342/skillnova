import { Readable } from "stream";
import cloudinary from "../config/cloudinary.js";

export const uploadResumeToCloudinary = (file) => {
  return new Promise((resolve, reject) => {
    const stream = cloudinary.uploader.upload_stream(
      {
        folder: "skillnova/resumes",
        resource_type: "raw", // PDFs, DOCX, etc.
      },
      (error, result) => {
        if (error) {
          return reject(error);
        }

        resolve({
          url: result.secure_url,
          publicId: result.public_id,
        });
      },
    );

    Readable.from(file.buffer).pipe(stream);
  });
};
