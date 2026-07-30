import prisma from "../config/prisma.js";


// ================= GET ALL INTERNSHIPS =================

export const getAllInternshipsService = async () => {

    const internships = await prisma.internship.findMany({

        include: {

            employer: {

                select: {

                    id: true,

                    companyName: true,

                    industry: true,

                    location: true

                }

            }

        },

        orderBy: {

            createdAt: "desc"

        }

    });

    return internships;

};


// ================= GET INTERNSHIP BY ID =================

export const getInternshipByIdService = async (id) => {

    const internship = await prisma.internship.findUnique({

        where: {

            id

        },

        include: {

            employer: {

                select: {

                    id: true,

                    companyName: true,

                    industry: true,

                    location: true,

                    website: true

                }

            }

        }

    });

    return internship;

};


// ================= CREATE INTERNSHIP =================

export const createInternshipService = async (data) => {

    const internship = await prisma.internship.create({

        data: {

            title: data.title,

            description: data.description,

            location: data.location,

            type: data.type,

            stipend: data.stipend,

            deadline: data.deadline
    ? new Date(`${data.deadline}T00:00:00.000Z`)
    : null,

            employerId: data.employerId,

            isActive: true

        },

        include: {

            employer: {

                select: {

                    companyName: true

                }

            }

        }

    });

    return internship;

};


// ================= UPDATE INTERNSHIP =================

export const updateInternshipService = async (id, data) => {

    const internship = await prisma.internship.update({

        where: {

            id

        },

        data: {

            title: data.title,

            description: data.description,

            location: data.location,

            type: data.type,

            stipend: data.stipend,

            deadline: data.deadline
                ? new Date(data.deadline)
                : null,

            employerId: data.employerId,

            isActive: data.isActive

        },

        include: {

            employer: {

                select: {

                    companyName: true

                }

            }

        }

    });

    return internship;

};


// ================= DELETE INTERNSHIP =================

export const deleteInternshipService = async (id) => {

    await prisma.internship.delete({

        where: {

            id

        }

    });

    return true;

};