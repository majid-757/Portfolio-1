// import React from "react";

const About = () => {
  return (
    <>
      <section
        id="about"
        className="bg-white dark:bg-slate-800 dark:text-white"
      ></section>
      <div className="container md:w-[70%]">
        <div className="grid items-center gap-4 grid-cols-1 sm:grid-cols-2">
          <div className="relative">
            <div className="text-center text-6xl xl:text-8xl font-bold text-black/5">
              ABOUT
            </div>
            <h1 className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-3xl md:text-4xl">
              About me
            </h1>
          </div>
          <div></div>
        </div>
      </div>
    </>
  );
};

export default About;
