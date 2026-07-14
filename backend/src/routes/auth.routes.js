import { Router } from "express";
import { register, login , forgotPassword, verifyResetOtp,resetPassword,verifyEmail} from "../controllers/auth.controller.js";
import { authenticate } from "../middleware/auth.middleware.js";

const router = Router();

router.post("/register", register);

router.post("/login", login);
router.post("/forgot-password", forgotPassword);
router.post(
    "/verify-reset-otp",
    verifyResetOtp
);
router.post(
    "/reset-password",
    resetPassword
);
router.post("/verify-email", verifyEmail);

router.get("/me", authenticate, (req, res) => {

    res.json({
        success: true,
        user: req.user
    });

});

export default router;