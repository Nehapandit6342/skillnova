import express from "express";


import {

    createInternship,

    createEmployerInternship,

    getAllInternships,

    getMyInternships,

    getInternshipById,

    updateInternship,

    deleteInternship


} from "../controllers/internship.controller.js";



import {
    authenticate
} from "../middleware/auth.middleware.js";


import {
    authorize
} from "../middleware/role.middleware.js";



const router = express.Router();





// ================= PUBLIC =================


router.get(
    "/",
    getAllInternships
);





// ================= EMPLOYER =================


// Create internship

router.post(

    "/",

    authenticate,

    authorize("EMPLOYER"),

    createEmployerInternship

);




// My internships

router.get(

    "/my",

    authenticate,

    authorize("EMPLOYER"),

    getMyInternships

);




// Update

router.put(

    "/:id",

    authenticate,

    authorize("EMPLOYER"),

    updateInternship

);




// Delete

router.delete(

    "/:id",

    authenticate,

    authorize("EMPLOYER"),

    deleteInternship

);





// ================= PUBLIC DETAILS =================


router.get(

    "/:id",

    getInternshipById

);



export default router;