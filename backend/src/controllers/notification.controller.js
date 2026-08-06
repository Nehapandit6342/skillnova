import prisma from "../config/prisma.js";


export const getNotificationsController = async (req, res) => {

    try {

        const notifications =
            await prisma.notification.findMany({

                where: {
                    userId: req.user.id
                },

                orderBy: {
                    createdAt: "desc"
                }

            });


        res.json({

            success: true,
            data: notifications

        });


    } catch (error) {

        res.status(500).json({

            success: false,
            message: error.message

        });

    }

};