import {
    dashboardService,
    getAllStudentsService,
    getStudentByIdService,
    updateStudentService,
    deleteStudentService,
    createStudentService
} from "../services/admin.service.js";
// ================= DASHBOARD =================

export const getDashboard = async (req, res) => {

    try {

        const data = await dashboardService();

        res.status(200).json({

            success: true,

            data

        });

    } catch (error) {

        console.log("DASHBOARD ERROR:", error);

        res.status(500).json({

            success: false,

            message: error.message

        });

    }

};




// ================= GET ALL STUDENTS =================

export const getStudents = async (req, res) => {

    try {

        const students = await getAllStudentsService();

        res.status(200).json({

            success: true,

            data: students

        });

    } catch (error) {

        console.log("STUDENTS ERROR:", error);

        res.status(500).json({

            success: false,

            message: error.message

        });

    }

};




// ================= GET STUDENT BY ID =================

export const getStudentById = async (req, res) => {

    try {

        const student = await getStudentByIdService(
            req.params.id
        );

        if (!student) {

            return res.status(404).json({

                success: false,

                message: "Student not found"

            });

        }

        res.status(200).json({

            success: true,

            data: student

        });

    } catch (error) {

        console.log("STUDENT DETAILS ERROR:", error);

        res.status(500).json({

            success: false,

            message: error.message

        });

    }

};




// ================= UPDATE STUDENT =================

export const updateStudent = async (req, res) => {

    try {

        const student = await updateStudentService(

            req.params.id,

            req.body

        );

        res.status(200).json({

            success: true,

            message: "Student updated successfully",

            data: student

        });

    } catch (error) {

        console.log("UPDATE STUDENT ERROR:", error);

        res.status(500).json({

            success: false,

            message: error.message

        });

    }

};
// ================= DELETE STUDENT =================

export const deleteStudent = async (req, res) => {

    try {

        await deleteStudentService(req.params.id);

        res.status(200).json({

            success: true,

            message: "Student deleted successfully"

        });

    } catch (error) {

        console.log("DELETE STUDENT ERROR:", error);

        res.status(500).json({

            success: false,

            message: error.message

        });

    }

};
// ================= CREATE STUDENT =================

export const createStudent = async (req, res) => {

    try {

        const student = await createStudentService(req.body);

        res.status(201).json({

            success: true,

            message: "Student added successfully",

            data: student

        });

    } catch (error) {

        console.log("CREATE STUDENT ERROR:", error);

        res.status(500).json({

            success: false,

            message: error.message

        });

    }

};
