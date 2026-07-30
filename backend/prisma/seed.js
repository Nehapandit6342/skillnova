import { PrismaClient } from "@prisma/client";
import { PrismaPg } from "@prisma/adapter-pg";
import pg from "pg";
import dotenv from "dotenv";
import bcrypt from "bcryptjs";


dotenv.config();


const { Pool } = pg;


const pool = new Pool({

    connectionString: process.env.DATABASE_URL,

});


const adapter = new PrismaPg(pool);


const prisma = new PrismaClient({
    adapter
});



async function main(){


const password =
await bcrypt.hash(
"password123",
10
);



// ADMIN

await prisma.user.upsert({

where:{
email:"admin@skillnova.com"
},

update:{},

create:{


name:"Admin User",

email:"admin@skillnova.com",

password,

role:"ADMIN"


}


});




// STUDENT

await prisma.user.upsert({

where:{
email:"student@skillnova.com"
},

update:{},

create:{


name:"Student User",

email:"student@skillnova.com",

password,

role:"STUDENT",


studentProfile:{


create:{


college:"Madan Bhandari College",

degree:"Computer Engineering",

semester:8,

skills:[
"React",
"Node.js",
"PostgreSQL"
]


}


}


}


});






// EMPLOYER

await prisma.user.upsert({

where:{
email:"employer@skillnova.com"
},


update:{},


create:{


name:"Employer User",

email:"employer@skillnova.com",

password,

role:"EMPLOYER",


employerProfile:{


create:{


companyName:
"SkillNova Technologies",

website:
"https://skillnova.com",

industry:
"Software Development",

location:
"Kathmandu Nepal",

description:
"AI powered internship and career growth platform",

companySize:
"10-50"


}


}


}


});



console.log(
"Seed completed successfully"
);



}



main()

.catch((error)=>{

console.error(error);

process.exit(1);

})


.finally(async()=>{

await prisma.$disconnect();

});