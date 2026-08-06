import { useEffect, useRef, useState } from "react";
import { FaBell, FaSearch } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

import { useAuth } from "@/context/AuthContext";
import useNotifications from "@/features/admin/hooks/useNotifications";


function AdminNavbar() {

  const { logout } = useAuth();

  const navigate = useNavigate();

  const [openNotification, setOpenNotification] = useState(false);

  const notificationRef = useRef(null);



  const {
    data: notifications = [],
    isLoading,
    error,
    markAsRead
  } = useNotifications();




  const unreadCount = notifications.filter(
    (item) => !item.isRead
  ).length;





  useEffect(() => {

    const handleClickOutside = (event) => {

      if (
        notificationRef.current &&
        !notificationRef.current.contains(event.target)
      ) {

        setOpenNotification(false);

      }

    };


    document.addEventListener(
      "mousedown",
      handleClickOutside
    );


    return () => {

      document.removeEventListener(
        "mousedown",
        handleClickOutside
      );

    };


  }, []);





  const handleLogout = () => {

    logout();

    navigate("/login");

  };





  const handleNotificationClick = (id) => {

    markAsRead.mutate(id);

  };





  return (

    <header className="h-24 bg-white border-b border-gray-200 px-8 flex items-center justify-between">


      <div>

        <h1 className="text-4xl font-bold text-gray-900">
          Admin Dashboard
        </h1>

        <p className="text-gray-500 mt-1">
          Manage students, employers, internships and applications.
        </p>

      </div>





      <div className="flex items-center gap-5">



        {/* Search */}

        <div className="flex items-center w-80 bg-gray-100 rounded-2xl px-5 py-3">

          <FaSearch className="text-gray-400" />

          <input

            type="text"

            placeholder="Search..."

            className="ml-3 w-full bg-transparent outline-none text-gray-700"

          />

        </div>






        {/* Notification */}

        <div 
          className="relative"
          ref={notificationRef}
        >


          <button

            onClick={() =>
              setOpenNotification(!openNotification)
            }

            className="
            relative
            h-12
            w-12
            rounded-full
            bg-white
            border
            border-gray-200
            flex
            items-center
            justify-center
            hover:bg-gray-100
            transition
            "

          >

            <FaBell className="text-red-500 text-lg" />


            {
              unreadCount > 0 && (

                <span

                  className="
                  absolute
                  -top-1
                  -right-1
                  bg-red-500
                  text-white
                  text-xs
                  font-bold
                  h-5
                  w-5
                  rounded-full
                  flex
                  items-center
                  justify-center
                  "

                >

                  {unreadCount}

                </span>

              )
            }


          </button>







          {
            openNotification && (

              <div

                className="
                absolute
                right-0
                mt-3
                w-96
                bg-white
                rounded-xl
                shadow-xl
                border
                border-gray-200
                z-50
                overflow-hidden
                "

              >


                <div className="px-5 py-4 border-b">

                  <h3 className="font-semibold">
                    Notifications
                  </h3>

                </div>





                {
                  isLoading && (

                    <p className="p-5 text-gray-500">
                      Loading...
                    </p>

                  )
                }





                {
                  error && (

                    <p className="p-5 text-red-500">
                      Failed to load notifications
                    </p>

                  )
                }







                {
                  notifications.map((item)=>(


                    <div

                      key={item.id}

                      onClick={() =>
                        handleNotificationClick(item.id)
                      }

                      className={`
                      px-5
                      py-4
                      border-b
                      hover:bg-gray-50
                      cursor-pointer
                      ${
                        !item.isRead
                        ? "bg-blue-50"
                        : ""
                      }
                      `}

                    >


                      <div className="flex justify-between">


                        <h4 className="font-semibold text-gray-900">

                          {item.title}

                        </h4>



                        {
                          !item.isRead && (

                            <span className="
                            text-xs
                            text-red-500
                            font-semibold
                            ">

                              New

                            </span>

                          )

                        }


                      </div>




                      <p className="text-sm text-gray-500 mt-1">

                        {item.message}

                      </p>




                      {
                        item.type && (

                          <span className="
                          text-xs
                          text-blue-600
                          mt-2
                          inline-block
                          ">

                            {item.type}

                          </span>

                        )

                      }



                    </div>


                  ))

                }



              </div>

            )

          }



        </div>






        {/* Profile */}

        <div className="flex items-center gap-3">


          <div className="
            w-12
            h-12
            rounded-full
            bg-blue-600
            text-white
            flex
            items-center
            justify-center
            font-semibold
            text-lg
          ">

            AD

          </div>


          <div>

            <h3 className="font-semibold text-gray-900">
              Admin
            </h3>

            <p className="text-sm text-gray-500">
              Administrator
            </p>

          </div>


        </div>



      </div>



    </header>

  );

}


export default AdminNavbar;