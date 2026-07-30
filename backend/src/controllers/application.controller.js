import {

    createApplicationService,

    getStudentApplicationsService,

    getEmployerApplicationsService,

    updateApplicationStatusService

} from "../services/application.service.js";




// =================================
// STUDENT APPLY INTERNSHIP
// =================================

export const createApplication = async(req,res)=>{

try{

    console.log("USER:",req.user);

    console.log("BODY:",req.body);


    const application =
    await createApplicationService(
        req.user.id,
        req.body
    );


    res.status(201).json({
        success:true,
        message:"Application submitted successfully",
        data:application
    });


}catch(error){

    console.log(error);

    res.status(400).json({
        success:false,
        message:error.message
    });

}

};









// =================================
// STUDENT APPLICATION LIST
// =================================


export const getStudentApplications =
async(req,res)=>{


    try{


        const applications =
        await getStudentApplicationsService(

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
// EMPLOYER APPLICATION LIST
// =================================


export const getEmployerApplications =
async(req,res)=>{


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
// UPDATE APPLICATION STATUS
// ACCEPT / REJECT
// =================================


export const updateApplicationStatus =
async(req,res)=>{


    try{


        const {
            status
        } = req.body;



        if(
            !["ACCEPTED","REJECTED"].includes(status)
        ){

            return res.status(400).json({

                success:false,

                message:
                "Invalid application status"

            });

        }





        const application =
        await updateApplicationStatusService(

            req.params.id,

            status

        );



        res.status(200).json({

            success:true,

            message:
            "Application status updated successfully",

            data:application

        });



    }catch(error){


        res.status(500).json({

            success:false,

            message:error.message

        });


    }


};