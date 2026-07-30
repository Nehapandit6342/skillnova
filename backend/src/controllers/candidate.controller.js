import {
    getEmployerCandidatesService
}
from "../services/candidate.service.js";




export const getEmployerCandidates =
async(req,res)=>{


    try{


        const candidates =
        await getEmployerCandidatesService(
            req.user.id
        );



        res.json({

            success:true,

            data:candidates

        });



    }catch(error){


        res.status(500).json({

            success:false,

            message:error.message

        });


    }


};