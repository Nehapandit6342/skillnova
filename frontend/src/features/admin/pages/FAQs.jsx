import { useEffect, useState } from "react";
import api from "@/api/axios";

import FAQTable from "../components/FAQTable";
import FAQForm from "../components/FAQForm";
import FAQModal from "../components/FAQModal";


export default function FAQs() {


  const [faqs, setFaqs] = useState([]);

  const [loading, setLoading] = useState(true);

  const [showModal, setShowModal] = useState(false);

  const [selectedFAQ, setSelectedFAQ] = useState(null);




  const fetchFAQs = async () => {

    try {

      setLoading(true);

      const response = await api.get("/admin/faqs");

      setFaqs(response.data.data || []);

    } catch (error) {

      console.log("FAQ fetch error:", error);

    } finally {

      setLoading(false);

    }

  };





  useEffect(() => {

    fetchFAQs();

  }, []);






  // ADD / UPDATE FAQ

  const handleSubmit = async (data) => {


    try {


      if(selectedFAQ){

        await api.put(
          `/admin/faqs/${selectedFAQ.id}`,
          data
        );


      }else{


        await api.post(
          "/admin/faqs",
          data
        );


      }



      setShowModal(false);

      setSelectedFAQ(null);

      fetchFAQs();



    } catch(error){

      console.log("FAQ save error:", error);

    }

  };







  // DELETE FAQ

  const handleDelete = async(id)=>{


    const confirmDelete = window.confirm(
      "Delete this FAQ?"
    );


    if(!confirmDelete) return;



    try{


      await api.delete(
        `/admin/faqs/${id}`
      );


      fetchFAQs();



    }catch(error){

      console.log("Delete FAQ error:", error);

    }


  };








  // TOGGLE STATUS

  const handleToggle = async(id)=>{


    try{


      await api.patch(
        `/admin/faqs/${id}/toggle`
      );


      fetchFAQs();



    }catch(error){

      console.log("Toggle FAQ error:", error);

    }


  };








  return (

    <div className="space-y-6">



      <div className="flex justify-between items-center">


        <div>

          <h1 className="text-3xl font-bold text-slate-900">
            Frequently Asked Questions
          </h1>


          <p className="text-slate-500 mt-1">
            Manage homepage FAQ questions and answers.
          </p>


        </div>




        <button

          onClick={()=>{

            setSelectedFAQ(null);

            setShowModal(true);

          }}

          className="bg-blue-600 text-white px-5 py-2 rounded-lg"

        >

          Add FAQ

        </button>



      </div>







      {
        loading ? (

          <p>
            Loading FAQs...
          </p>


        ) : (


          <FAQTable

            faqs={faqs}

            onEdit={(faq)=>{

              setSelectedFAQ(faq);

              setShowModal(true);

            }}


            onDelete={handleDelete}


            onToggle={handleToggle}


          />


        )

      }








      {
        showModal && (

          <FAQModal

            onClose={()=>{

              setShowModal(false);

              setSelectedFAQ(null);

            }}

          >


            <FAQForm

              initialData={selectedFAQ}

              onSubmit={handleSubmit}


              onCancel={()=>{

                setShowModal(false);

                setSelectedFAQ(null);

              }}

            />


          </FAQModal>

        )
      }





    </div>

  );

}