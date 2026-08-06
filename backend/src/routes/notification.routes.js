import express from "express";


import {
    getNotificationsController
}
from "../controllers/notification.controller.js";


import {
    authenticate
}
from "../middleware/auth.middleware.js";



const router = express.Router();



router.get(
    "/",
    authenticate,
    getNotificationsController
);



export default router;