import {

    createEmployerInternshipService,

    getAllInternshipsService,

    getInternshipByIdService,

    updateInternshipService,

    deleteInternshipService,

    getEmployerInternshipsService

} from "../services/internship.service.js";







// ==================================================
// CREATE EMPLOYER INTERNSHIP
// ==================================================

export const createEmployerInternship = async (req, res) => {

    try {


        const internship =
        await createEmployerInternshipService(

            req.user.id,

            req.body

        );



        return res.status(201).json({

            success: true,

            message: "Internship created successfully",

            data: internship

        });



    } catch (error) {


        return res.status(400).json({

            success: false,

            message: error.message

        });


    }

};









// ==================================================
// GET MY INTERNSHIPS
// ==================================================

// ==================================================
// GET MY INTERNSHIPS
// ==================================================

export const getMyInternships = async (req, res) => {

    try {


        console.log(
            "Employer User ID:",
            req.user.id
        );


        const internships =
        await getEmployerInternshipsService(
            req.user.id
        );



        return res.status(200).json({

            success:true,

            data:internships

        });



    } catch(error){


        console.error(
            "GET MY INTERNSHIPS ERROR:",
            error
        );


        return res.status(500).json({

            success:false,

            message:error.message

        });


    }

};









// ==================================================
// GET ALL INTERNSHIPS
// ==================================================

export const getAllInternships = async (req, res) => {

    try {


        const internships =
        await getAllInternshipsService();



        return res.status(200).json({

            success: true,

            data: internships

        });



    } catch (error) {


        return res.status(500).json({

            success: false,

            message: error.message

        });


    }

};









// ==================================================
// GET INTERNSHIP BY ID
// ==================================================

export const getInternshipById = async (req, res) => {

    try {


        const internship =
        await getInternshipByIdService(

            req.params.id

        );



        if (!internship) {


            return res.status(404).json({

                success: false,

                message: "Internship not found"

            });


        }



        return res.status(200).json({

            success: true,

            data: internship

        });



    } catch (error) {


        return res.status(500).json({

            success: false,

            message: error.message

        });


    }

};









// ==================================================
// UPDATE INTERNSHIP
// ==================================================

export const updateInternship = async (req, res) => {

    try {


        const internship =
        await updateInternshipService(

            req.user.id,

            req.params.id,

            req.body

        );



        return res.status(200).json({

            success: true,

            message: "Internship updated successfully",

            data: internship

        });



    } catch (error) {


        if (error.message === "Unauthorized action") {


            return res.status(403).json({

                success: false,

                message: error.message

            });


        }



        return res.status(400).json({

            success: false,

            message: error.message

        });


    }

};









// ==================================================
// DELETE INTERNSHIP
// ==================================================

export const deleteInternship = async (req, res) => {

    try {


        await deleteInternshipService(

            req.user.id,

            req.params.id

        );



        return res.status(200).json({

            success: true,

            message: "Internship deleted successfully"

        });



    } catch (error) {


        if (error.message === "Unauthorized action") {


            return res.status(403).json({

                success: false,

                message: error.message

            });


        }



        return res.status(400).json({

            success: false,

            message: error.message

        });


    }

};