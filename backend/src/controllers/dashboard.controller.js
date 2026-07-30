import {
    getEmployerDashboardStats
} from "../services/dashboard.service.js";


export const getDashboardStats = async(req,res)=>{

    try{


        const stats =
        await getEmployerDashboardStats(
            req.user.id
        );


        res.json({

            success:true,

            data:stats

        });


    }catch(error){


        res.status(500).json({

            success:false,

            message:error.message

        });


    }

};