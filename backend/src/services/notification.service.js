import prisma from "../config/prisma.js";


// CREATE NOTIFICATION

export const createNotification = async ({
    userId,
    title,
    message,
    type,
    link
}) => {

    return await prisma.notification.create({

        data: {

            userId,

            title,

            message,

            type,

            link

        }

    });

};