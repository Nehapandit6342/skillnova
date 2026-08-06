import { 
    useMutation 
} from "@tanstack/react-query";


import toast from "react-hot-toast";


import {
    useNavigate,
    useLocation
} from "react-router-dom";


import { 
    loginUser 
} from "@/api/auth.api";


import {
    useAuth
} from "@/context/AuthContext";






export default function useLogin(){



const navigate =
useNavigate();



const location =
useLocation();



const {
    login
}=useAuth();








return useMutation({



mutationFn: loginUser,





onSuccess:(response)=>{



console.log(
"LOGIN RESPONSE:",
response
);





const {
    user,
    token
}=response.data;





if(!user || !token){


toast.error(
"Invalid login response"
);


return;


}







login(
user,
token
);






toast.success(
"Login successful"
);









// ===============================
// RETURN TO PREVIOUS PAGE
// ===============================


const redirectPath =
location.state?.from;





if(redirectPath){


navigate(

redirectPath,

{

replace:true

}

);


return;


}









// ===============================
// DEFAULT ROLE REDIRECT
// ===============================



switch(user.role){



case "ADMIN":


navigate(

"/admin/dashboard",

{
replace:true
}

);


break;





case "STUDENT":


navigate(

"/student/dashboard",

{
replace:true
}

);


break;





case "EMPLOYER":


navigate(

"/employer/dashboard",

{
replace:true
}

);


break;





default:


navigate(

"/",

{
replace:true
}

);


}



},







onError:(error)=>{


console.log(
"LOGIN ERROR:",
error
);




toast.error(

error?.response?.data?.message
||
"Login failed"

);



}



});


}