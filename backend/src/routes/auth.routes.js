import { Router } from "express";

import {
    register,
    login,
    forgotPassword,
    verifyResetOtp,
    resetPassword
} from "../controllers/auth.controller.js";

import { authenticate } from "../middleware/auth.middleware.js";


const router = Router();



// ================= REGISTER =================

router.post(
    "/register",
    register
);



// ================= LOGIN =================

router.post(
    "/login",
    login
);



// ================= PASSWORD RESET =================

router.post(
    "/forgot-password",
    forgotPassword
);


router.post(
    "/verify-reset-otp",
    verifyResetOtp
);


router.post(
    "/reset-password",
    resetPassword
);




// ================= CURRENT USER =================

router.get(
    "/me",
    authenticate,
    (req, res) => {

        res.json({

            success:true,

            user:req.user

        });

    }
);



export default router;