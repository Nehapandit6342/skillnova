import {
  createApplicationService,
  getStudentApplicationsService,
  getEmployerApplicationsService,
  updateApplicationStatusService,
  getAllApplicationsService,
} from "../services/application.service.js";

import { uploadResumeToCloudinary } from "../services/upload.service.js";




// =================================
// STUDENT APPLY INTERNSHIP
// =================================

export const createApplication = async (req, res) => {

    try {


        console.log("BODY:", req.body);

        console.log("FILE:", req.file);



        let resumeUrl = null;



        // ==========================
        // UPLOAD RESUME CLOUDINARY
        // ==========================

        if(req.file){

            const uploadedResume =
                await uploadResumeToCloudinary(req.file);


            resumeUrl = uploadedResume.url;

        }







        const applicationData = {


            ...req.body,


            resume: resumeUrl



        };







        const application =

        await createApplicationService(

            req.user.id,

            applicationData

        );








        return res.status(201).json({

            success:true,

            message:
            "Application submitted successfully",

            data:application


        });





    }
    catch(error){


        console.error(error);


        return res.status(400).json({

            success:false,

            message:error.message

        });


    }

};









// =================================
// GET STUDENT APPLICATIONS
// =================================

export const getStudentApplications = async(
    req,
    res
)=>{


    try{


        const applications =

        await getStudentApplicationsService(

            req.user.id

        );



        return res.status(200).json({

            success:true,

            data:applications

        });



    }
    catch(error){


        return res.status(500).json({

            success:false,

            message:error.message

        });


    }


};









// =================================
// GET EMPLOYER APPLICATIONS
// =================================

export const getEmployerApplications = async(
    req,
    res
)=>{


    try{


        const applications =

        await getEmployerApplicationsService(

            req.user.id

        );



        return res.status(200).json({

            success:true,

            data:applications

        });



    }
    catch(error){


        return res.status(500).json({

            success:false,

            message:error.message

        });


    }


};









// =================================
// UPDATE APPLICATION STATUS
// =================================

// =================================
// UPDATE APPLICATION STATUS
// =================================

export const updateApplicationStatus = async(
    req,
    res
)=>{


    try{


        const {
            status
        } = req.body;




        const allowedStatus = [

            "PENDING",

            "REVIEWING",

            "ACCEPTED",

            "REJECTED"

        ];





        if(!allowedStatus.includes(status)){


            return res.status(400).json({

                success:false,

                message:
                "Invalid application status"

            });


        }





        const application =

        await updateApplicationStatusService(

            req.user.id,

            req.params.id,

            status

        );






        return res.status(200).json({

            success:true,

            message:
            "Application status updated successfully",

            data:application


        });




    }
    catch(error){


        return res.status(500).json({

            success:false,

            message:error.message

        });


    }


};












// =================================
// ADMIN GET ALL APPLICATIONS
// =================================

export const getAllApplications = async(
    req,
    res
)=>{


    try{


        const applications =

        await getAllApplicationsService();




        return res.status(200).json({

            success:true,

            data:applications

        });



    }
    catch(error){


        return res.status(500).json({

            success:false,

            message:error.message

        });


    }


};