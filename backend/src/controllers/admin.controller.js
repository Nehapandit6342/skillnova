import { 
    dashboardService,
    getAllStudentsService,
    getStudentByIdService
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


    } catch(error) {


        console.log("STUDENTS ERROR:", error);


        res.status(500).json({

            success:false,

            message:error.message

        });


    }

};




// ================= GET STUDENT BY ID =================


export const getStudentById = async (req, res) => {

    try {


        const student = await getStudentByIdService(
            req.params.id
        );


        if(!student){

            return res.status(404).json({

                success:false,

                message:"Student not found"

            });

        }



        res.status(200).json({

            success:true,

            data:student

        });



    } catch(error) {


        console.log("STUDENT DETAILS ERROR:", error);



        res.status(500).json({

            success:false,

            message:error.message

        });


    }

};