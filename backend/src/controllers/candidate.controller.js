import {
    getEmployerCandidatesService,
    getCandidateDetailsService
}
from "../services/candidate.service.js";




// =====================================
// GET EMPLOYER ACCEPTED CANDIDATES
// =====================================

export const getEmployerCandidates =
async(req,res)=>{


    try{


        const candidates =
        await getEmployerCandidatesService(
            req.user.id
        );


        res.status(200).json({

            success:true,

            data:candidates

        });



    }catch(error){


        console.error(
            "GET EMPLOYER CANDIDATES ERROR:",
            error
        );


        res.status(500).json({

            success:false,

            message:error.message

        });


    }


};






// =====================================
// GET SINGLE CANDIDATE DETAILS
// =====================================

export const getCandidateDetails =
async(req,res)=>{


    try{


        const candidate =
        await getCandidateDetailsService(

            req.user.id,

            req.params.id

        );



        res.status(200).json({

            success:true,

            data:candidate

        });



    }catch(error){


        console.error(
            "GET CANDIDATE DETAILS ERROR:",
            error
        );


        res.status(404).json({

            success:false,

            message:error.message

        });


    }


};