import prisma from "../config/prisma.js";


export const getHomeDataService = async () => {


  const [
    totalStudents,
    totalEmployers,
    totalInternships,
    totalApplications,
  ] = await Promise.all([

    prisma.studentProfile.count(),

    prisma.employerProfile.count(),

    prisma.internship.count(),

    prisma.application.count(),

  ]);





  const latestInternships =
  await prisma.internship.findMany({

    take:6,


    orderBy:{

      createdAt:"desc"

    },


    include:{


      employer:{


        select:{


          companyName:true,

          logo:true


        }


      }


    }


  });








  const featuredCompanies =
  await prisma.employerProfile.findMany({


    take:6,


    orderBy:{


      createdAt:"desc"


    },


    select:{


      id:true,

      companyName:true,

      logo:true,

      industry:true,

      location:true,

      website:true


    }


  });





  return {


    stats:{


      totalStudents,

      totalEmployers,

      totalInternships,

      totalApplications


    },


    latestInternships,


    featuredCompanies,


  };


};