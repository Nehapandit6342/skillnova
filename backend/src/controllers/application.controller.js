import {

    createApplicationService,
    getStudentApplicationsService,
    getEmployerApplicationsService,
    updateApplicationStatusService,
    getAllApplicationsService

} from "../services/application.service.js";




// =================================
// STUDENT APPLY
// =================================

export const createApplication = async (req, res) => {

    try {

        const application =
            await createApplicationService(
                req.user.id,
                req.body
            );


        res.status(201).json({

            success: true,

            message: "Application submitted successfully",

            data: application

        });


    } catch (error) {


        res.status(400).json({

            success: false,

            message: error.message

        });

    }

};





// =================================
// STUDENT APPLICATIONS
// =================================

export const getStudentApplications = async (req, res) => {

    try {


        const applications =
            await getStudentApplicationsService(
                req.user.id
            );


        res.status(200).json({

            success: true,

            data: applications

        });


    } catch (error) {


        res.status(500).json({

            success:false,

            message:error.message

        });

    }

};





// =================================
// EMPLOYER APPLICATIONS
// =================================

export const getEmployerApplications = async (req,res)=>{


    try{


        const applications =
            await getEmployerApplicationsService(
                req.user.id
            );


        res.status(200).json({

            success:true,

            data:applications

        });


    }catch(error){


        res.status(500).json({

            success:false,

            message:error.message

        });

    }

};





// =================================
// UPDATE STATUS
// =================================

export const updateApplicationStatus = async(req,res)=>{


    try{


        const {status}=req.body;


        const application =
            await updateApplicationStatusService(
                req.params.id,
                status
            );


        res.status(200).json({

            success:true,

            message:"Status updated",

            data:application

        });



    }catch(error){


        res.status(500).json({

            success:false,

            message:error.message

        });

    }

};





// =================================
// ADMIN ALL APPLICATIONS
// =================================

export const getAllApplications = async(req,res)=>{


    try{


        const applications =
            await getAllApplicationsService();



        res.status(200).json({

            success:true,

            data:applications

        });



    }catch(error){


        res.status(500).json({

            success:false,

            message:error.message

        });


    }


};