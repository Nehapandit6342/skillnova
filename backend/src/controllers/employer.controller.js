import {

    getEmployerProfile,

    updateEmployerProfile,

    getAllEmployers,

    getFeaturedEmployers,

    getEmployerDashboardStats,

    getApplicationTrend,

    getApplicationStatus


} from "../services/employer.service.js";







// =================================================
// GET LOGGED-IN EMPLOYER PROFILE
// =================================================

export const getProfile = async(req,res)=>{


    try{


        const profile =
        await getEmployerProfile(
            req.user.id
        );



        return res.status(200).json({

            success:true,

            data:profile

        });



    }
    catch(error){


        return res.status(
            error.statusCode || 500
        ).json({

            success:false,

            message:
            error.message ||
            "Failed to fetch employer profile"

        });


    }


};









// =================================================
// UPDATE EMPLOYER PROFILE
// =================================================

export const updateProfile = async(req,res)=>{


    try{


        const updatedProfile =
        await updateEmployerProfile(

            req.user.id,

            req.body

        );



        return res.status(200).json({

            success:true,

            message:
            "Profile updated successfully",

            data:updatedProfile

        });



    }
    catch(error){


        return res.status(
            error.statusCode || 500
        ).json({

            success:false,

            message:
            error.message ||
            "Failed to update profile"

        });


    }


};









// =================================================
// GET ALL EMPLOYERS (ADMIN)
// =================================================

export const getEmployers = async(req,res)=>{


    try{


        const employers =
        await getAllEmployers();



        return res.status(200).json({

            success:true,

            data:employers

        });



    }
    catch(error){


        return res.status(
            error.statusCode || 500
        ).json({

            success:false,

            message:
            error.message ||
            "Failed to fetch employers"

        });



    }


};









// =================================================
// EMPLOYER DASHBOARD STATS
// =================================================

export const getDashboardStats = async(req,res)=>{


    try{


        const stats =
        await getEmployerDashboardStats(

            req.user.id

        );



        return res.status(200).json({

            success:true,

            data:stats

        });



    }
    catch(error){


        return res.status(
            error.statusCode || 500
        ).json({

            success:false,

            message:error.message

        });



    }


};









// =================================================
// APPLICATION TREND CHART
// =================================================

export const getApplicationTrendChart = async(req,res)=>{


    try{


        const data =
        await getApplicationTrend(

            req.user.id

        );



        return res.status(200).json({

            success:true,

            data

        });



    }
    catch(error){


        return res.status(
            error.statusCode || 500
        ).json({

            success:false,

            message:error.message

        });


    }


};









// =================================================
// APPLICATION STATUS CHART
// =================================================

export const getApplicationStatusChart = async(req,res)=>{


    try{


        const data =
        await getApplicationStatus(

            req.user.id

        );



        return res.status(200).json({

            success:true,

            data

        });



    }
    catch(error){


        return res.status(
            error.statusCode || 500
        ).json({

            success:false,

            message:error.message

        });


    }


};











// =================================================
// GET FEATURED EMPLOYERS (PUBLIC)
// =================================================

export const getFeaturedCompanies = async(req,res)=>{


    try{


        const companies =
        await getFeaturedEmployers();



        return res.status(200).json({

            success:true,

            data:companies

        });



    }
    catch(error){


        return res.status(500).json({

            success:false,

            message:
            error.message ||
            "Failed to fetch featured companies"

        });



    }


};