import { useState, useEffect } from "react";


export default function FAQForm({ onSubmit, initialData, onCancel }) {


  const [formData, setFormData] = useState({

    question: "",
    answer: "",

  });



  // Edit mode me data fill karne ke liye
  useEffect(() => {

    setFormData({

      question: initialData?.question || "",

      answer: initialData?.answer || "",

    });

  }, [initialData]);




  const handleChange = (e) => {

    setFormData({

      ...formData,

      [e.target.name]: e.target.value,

    });

  };




  const handleSubmit = (e) => {

    e.preventDefault();


    onSubmit(formData);



    if(!initialData){

      setFormData({

        question: "",

        answer: "",

      });

    }

  };




  return (

    <form
      onSubmit={handleSubmit}
      className="space-y-4 bg-white p-6 rounded-xl border"
    >


      <div>

        <label className="block text-sm font-medium mb-1">
          Question
        </label>


        <input

          type="text"

          name="question"

          value={formData.question}

          onChange={handleChange}

          placeholder="Enter question"

          className="w-full border rounded-lg px-3 py-2"

          required

        />

      </div>



      <div>

        <label className="block text-sm font-medium mb-1">
          Answer
        </label>


        <textarea

          name="answer"

          value={formData.answer}

          onChange={handleChange}

          placeholder="Enter answer"

          rows="4"

          className="w-full border rounded-lg px-3 py-2"

          required

        />

      </div>



      <div className="flex gap-3">


        <button

          type="submit"

          className="bg-blue-600 text-white px-5 py-2 rounded-lg"

        >

          {initialData ? "Update FAQ" : "Add FAQ"}

        </button>



        {
          onCancel && (

            <button

              type="button"

              onClick={onCancel}

              className="border px-5 py-2 rounded-lg"

            >

              Cancel

            </button>

          )
        }


      </div>


    </form>

  );
}