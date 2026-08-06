<<<<<<< HEAD
import {

    getEmployerProfile,

    updateEmployerProfile,

    getAllEmployers,

    getFeaturedEmployers,

    getEmployerDashboardStats,

    getApplicationTrend,

    getApplicationStatus


} from "../services/employer.service.js";






=======
import prisma from "../config/prisma.js";

import {
  getEmployerProfile,
  updateEmployerProfile,
  getAllEmployers,
  getFeaturedEmployers,
  getEmployerDashboardStats,
  updateEmployerStatus,
} from "../services/employer.service.js";
>>>>>>> 0bde86d (Add admin settings and profile management)

// =================================================
// GET LOGGED-IN EMPLOYER PROFILE
// =================================================

<<<<<<< HEAD
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









=======
export const getProfile = async (req, res) => {
  try {
    const profile = await getEmployerProfile(req.user.id);

    return res.status(200).json({
      success: true,
      data: profile,
    });
  } catch (error) {
    console.log(error);

    return res.status(error.statusCode || 500).json({
      success: false,
      message: error.message || "Failed to fetch employer profile",
    });
  }
};

>>>>>>> 0bde86d (Add admin settings and profile management)
// =================================================
// UPDATE EMPLOYER PROFILE
// =================================================

<<<<<<< HEAD
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









=======
export const updateProfile = async (req, res) => {
  try {
    const updatedProfile = await updateEmployerProfile(
      req.user.id,
      req.body
    );

    return res.status(200).json({
      success: true,
      message: "Profile updated successfully",
      data: updatedProfile,
    });
  } catch (error) {
    console.log(error);

    return res.status(error.statusCode || 500).json({
      success: false,
      message: error.message || "Failed to update profile",
    });
  }
};

>>>>>>> 0bde86d (Add admin settings and profile management)
// =================================================
// GET ALL EMPLOYERS (ADMIN)
// =================================================

<<<<<<< HEAD
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
=======
export const getEmployers = async (req, res) => {
  try {
    const employers = await getAllEmployers();

    return res.status(200).json({
      success: true,
      data: employers,
    });
  } catch (error) {
    console.log(error);

    return res.status(error.statusCode || 500).json({
      success: false,
      message: error.message || "Failed to fetch employers",
    });
  }
};

// =================================================
// EMPLOYER DASHBOARD STATS
// =================================================
>>>>>>> 0bde86d (Add admin settings and profile management)

export const getDashboardStats = async (req, res) => {
  try {
    const stats = await getEmployerDashboardStats(req.user.id);

<<<<<<< HEAD
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









=======
    return res.status(200).json({
      success: true,
      data: stats,
    });
  } catch (error) {
    console.log(error);

    return res.status(error.statusCode || 500).json({
      success: false,
      message: error.message,
    });
  }
};

>>>>>>> 0bde86d (Add admin settings and profile management)
// =================================================
// APPLICATION STATUS CHART
// =================================================

<<<<<<< HEAD
export const getApplicationStatusChart = async(req,res)=>{


    try{


        const data =
        await getApplicationStatus(

            req.user.id

        );

=======
export const getFeaturedCompanies = async (req, res) => {
  try {
    const companies = await getFeaturedEmployers();

    return res.status(200).json({
      success: true,
      data: companies,
    });
  } catch (error) {
    console.log(error);

    return res.status(500).json({
      success: false,
      message: error.message || "Failed to fetch featured companies",
    });
  }
};
>>>>>>> 0bde86d (Add admin settings and profile management)

// =================================================
// UPDATE EMPLOYER STATUS (ADMIN)
// =================================================

export const changeEmployerStatus = async (req, res) => {
  try {
    const { id } = req.params;
    const { status } = req.body;

<<<<<<< HEAD
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


=======
    const employer = await updateEmployerStatus(id, status);

    await prisma.notification.create({
      data: {
        title: "Employer Status Updated",
        message: `${employer.companyName} is now ${status}`,
        type: "EMPLOYER",
      },
    });

    return res.status(200).json({
      success: true,
      message: "Employer status updated successfully",
      data: employer,
    });
  } catch (error) {
    console.log(error);

    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
>>>>>>> 0bde86d (Add admin settings and profile management)
};