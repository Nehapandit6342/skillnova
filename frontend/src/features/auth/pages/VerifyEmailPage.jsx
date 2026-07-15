import { useSearchParams } from "react-router-dom";
import { useState } from "react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

import { verifyEmail } from "@/api/auth.api";

import toast from "react-hot-toast";


export default function VerifyEmailPage(){


    const [params] = useSearchParams();


    const email = params.get("email");


    const [otp,setOtp] = useState("");



    const handleVerify = async()=>{


        try{


            const response =
            await verifyEmail({

                email,

                otp

            });



            toast.success(
                response.message
            );


        }
        catch(error){


            toast.error(

                error.response?.data?.message
                ||
                "Verification failed"

            );

        }

    };




    return (

        <div className="flex min-h-screen items-center justify-center">


            <div className="w-full max-w-md space-y-5 rounded-xl border p-6">


                <h1 className="text-2xl font-bold">
                    Verify Email
                </h1>



                <p className="text-sm text-gray-600">

                    OTP sent to:
                    <br/>

                    {email}

                </p>



                <Input

                    placeholder="Enter OTP"

                    value={otp}

                    onChange={(e)=>setOtp(e.target.value)}

                />



                <Button

                    onClick={handleVerify}

                    className="w-full"

                >

                    Verify Email

                </Button>


            </div>


        </div>

    );

}