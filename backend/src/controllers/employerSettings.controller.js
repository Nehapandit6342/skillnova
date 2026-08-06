import {
    getEmployerSettingsService,
    updateEmployerSettingsService
}
from "../services/employerSettings.service.js";





// GET SETTINGS

export const getEmployerSettings =
async(req,res)=>{

try{


const data =
await getEmployerSettingsService(
    req.user.id
);



res.json({

    success:true,

    data

});


}
catch(error){

res.status(400).json({

    success:false,

    message:error.message

});


}


};






// UPDATE SETTINGS


export const updateEmployerSettings =
async(req,res)=>{


try{


const data =
await updateEmployerSettingsService(

    req.user.id,

    req.body

);



res.json({

    success:true,

    message:"Company settings updated",

    data

});


}
catch(error){


res.status(400).json({

success:false,

message:error.message

});


}


};