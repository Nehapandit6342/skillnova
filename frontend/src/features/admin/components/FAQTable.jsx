export default function FAQTable({
  faqs = [],
  onEdit,
  onDelete,
  onToggle,
}) {

  return (
    <div className="bg-white rounded-xl border overflow-hidden">

      <table className="w-full">

        <thead className="bg-slate-100">
          <tr>

            <th className="p-4 text-left">
              Question
            </th>

            <th className="p-4 text-left">
              Answer
            </th>

            <th className="p-4 text-left">
              Status
            </th>

            <th className="p-4 text-left">
              Actions
            </th>

          </tr>
        </thead>


        <tbody>


          {
            faqs.length === 0 && (

              <tr>

                <td
                  colSpan="4"
                  className="p-5 text-center text-slate-500"
                >
                  No FAQs found
                </td>

              </tr>

            )
          }



          {
            faqs.map((faq)=>(

              <tr
                key={faq.id}
                className="border-t hover:bg-slate-50"
              >


                <td className="p-4 font-medium text-slate-800">

                  {faq.question}

                </td>



                <td className="p-4 max-w-md text-slate-600">

                  <p className="line-clamp-2">

                    {faq.answer}

                  </p>

                </td>




                <td className="p-4">


                  <button

                    onClick={() => onToggle(faq.id)}

                    className={`font-medium ${
                      faq.isActive
                      ? "text-green-600"
                      : "text-red-600"
                    }`}

                  >

                    {
                      faq.isActive
                      ? "Active"
                      : "Inactive"
                    }


                  </button>


                </td>




                <td className="p-4 flex gap-2">


                  <button

                    onClick={() => onEdit(faq)}

                    className="px-3 py-1 rounded-lg bg-blue-500 text-white hover:bg-blue-600"

                  >

                    Edit

                  </button>




                  <button

                    onClick={() => onDelete(faq.id)}

                    className="px-3 py-1 rounded-lg bg-red-500 text-white hover:bg-red-600"

                  >

                    Delete

                  </button>



                </td>



              </tr>


            ))
          }



        </tbody>


      </table>


    </div>
  );
}