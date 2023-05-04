import { useState } from "react";

export function ProductDetail() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [contact, setContact] = useState("");
  const [pincode, setPincode] = useState("");

  const handleSubmit = () => {
    console.log(name, email, contact, pincode);
  };
  return (
    <>
      <h1>Product Detail Page</h1>
      <div className="max-w-7xl mx-auto mt-16">
        <div className="max-w-3xl py-6 border mx-auto">
          <div className="py-5 space-y-4 flex flex-col justify-center items-center">
            <h1 className="font-bold text-lg">Add Product Detail</h1>
            <form className="space-y-1" onChange={handleSubmit}>
              <div className="flex flex-col space-y-1">
                <label
                  className="text-sm mt-4 text-left text-gray-700"
                  htmlFor="name"
                >
                  Name
                </label>
                <input
                  className="border py-1.5 focus:outline-none text-sm rounded-md pl-2"
                  type="name"
                  name="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Enter Name"
                />
              </div>
              <div className="flex flex-col space-y-1">
                <label
                  className="text-sm mt-4 text-left text-gray-700"
                  htmlFor="email"
                >
                  Email
                </label>
                <input
                  className="border py-1.5 focus:outline-none text-sm rounded-md pl-2"
                  type="email"
                  name="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter Email Address"
                />
              </div>
              <div className="flex flex-col space-y-1">
                <label
                  className="text-sm mt-4 text-left text-gray-700"
                  htmlFor="contact"
                >
                  Contact
                </label>
                <input
                  className="border py-1.5 focus:outline-none text-sm rounded-md pl-2"
                  type="contact"
                  name="contact"
                  placeholder="Enter contact"
                  onChange={(e) => setContact(e.target.value)}
                />
              </div>
              <div className="flex flex-col space-y-1">
                <label
                  className="text-sm mt-4 text-left text-gray-700"
                  htmlFor="pincode"
                >
                  Pincode
                </label>
                <input
                  className="border py-1.5 focus:outline-none text-sm rounded-md pl-2"
                  type="pincode"
                  name="pincode"
                  value={pincode}
                  onChange={(e) => setPincode(e.target.value)}
                  placeholder="Enter pincode"
                />
              </div>
              <div className="w-full flex justify-center">
                <button
                  type="button"
                  className={`bg-blue-300
                  px-[90px] mt-4 py-1.5 rounded-md`}
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
