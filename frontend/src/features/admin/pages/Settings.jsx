import { useEffect, useState } from "react";
import api from "@/lib/api";

import ProfileCard from "../components/ProfileCard";
import SecurityCard from "../components/SecurityCard";
import ActiveSessions from "../components/ActiveSessions";
import DangerZone from "../components/DangerZone";

export default function Settings() {

  const [form, setForm] = useState({
    name: "",
    email: "",
    role: "",
    phone: "",
    profileImage: "",
    currentPassword: "",
    password: "",
    confirmPassword: "",
  });


  const [loading, setLoading] = useState(true);


  useEffect(() => {
    fetchSettings();
  }, []);



  // ================= FETCH SETTINGS =================

  const fetchSettings = async () => {

    try {

      const response = await api.get(
        "/admin/settings"
      );


      if (response.data.success) {

        const data = response.data.data;


        setForm({

          name: data.name || "",

          email: data.email || "",

          role: data.role || "",

          phone: data.phone || "",

          profileImage: data.profileImage || "",

          currentPassword: "",

          password: "",

          confirmPassword: "",

        });

      }


    } catch (error) {

      console.log(
        "Settings Fetch Error:",
        error
      );

    } finally {

      setLoading(false);

    }

  };




  // ================= INPUT CHANGE =================

  const handleChange = (e) => {

    setForm((prev) => ({

      ...prev,

      [e.target.name]: e.target.value,

    }));

  };




  // ================= UPDATE SETTINGS =================

  const handleSubmit = async (e) => {

    e.preventDefault();


    try {


      // Password match check

      if (
        form.password &&
        form.password !== form.confirmPassword
      ) {

        return alert(
          "Passwords do not match"
        );

      }




      // Update profile

      const profileResponse = await api.put(

        "/admin/settings",

        {

          name: form.name,

          email: form.email,

        }

      );





      // Change password

      if (form.password.trim()) {


        if (!form.currentPassword) {

          return alert(
            "Current password is required"
          );

        }



        await api.post(

          "/auth/change-password",

          {

            currentPassword:
              form.currentPassword,


            newPassword:
              form.password,

          }

        );

      }





      if (profileResponse.data.success) {


        alert(
          "Settings Updated Successfully"
        );



        setForm((prev) => ({

          ...prev,

          currentPassword: "",

          password: "",

          confirmPassword: "",

        }));


      }



    } catch (error) {


      console.log(
        "Update Settings Error:",
        error
      );



      alert(

        error.response?.data?.message ||

        "Failed to update settings"

      );


    }

  };




  // ================= LOADING =================

  if (loading) {

    return (

      <div className="flex min-h-screen items-center justify-center text-lg font-medium">

        Loading Settings...

      </div>

    );

  }





  return (

    <div className="min-h-screen bg-gray-50 p-8">


      {/* Header */}

      <div className="mb-8">


        <h1 className="text-4xl font-bold text-gray-900">

          Admin Settings

        </h1>



        <p className="mt-2 text-gray-500">

          Manage your profile, security and preferences.

        </p>


      </div>





      <form

        onSubmit={handleSubmit}

        className="mx-auto max-w-6xl space-y-8"

      >



        <ProfileCard

          form={form}

          handleChange={handleChange}

        />





        <SecurityCard

          form={form}

          handleChange={handleChange}

        />





        <ActiveSessions />





        <DangerZone />



      </form>



    </div>

  );

}