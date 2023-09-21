import React from "react";

const Secsprout = () => {
  return (
    <section>
      <div className="gap-8 items-center py-8 px-4 mx-auto max-w-screen-xl xl:gap-16 md:grid md:grid-cols-2 sm:py-16 lg:px-6">
        <img
          className="w-full  "
          src="https://stridels.com/wp-content/uploads/2022/11/A-curriculum-as-expansive.jpg"
          alt="dashboard image"
        />
        <div className="mt-4 md:mt-0">
          <h1 className="mb-10 text-5xl  font-extrabold text-gray-900 ">
            An online K-12 <br /> curriculum that <br /> meets their <br />{" "}
            potential
          </h1>
          <p className="mb-6 mt-5 font-regular md:text-lg text-sky-900">
            Nurture the spark in students with customized learning that meets
            Common Core National and State Standards — and let all their
            possibilities unfold.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Secsprout;
