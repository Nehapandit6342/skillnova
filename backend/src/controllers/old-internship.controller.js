import {

    getAllInternshipsService,
    getInternshipByIdService,
    createInternshipService,
    updateInternshipService,
    deleteInternshipService

} from "../services/internship.service.js";



// ================= GET ALL INTERNSHIPS =================

export const getAllInternships = async (req, res) => {

    try {

        const internships = await getAllInternshipsService();

        res.status(200).json({

            success: true,

            data: internships

        });

    } catch (error) {

        console.log("GET INTERNSHIPS ERROR:", error);

        res.status(500).json({

            success: false,

            message: error.message

        });

    }

};



// ================= GET INTERNSHIP BY ID =================

export const getInternshipById = async (req, res) => {

    try {

        const internship = await getInternshipByIdService(
            req.params.id
        );

        if (!internship) {

            return res.status(404).json({

                success: false,

                message: "Internship not found"

            });

        }

        res.status(200).json({

            success: true,

            data: internship

        });

    } catch (error) {

        console.log("GET INTERNSHIP ERROR:", error);

        res.status(500).json({

            success: false,

            message: error.message

        });

    }

};



// ================= CREATE INTERNSHIP =================

export const createInternship = async (req, res) => {

    try {

        const internship = await createInternshipService(req.body);

        res.status(201).json({

            success: true,

            message: "Internship created successfully",

            data: internship

        });

    } catch (error) {

        console.log("CREATE INTERNSHIP ERROR:", error);

        res.status(500).json({

            success: false,

            message: error.message

        });

    }

};



// ================= UPDATE INTERNSHIP =================

export const updateInternship = async (req, res) => {

    try {

        const internship = await updateInternshipService(

            req.params.id,

            req.body

        );

        res.status(200).json({

            success: true,

            message: "Internship updated successfully",

            data: internship

        });

    } catch (error) {

        console.log("UPDATE INTERNSHIP ERROR:", error);

        res.status(500).json({

            success: false,

            message: error.message

        });

    }

};



// ================= DELETE INTERNSHIP =================

export const deleteInternship = async (req, res) => {

    try {

        await deleteInternshipService(req.params.id);

        res.status(200).json({

            success: true,

            message: "Internship deleted successfully"

        });

    } catch (error) {

        console.log("DELETE INTERNSHIP ERROR:", error);

        res.status(500).json({

            success: false,

            message: error.message

        });

    }

};