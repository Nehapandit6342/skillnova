import { Readable } from "stream";
import cloudinary from "../config/cloudinary.js";


// =======================================
// Upload Resume (PDF/DOCX) to Cloudinary
// =======================================

export const uploadResumeToCloudinary = (file) => {

    return new Promise((resolve, reject) => {


        const stream = cloudinary.uploader.upload_stream(

            {
                folder: "skillnova/resumes",

                resource_type: "raw",

            },


            (error, result) => {


                if(error){

                    return reject(error);

                }


                resolve({

                    url: result.secure_url,

                    publicId: result.public_id,

                });


            }

        );



        Readable
            .from(file.buffer)
            .pipe(stream);



    });

};








// =======================================
// Upload Image (Profile / Logo)
// =======================================

export const uploadImage = (file) => {


    return new Promise((resolve, reject)=>{


        const stream = cloudinary.uploader.upload_stream(


            {

                folder:"skillnova/images",

                resource_type:"image",

            },


            (error,result)=>{


                if(error){

                    return reject(error);

                }



                resolve({

                    url: result.secure_url,

                    publicId: result.public_id,

                });


            }


        );



        Readable
        .from(file.buffer)
        .pipe(stream);



    });


};