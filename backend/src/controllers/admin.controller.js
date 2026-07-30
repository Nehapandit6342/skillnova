import {
    dashboardService,

    getAllStudentsService,
    getStudentByIdService,
    createStudentService,
    updateStudentService,
    deleteStudentService,

    getAllEmployersService,
    getEmployerByIdService,
    updateEmployerService,
    deleteEmployerService,

    getAllInternshipsService,
    getInternshipByIdService,
    createInternshipService,
    updateInternshipService,
    deleteInternshipService,

    getAllApplicationsService,
    updateApplicationService,
    deleteApplicationService,
    getAdminSettingsService,
    updateAdminSettingsService


} from "../services/admin.service.js";



// ================= DASHBOARD =================

export const getDashboard = async (req,res)=>{

    try{

        const data = await dashboardService();

        res.status(200).json({
            success:true,
            data
        });


    }catch(error){

        console.log("DASHBOARD ERROR:",error);

        res.status(500).json({
            success:false,
            message:error.message
        });

    }

};
// ================= DASHBOARD CHARTS =================

export const getDashboardCharts = async (req,res)=>{

    try{

        const data = await dashboardService();


        res.status(200).json({

            success:true,

            analytics:{
                students:data.totalStudents,
                employers:data.totalEmployers,
                internships:data.totalInternships
            },


            applications:{
                applied:data.totalApplications || 0,
                shortlisted:data.shortlistedApplications || 0,
                accepted:data.acceptedApplications || 0,
                rejected:data.rejectedApplications || 0
            }

        });


    }catch(error){

        console.log(
            "DASHBOARD CHART ERROR:",
            error
        );


        res.status(500).json({

            success:false,

            message:error.message

        });

    }

};




// ================= STUDENTS =================


// GET ALL STUDENTS

export const getStudents = async(req,res)=>{

    try{

        const students = await getAllStudentsService();


        res.status(200).json({
            success:true,
            data:students
        });


    }catch(error){

        console.log("GET STUDENTS ERROR:",error);

        res.status(500).json({
            success:false,
            message:error.message
        });

    }

};



// GET STUDENT BY ID

export const getStudentById = async(req,res)=>{

    try{

        const student =
        await getStudentByIdService(req.params.id);



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



    }catch(error){

        console.log("STUDENT DETAILS ERROR:",error);

        res.status(500).json({
            success:false,
            message:error.message
        });

    }

};



// CREATE STUDENT

export const createStudent = async(req,res)=>{

    try{

        const student =
        await createStudentService(req.body);


        res.status(201).json({

            success:true,

            message:"Student created successfully",

            data:student

        });



    }catch(error){

        console.log("CREATE STUDENT ERROR:",error);

        res.status(500).json({
            success:false,
            message:error.message
        });

    }

};




// UPDATE STUDENT

export const updateStudent = async(req,res)=>{

    try{

        const student =
        await updateStudentService(
            req.params.id,
            req.body
        );


        res.status(200).json({

            success:true,

            message:"Student updated successfully",

            data:student

        });



    }catch(error){

        console.log("UPDATE STUDENT ERROR:",error);


        res.status(500).json({
            success:false,
            message:error.message
        });

    }

};




// DELETE STUDENT

export const deleteStudent = async(req,res)=>{

    try{

        await deleteStudentService(req.params.id);



        res.status(200).json({

            success:true,

            message:"Student deleted successfully"

        });



    }catch(error){

        console.log("DELETE STUDENT ERROR:",error);


        res.status(500).json({

            success:false,

            message:error.message

        });

    }

};





// ================= EMPLOYERS =================


// GET ALL EMPLOYERS

export const getAllEmployers = async(req,res)=>{

    try{


        const employers =
        await getAllEmployersService();



        res.status(200).json({

            success:true,

            data:employers

        });



    }catch(error){


        console.log("EMPLOYERS ERROR:",error);


        res.status(500).json({

            success:false,

            message:error.message

        });


    }

};




// GET EMPLOYER BY ID

export const getEmployerById = async(req,res)=>{


    try{


        const employer =
        await getEmployerByIdService(
            req.params.id
        );



        if(!employer){

            return res.status(404).json({

                success:false,

                message:"Employer not found"

            });

        }



        res.status(200).json({

            success:true,

            data:employer

        });



    }catch(error){


        console.log("EMPLOYER DETAILS ERROR:",error);


        res.status(500).json({

            success:false,

            message:error.message

        });


    }


};





// UPDATE EMPLOYER

export const updateEmployer = async(req,res)=>{

    try{


        const employer =
        await updateEmployerService(
            req.params.id,
            req.body
        );


        res.status(200).json({

            success:true,

            message:"Employer updated successfully",

            data:employer

        });



    }catch(error){

        console.log("UPDATE EMPLOYER ERROR:",error);


        res.status(500).json({

            success:false,

            message:error.message

        });

    }

};




// DELETE EMPLOYER

export const deleteEmployer = async(req,res)=>{

    try{


        await deleteEmployerService(req.params.id);



        res.status(200).json({

            success:true,

            message:"Employer deleted successfully"

        });



    }catch(error){


        console.log("DELETE EMPLOYER ERROR:",error);


        res.status(500).json({

            success:false,

            message:error.message

        });


    }

};





// ================= INTERNSHIPS =================


// GET ALL INTERNSHIPS

export const getAllInternships = async(req,res)=>{

    try{


        const internships =
        await getAllInternshipsService();



        res.status(200).json({

            success:true,

            data:internships

        });



    }catch(error){

        console.log("INTERNSHIPS ERROR:",error);


        res.status(500).json({

            success:false,

            message:error.message

        });

    }

};





// GET INTERNSHIP BY ID

export const getInternshipById = async(req,res)=>{


    try{


        const internship =
        await getInternshipByIdService(
            req.params.id
        );


        if(!internship){

            return res.status(404).json({

                success:false,

                message:"Internship not found"

            });

        }



        res.status(200).json({

            success:true,

            data:internship

        });



    }catch(error){


        console.log("INTERNSHIP DETAILS ERROR:",error);


        res.status(500).json({

            success:false,

            message:error.message

        });

    }

};




// CREATE INTERNSHIP

export const createInternship = async(req,res)=>{

    try{


        const internship =
        await createInternshipService(req.body);



        res.status(201).json({

            success:true,

            message:"Internship created successfully",

            data:internship

        });



    }catch(error){

        console.log("CREATE INTERNSHIP ERROR:",error);


        res.status(500).json({

            success:false,

            message:error.message

        });

    }

};




// UPDATE INTERNSHIP

export const updateInternship = async(req,res)=>{

    try{


        const internship =
        await updateInternshipService(
            req.params.id,
            req.body
        );


        res.status(200).json({

            success:true,

            message:"Internship updated successfully",

            data:internship

        });



    }catch(error){


        console.log("UPDATE INTERNSHIP ERROR:",error);


        res.status(500).json({

            success:false,

            message:error.message

        });

    }

};




// DELETE INTERNSHIP

export const deleteInternship = async(req,res)=>{

    try{


        await deleteInternshipService(req.params.id);


        res.status(200).json({

            success:true,

            message:"Internship deleted successfully"

        });


    }catch(error){


        console.log("DELETE INTERNSHIP ERROR:",error);


        res.status(500).json({

            success:false,

            message:error.message

        });

    }

};





// ================= APPLICATIONS =================


// GET ALL APPLICATIONS

export const getAllApplications = async(req,res)=>{

    try{


        const applications =
        await getAllApplicationsService();



        res.status(200).json({

            success:true,

            data:applications

        });



    }catch(error){

        console.log("APPLICATION ERROR:",error);


        res.status(500).json({

            success:false,

            message:error.message

        });

    }

};




// UPDATE APPLICATION

export const updateApplication = async(req,res)=>{

    try{


        const application =
        await updateApplicationService(
            req.params.id,
            req.body
        );



        res.status(200).json({

            success:true,

            message:"Application updated successfully",

            data:application

        });



    }catch(error){


        console.log("UPDATE APPLICATION ERROR:",error);


        res.status(500).json({

            success:false,

            message:error.message

        });

    }

};




// DELETE APPLICATION

export const deleteApplication = async(req,res)=>{

    try{


        await deleteApplicationService(req.params.id);



        res.status(200).json({

            success:true,

            message:"Application deleted successfully"

        });



    }catch(error){


        console.log("DELETE APPLICATION ERROR:",error);


        res.status(500).json({

            success:false,

            message:error.message

        });

    }

};
// ================= ADMIN SETTINGS =================

// GET ADMIN SETTINGS

export const getAdminSettings = async (req, res) => {

    try {

        const admin = await getAdminSettingsService(
            req.user.id
        );

        res.status(200).json({
            success: true,
            data: admin
        });

    } catch (error) {

        console.log("GET SETTINGS ERROR:", error);

        res.status(500).json({
            success: false,
            message: error.message
        });

    }

};


// UPDATE ADMIN SETTINGS

export const updateAdminSettings = async (req, res) => {

    try {

        const admin = await updateAdminSettingsService(
            req.user.id,
            req.body
        );

        res.status(200).json({
            success: true,
            message: "Settings updated successfully",
            data: admin
        });

    } catch (error) {

        console.log("UPDATE SETTINGS ERROR:", error);

        res.status(500).json({
            success: false,
            message: error.message
        });

    }

};