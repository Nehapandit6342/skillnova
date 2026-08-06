import { User } from "lucide-react";

export default function ProfileCard({
  form,
  handleChange,
}) {

  const handlePhotoChange = (e) => {
    const file = e.target.files[0];

    if (!file) return;

    if (file.size > 2 * 1024 * 1024) {
      alert("Image size must be less than 2MB");
      return;
    }

    const imageUrl = URL.createObjectURL(file);

    handleChange({
      target: {
        name: "profileImage",
        value: imageUrl,
      },
    });
  };


  return (
    <div className="rounded-2xl border border-gray-200 bg-white p-8 shadow-sm">

      <div className="mb-8 flex items-center justify-between">

        <div className="flex items-center gap-3">
          <User className="h-6 w-6 text-blue-600" />

          <h2 className="text-2xl font-semibold text-gray-800">
            Profile Information
          </h2>
        </div>

        <button
          type="submit"
          className="rounded-xl bg-blue-600 px-6 py-3 font-medium text-white transition hover:bg-blue-700"
        >
          Save Profile
        </button>

      </div>


      <div className="flex flex-col gap-8 lg:flex-row">


        {/* Avatar */}

        <div className="flex flex-col items-center">

          <div className="flex h-28 w-28 items-center justify-center overflow-hidden rounded-full bg-blue-100 text-4xl font-bold text-blue-600">

            {form.profileImage ? (

              <img
                src={form.profileImage}
                alt="Profile"
                className="h-full w-full object-cover"
              />

            ) : (

              form.name
                ? form.name.charAt(0).toUpperCase()
                : "A"

            )}

          </div>


          <label
            className="mt-5 cursor-pointer rounded-lg border border-blue-600 px-5 py-2 text-sm font-medium text-blue-600 transition hover:bg-blue-50"
          >

            Change Photo

            <input
              type="file"
              accept="image/png,image/jpeg"
              hidden
              onChange={handlePhotoChange}
            />

          </label>


          <p className="mt-2 text-xs text-gray-500">
            JPG / PNG (Max 2MB)
          </p>

        </div>


        {/* Inputs */}

        <div className="grid flex-1 grid-cols-1 gap-5 md:grid-cols-2">


          <div>
            <label className="mb-2 block font-medium text-gray-700">
              Full Name
            </label>

            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              className="w-full rounded-xl border border-gray-300 px-4 px-3 py-3 outline-none focus:border-blue-600"
            />

          </div>



          <div>
            <label className="mb-2 block font-medium text-gray-700">
              Email Address
            </label>

            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              className="w-full rounded-xl border border-gray-300 px-4 py-3 outline-none focus:border-blue-600"
            />

          </div>



          <div>
            <label className="mb-2 block font-medium text-gray-700">
              Phone Number
            </label>

            <input
              type="text"
              name="phone"
              value={form.phone}
              onChange={handleChange}
              placeholder="+977 98XXXXXXXX"
              className="w-full rounded-xl border border-gray-300 px-4 py-3 outline-none focus:border-blue-600"
            />

          </div>



          <div>
            <label className="mb-2 block font-medium text-gray-700">
              Role
            </label>

            <input
              value={form.role}
              disabled
              className="w-full rounded-xl border border-gray-300 bg-gray-100 px-4 py-3 text-gray-500"
            />

          </div>


        </div>

      </div>

    </div>
  );
}