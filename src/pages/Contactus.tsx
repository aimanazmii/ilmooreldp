import React, { useState } from "react";

function ContactUsPage() {
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [phone, setPhone] = React.useState("");
  const [message, setMessage] = React.useState("");

  const [loading, setLoading] = React.useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = React.useState<string | null>(null);

  const handleSubmit = async (event: any) => {
    event.preventDefault();
    setLoading(true);

    setError(null);
    const dataToSubmit = {
      name,
      email,
      phone,
      message,
    };

    try {
      const response = await fetch("/api/submitDataToAirtable", {
        method: "POST",
        body: JSON.stringify({ data: dataToSubmit }),
        headers: { "Content-Type": "application/json" },
      });

      if (!response.ok) {
        throw new Error("Something went wrong");
      } else {
        setName("");
        setEmail("");
        setPhone("");
        setMessage("");
        setSuccess("Form submitted successfully");
      }
    } catch (error) {
      setError("Error occurred while submitting the form");
    }
    setLoading(false);
  };

  return (
    <section className=" relative" data-aos="zoom-in" delay-aos="100">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="absolute inset-0 -z-10 overflow-hidden">
          <svg
            className="absolute left-[max(50%,25rem)] top-0 h-[64rem] w-[128rem] -translate-x-1/2 stroke-gray-200 [mask-image:radial-gradient(64rem_64rem_at_top,white,transparent)]"
            aria-hidden="true"
          >
            <defs>
              <pattern
                id="e813992c-7d03-4cc4-a2bd-151760b470a0"
                width={200}
                height={200}
                x="50%"
                y={-1}
                patternUnits="userSpaceOnUse"
              >
                <path d="M100 200V.5M.5 .5H200" fill="none" />
              </pattern>
            </defs>
            <svg x="50%" y={-1} className="overflow-visible fill-gray-50">
              <path
                d="M-100.5 0h201v201h-201Z M699.5 0h201v201h-201Z M499.5 400h201v201h-201Z M-300.5 600h201v201h-201Z"
                strokeWidth={0}
              />
            </svg>
            <rect
              width="100%"
              height="100%"
              strokeWidth={0}
              fill="url(#e813992c-7d03-4cc4-a2bd-151760b470a0)"
            />
          </svg>
        </div>
        <div className="pt-32 pb-12 md:pt-40 md:pb-20">
          {/* Page header */}
          <div className="max-w-3xl mx-auto text-center pb-12">
            <h1 className="h1 bg-clip-text text-transparent bg-gradient-to-r from-emerald-300 to-cyan-500">
              Want to know more?
            </h1>
          </div>

          {/* Form */}
          <div className="max-w-sm mx-auto">
            <form onSubmit={handleSubmit}>
              <div className="text-center">
                {error ? (
                  <div className="bg-red-100 text-red-500 font-semibold text-sm mb-4 py-2 border border-red-200 rounded-md">
                    <p>{error}</p>
                  </div>
                ) : null}
                {success ? (
                  <div className="bg-green-100 text-green-500 font-semibold text-sm mb-4 py-2 border border-green-200 rounded-md">
                    <p>{success}</p>
                  </div>
                ) : null}
              </div>

              <div className="flex flex-wrap -mx-3 mb-4">
                <div className="w-full px-3">
                  <label
                    className="block text-sm font-semibold leading-6 text-gray-900"
                    htmlFor="full-name"
                  >
                    Full Name <span className="text-red-600">*</span>
                  </label>
                  <input
                    id="full-name"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    type="text"
                    className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 hover:bg-indigo-100 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    placeholder="Your Full Name"
                  />
                </div>
              </div>
              <div className="flex flex-wrap -mx-3 mb-4">
                <div className="w-full px-3">
                  <label
                    className="block text-sm font-semibold leading-6 text-gray-900"
                    htmlFor="email"
                  >
                    Email <span className="text-red-600">*</span>
                  </label>
                  <input
                    id="email"
                    required
                    type="email"
                    className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 hover:bg-indigo-100 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    placeholder="you@youremail.com"
                    value={email}
                    onChange={(e) => {
                      setEmail(e.target.value);
                    }}
                  />
                </div>
              </div>
              <div className="flex flex-wrap -mx-3 mb-4">
                <div className="w-full px-3">
                  <label
                    className="block text-sm font-semibold leading-6 text-gray-900"
                    htmlFor="password"
                  >
                    Phone Number <span className="text-red-600">*</span>
                  </label>
                  <input
                    id="No. Phone"
                    required
                    type="number"
                    className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 hover:bg-indigo-100 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    placeholder="01x-xxxx-xxxx"
                    value={phone}
                    onChange={(e) => {
                      setPhone(e.target.value);
                    }}
                  />
                </div>
              </div>
              <div className="sm:col-span-2">
                <label
                  htmlFor="message"
                  className="block text-sm font-semibold leading-6 text-gray-900"
                >
                  Message
                </label>
                <div className="mt-2.5">
                  <textarea
                    required
                    name="message"
                    id="message"
                    rows={4}
                    className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 hover:bg-indigo-100 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    placeholder="Enter your message here..."
                    value={message}
                    onChange={(e) => {
                      setMessage(e.target.value);
                    }}
                  />
                </div>
              </div>
              <div className="text-sm text-gray-500 text-center mt-10">
                By submitting this form, I agree to be contacted by <br />
                Telaga Biru Digital about their services .
              </div>
              <div className="flex flex-wrap -mx-3 mt-6">
                <div className="w-full px-3">
                  <button
                    disabled={loading}
                    type="submit"
                    className="block w-full rounded-md bg-sky-500 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-sky-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2
                     focus-visible:outline-sky-600 hover:animate-pulse transition duration-150 ease-in-out disabled:opacity-30"
                  >
                    {loading ? "Submitting" : "Submit"}
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ContactUsPage;
