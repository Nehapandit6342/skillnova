import express from "express";
<<<<<<< HEAD


import {
    getNotificationsController
}
from "../controllers/notification.controller.js";


import {
    authenticate
}
from "../middleware/auth.middleware.js";


=======
import prisma from "../config/prisma.js";
>>>>>>> 0bde86d (Add admin settings and profile management)

const router = express.Router();



<<<<<<< HEAD
router.get(
    "/",
    authenticate,
    getNotificationsController
);
=======
// ===============================
// GET ALL NOTIFICATIONS
// ===============================

router.get("/", async (req, res) => {

  try {

    const notifications = await prisma.notification.findMany({

      orderBy: {
        createdAt: "desc",
      },

      take: 10,

    });



    res.json({

      success: true,

      data: notifications,

    });



  } catch (error) {

    res.status(500).json({

      success: false,

      message: error.message,

    });

  }

});





// ===============================
// MARK SINGLE NOTIFICATION READ
// ===============================

router.patch("/:id/read", async (req, res) => {

  try {


    const notification =
      await prisma.notification.update({

        where: {

          id: req.params.id,

        },


        data: {

          isRead: true,

        },

      });



    res.json({

      success: true,

      data: notification,

    });



  } catch (error) {


    res.status(500).json({

      success:false,

      message:error.message,

    });


  }


});







// ===============================
// MARK ALL NOTIFICATIONS READ
// ===============================

router.patch("/read-all", async (req, res) => {

  try {


    await prisma.notification.updateMany({

      where: {

        isRead:false,

      },


      data: {

        isRead:true,

      },

    });



    res.json({

      success:true,

      message:"All notifications marked as read",

    });



  } catch(error){


    res.status(500).json({

      success:false,

      message:error.message,

    });


  }


});


>>>>>>> 0bde86d (Add admin settings and profile management)



export default router;