export default function FAQModal({
  children,
  onClose
}) {

  return (

    <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">

      <div className="bg-white rounded-xl p-6 w-[500px]">

        <div className="flex justify-between mb-4">

          <h2 className="text-xl font-bold">
            FAQ
          </h2>


          <button
            type="button"
            onClick={onClose}
            className="text-red-500 font-bold"
          >
            X
          </button>

        </div>


        {children}

      </div>

    </div>

  );
}