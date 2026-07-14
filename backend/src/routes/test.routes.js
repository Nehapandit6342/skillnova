import { Router } from "express";
import { authenticate } from "../middleware/auth.middleware.js";
import { authorize } from "../middleware/role.middleware.js";


const router = Router();


router.get(
    "/student",
    authenticate,
    authorize("STUDENT"),
    (req,res)=>{

        res.json({
            message:"Student dashboard access"
        });

    }
);



router.get(
    "/employer",
    authenticate,
    authorize("EMPLOYER"),
    (req,res)=>{

        res.json({
            message:"Employer dashboard access"
        });

    }
);



export default router;