import prisma from "../config/prisma.js";


// ================= DASHBOARD =================

export const dashboardService = async () => {


  const [
    totalStudents,
    totalEmployers,
    totalInternships,
    totalApplications,
    pendingApplications,
    shortlistedApplications,
    acceptedApplications,
    rejectedApplications

  ] = await Promise.all([


    prisma.user.count({
      where:{
        role:"STUDENT"
      }
    }),


    prisma.user.count({
      where:{
        role:"EMPLOYER"
      }
    }),


    prisma.internship.count(),


    prisma.application.count(),


    prisma.application.count({
      where:{
        status:"Pending"
      }
    }),


    prisma.application.count({
      where:{
        status:"Shortlisted"
      }
    }),


    prisma.application.count({
      where:{
        status:"Accepted"
      }
    }),


    prisma.application.count({
      where:{
        status:"Rejected"
      }
    })

  ]);



  const recentStudents = await prisma.user.findMany({

    where:{
      role:"STUDENT"
    },

    select:{
      id:true,
      name:true,
      email:true,
      createdAt:true
    },

    orderBy:{
      createdAt:"desc"
    },

    take:5

  });



  const recentInternships = await prisma.internship.findMany({

    take:5,

    orderBy:{
      createdAt:"desc"
    },


    include:{

      employer:{
        select:{
          companyName:true
        }
      },


      _count:{
        select:{
          applications:true
        }
      }

    }

  });



  const recentApplications = await prisma.application.findMany({

    take:5,

    orderBy:{
      appliedAt:"desc"
    },


    include:{


      student:{
        include:{
          user:{
            select:{
              name:true,
              email:true
            }
          }
        }
      },


      internship:{
        include:{
          employer:{
            select:{
              companyName:true
            }
          }
        }
      }


    }

  });



  return {

  totalStudents,
  totalEmployers,
  totalInternships,

  totalApplications,

  pendingApplications,
  shortlistedApplications,
  acceptedApplications,
  rejectedApplications,


  analytics: {
    students: totalStudents,
    employers: totalEmployers,
    internships: totalInternships,
  },


  applications: {
    applied: totalApplications,
    shortlisted: shortlistedApplications,
    accepted: acceptedApplications,
    rejected: rejectedApplications,
  },


  recentStudents,
  recentInternships,
  recentApplications

};


};




// ================= STUDENTS =================


export const getAllStudentsService = async()=>{


return await prisma.user.findMany({

where:{
role:"STUDENT"
},


select:{

id:true,
name:true,
email:true,
isActive:true,
createdAt:true,


studentProfile:{

select:{

profileImage:true,
college:true,
degree:true,
semester:true,
cgpa:true,
skills:true,
careerGoal:true

}

}

},


orderBy:{
createdAt:"desc"
}


});


};



export const getStudentByIdService = async(id)=>{


return await prisma.user.findUnique({

where:{
id
},


include:{

studentProfile:true

}


});


};




export const createStudentService = async(data)=>{


return await prisma.user.create({

data:{


name:data.name,

email:data.email,

password:data.password,

role:"STUDENT",


studentProfile:{


create:{

college:data.college,

degree:data.degree,

semester:data.semester,

cgpa:data.cgpa,

skills:data.skills || []

}

}


}


});


};




export const updateStudentService = async(id,data)=>{


return await prisma.user.update({

where:{
id
},


data:{

name:data.name,

email:data.email,

isActive:data.isActive


}


});


};




export const deleteStudentService = async(id)=>{


await prisma.user.delete({

where:{
id
}

});


return true;


};
// ================= EMPLOYERS =================


// GET ALL EMPLOYERS

export const getAllEmployersService = async()=>{


return await prisma.employerProfile.findMany({

include:{


user:{

select:{

id:true,
name:true,
email:true,
isActive:true,
createdAt:true

}

},


_count:{

select:{

internships:true

}

}


},


orderBy:{

createdAt:"desc"

}


});


};




// GET EMPLOYER BY ID

export const getEmployerByIdService = async(id)=>{


return await prisma.employerProfile.findUnique({

where:{

id

},


include:{


user:{

select:{

id:true,
name:true,
email:true,
isActive:true,
createdAt:true

}

},


internships:true


}


});


};





// UPDATE EMPLOYER


export const updateEmployerService = async(id,data)=>{


return await prisma.employerProfile.update({

where:{

id

},


data:{


logo:data.logo,

companyName:data.companyName,

website:data.website,

industry:data.industry,

location:data.location,

description:data.description,

companySize:data.companySize,

foundedYear:data.foundedYear


},


include:{


user:true


}


});


};





// DELETE EMPLOYER


export const deleteEmployerService = async(id)=>{


await prisma.employerProfile.delete({

where:{

id

}

});


return true;


};

// ================= INTERNSHIPS =================



// GET ALL INTERNSHIPS

export const getAllInternshipsService = async()=>{


return await prisma.internship.findMany({

include:{


employer:{

select:{

id:true,

companyName:true,

industry:true,

location:true

}

},



_count:{

select:{

applications:true

}

}


},



orderBy:{

createdAt:"desc"

}


});


};






// GET INTERNSHIP BY ID


export const getInternshipByIdService = async(id)=>{


return await prisma.internship.findUnique({

where:{

id

},


include:{


employer:{

select:{

id:true,

companyName:true,

industry:true,

location:true

}

},



applications:{

include:{


student:{

include:{


user:{

select:{

id:true,

name:true,

email:true

}

}


}


}


}


}



}


});


};







// CREATE INTERNSHIP


export const createInternshipService = async(data)=>{


return await prisma.internship.create({

data:{


title:data.title,

description:data.description,

location:data.location,

type:data.type,

stipend:data.stipend,


deadline:data.deadline
? new Date(data.deadline)
:null,


employerId:data.employerId,


isActive:data.isActive ?? true


}


});


};







// UPDATE INTERNSHIP


export const updateInternshipService = async(id,data)=>{


return await prisma.internship.update({

where:{

id

},


data:{


title:data.title,

description:data.description,

location:data.location,

type:data.type,

stipend:data.stipend,


deadline:data.deadline
? new Date(data.deadline)
:null,


isActive:data.isActive


}


});


};








// DELETE INTERNSHIP


export const deleteInternshipService = async(id)=>{


await prisma.internship.delete({

where:{

id

}

});


return true;


};

// ================= APPLICATIONS =================


// GET ALL APPLICATIONS

export const getAllApplicationsService = async()=>{


return await prisma.application.findMany({

include:{


student:{


include:{


user:{

select:{

id:true,

name:true,

email:true

}

}


}


},



internship:{


include:{


employer:{

select:{

id:true,

companyName:true

}

}


}


}



},



orderBy:{

appliedAt:"desc"

}


});


};







// UPDATE APPLICATION


export const updateApplicationService = async(id,data)=>{


return await prisma.application.update({

where:{

id

},


data:{


status:data.status


},



include:{


student:{


include:{


user:true


}


},



internship:{


include:{


employer:true


}


}


}



});


};







// DELETE APPLICATION


export const deleteApplicationService = async(id)=>{


await prisma.application.delete({

where:{

id

}

});


return true;


};






// ================= ADMIN SETTINGS =================



// GET ADMIN SETTINGS


export const getAdminSettingsService = async(id)=>{


return await prisma.user.findUnique({

where:{

id

},


select:{


id:true,

name:true,

email:true,

role:true,

isActive:true,

createdAt:true,

updatedAt:true


}


});


};







// UPDATE ADMIN SETTINGS


export const updateAdminSettingsService = async(id,data)=>{


return await prisma.user.update({

where:{

id

},


data:{


name:data.name,

email:data.email


},



select:{


id:true,

name:true,

email:true,

role:true,

isActive:true,

createdAt:true,

updatedAt:true


}



});


};