import {
  createInternshipService,
  getAllInternshipsService,
  getInternshipByIdService,
  updateInternshipService,
  deleteInternshipService,
  createEmployerInternshipService,
  getEmployerInternshipsService,
  getLatestInternshipsService,
} from "../services/internship.service.js";

// ==================================================
// CREATE INTERNSHIP
// ==================================================

export const createInternship = async (req, res) => {
  try {
    const employer = await prisma.employerProfile.findUnique({
      where: {
        userId: req.user.id,
      },
    });

    if (!employer) {
      return res.status(404).json({
        success: false,

        message: "Employer profile not found",
      });
    }

    const internship = await createInternshipService({
      ...req.body,

      employerId: employer.id,
    });

    res.status(201).json({
      success: true,

      message: "Internship created successfully",

      data: internship,
    });
  } catch (error) {
    res.status(500).json({
      success: false,

      message: error.message,
    });
  }
};

// ==================================================
// CREATE EMPLOYER INTERNSHIP
// ==================================================

export const createEmployerInternship = async (req, res) => {
  try {
    const internship = await createEmployerInternshipService(
      req.user.id,

      req.body,
    );

        return res.status(201).json({


            success:true,
    res.status(201).json({
      success: true,


            message:
            "Internship posted successfully",

      message: "Internship posted successfully",

            data:internship



        });



    }catch(error){


        console.error(
            "CREATE INTERNSHIP ERROR:",
            error
        );



        return res.status(400).json({


            success:false,


            message:error.message



        });



    }


};






      data: internship,
    });
  } catch (error) {
    res.status(500).json({
      success: false,

      message: error.message,
    });
  }
};

// ==================================================
// GET EMPLOYER INTERNSHIPS
// ==================================================

export const getMyInternships = async(req,res)=>{


    try{
// ==================================================
// GET MY INTERNSHIPS
// ==================================================

export const getMyInternships = async (req, res) => {
  try {
    console.log("Employer User ID:", req.user.id);


        const internships =
        await getEmployerInternshipsService(

            req.user.id

        );


    const internships = await getEmployerInternshipsService(req.user.id);

        return res.status(200).json({


            success:true,


            data:internships || []



        });



    }catch(error){


        console.error(
            "GET MY INTERNSHIPS ERROR:",
            error
        );

    res.status(200).json({
      success: true,

      data: internships,
    });
  } catch (error) {
    console.error("GET MY INTERNSHIPS ERROR:", error);

    return res.status(500).json({
      success: false,

      message: error.message,
    });
  }
};

// ==================================================
// GET ALL PUBLIC INTERNSHIPS
// ==================================================

export const getAllInternships = async (req, res) => {
  try {
    const internships = await getAllInternshipsService();

        return res.status(200).json({


            success:true,


            data:internships



        });



    }catch(error){


        return res.status(500).json({

    res.status(200).json({
      success: true,

      data: internships,
    });
  } catch (error) {
    res.status(500).json({
      success: false,

            success:false,


            message:error.message



        });


    }


      message: error.message,
    });
  }
};









// ==================================================
// GET SINGLE INTERNSHIP
// ==================================================

export const getInternshipById = async(req,res)=>{


    try{


        const internship =
        await getInternshipByIdService(

            req.params.id

        );



        if(!internship){


            return res.status(404).json({

export const getInternshipById = async (req, res) => {
  try {
    const internship = await getInternshipByIdService(req.params.id);

    if (!internship) {
      return res.status(404).json({
        success: false,

                success:false,


                message:
                "Internship not found"



            });


        }



        message: "Internship not found",
      });
    }

        return res.status(200).json({


            success:true,


            data:internship



        });



    }catch(error){


        return res.status(400).json({


            success:false,


            message:error.message



        });


    }


};








    res.status(200).json({
      success: true,

      data: internship,
    });
  } catch (error) {
    res.status(500).json({
      success: false,

      message: error.message,
    });
  }
};

// ==================================================
// UPDATE INTERNSHIP
// ==================================================

export const updateInternship = async(req,res)=>{


    try{


        const internship =
        await updateInternshipService(

            req.user.id,
export const updateInternship = async (req, res) => {
  try {
    const internship = await updateInternshipService(
      req.user.id,

            req.params.id,

            req.body

        );


      req.params.id,

      req.body,
    );

        return res.status(200).json({


            success:true,
    res.status(200).json({
      success: true,


            message:
            "Internship updated successfully",

      message: "Internship updated successfully",

            data:internship



        });



    }catch(error){


        return res.status(400).json({


            success:false,


            message:error.message



        });



    }


};








      data: internship,
    });
  } catch (error) {
    res.status(500).json({
      success: false,

      message: error.message,
    });
  }
};

// ==================================================
// DELETE INTERNSHIP
// ==================================================

export const deleteInternship = async(req,res)=>{


    try{


        await deleteInternshipService(

            req.user.id,

            req.params.id

        );


export const deleteInternship = async (req, res) => {
  try {
    await deleteInternshipService(
      req.user.id,

      req.params.id,
    );

        return res.status(200).json({


            success:true,
    res.status(200).json({
      success: true,


            message:
            "Internship deleted successfully"



        });



    }catch(error){


        return res.status(400).json({

      message: "Internship deleted successfully",
    });
  } catch (error) {
    res.status(500).json({
      success: false,

            success:false,


            message:error.message



        });



    }


      message: error.message,
    });
  }
};









// ==================================================
// LATEST INTERNSHIPS
// ==================================================

export const getLatestInternships = async(req,res)=>{


    try{


        const internships =
        await getLatestInternshipsService();


export const getLatestInternships = async (req, res) => {
  try {
    const internships = await getLatestInternshipsService();

        return res.status(200).json({


            success:true,

    return res.status(200).json({
      success: true,

            data:internships



        });



    }catch(error){


        return res.status(500).json({

      data: internships,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,

            success:false,


            message:error.message



        });



    }


      message: error.message,
    });
  }
};
