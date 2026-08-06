import { Router } from "express";

import {
    register,
    login,
    forgotPassword,
    verifyResetOtp,
    resetPassword,
    changePassword,
    deleteAccount,
    getSessions,
    logoutAllDevices
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




// ================= CHANGE PASSWORD =================

router.post(
    "/change-password",
    authenticate,
    changePassword
);


// ================= DELETE ACCOUNT =================

router.delete(
    "/account",
    authenticate,
    deleteAccount
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

// ================= ACTIVE SESSIONS =================

router.get(
    "/sessions",
    authenticate,
    getSessions
);

// ================= LOGOUT ALL DEVICES =================

router.post(
    "/logout-all",
    authenticate,
    logoutAllDevices
);

export default router;