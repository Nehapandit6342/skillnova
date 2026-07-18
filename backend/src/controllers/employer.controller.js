import {
    getEmployerProfile,
    updateEmployerProfile
} from "../services/employer.service.js";




// GET PROFILE

export const getProfile = async(req,res)=>{


    try{


        const profile =
        await getEmployerProfile(
            req.user.id
        );


        res.json({

            success:true,

            data:profile

        });



    }catch(error){


        res.status(
            error.statusCode || 500
        )
        .json({

            success:false,

            message:
            error.message

        });


    }


};





// UPDATE PROFILE


export const updateProfile = async(req,res)=>{


    try{


        const updatedProfile =
        await updateEmployerProfile(

            req.user.id,

            req.body

        );



        res.json({

            success:true,

            message:
            "Profile updated successfully",

            data:updatedProfile


        });



    }catch(error){


        res.status(
            error.statusCode || 500
        )
        .json({

            success:false,

            message:error.message

        });


    }


};