// import React from "react";
import majid_prev_ui from "../../assets/majid_prev_ui.png";

const Hero = () => {
  return (
    <>
      <main className="w-full bg-secondary dark:bg-gray-900 dark:text-white">
        <div
          className="container grid grid-cols-1 sm:grid-cols-2 items-center space-y-2 py-12 
        sm:py-0 sm:h-[600px]"
        >
          <div>
            <div className="space-y-2 grid justify-items-center sm:justify-items-start">
              <p className="uppercase">Hello</p>
              <p className="text-4xl md:text-6xl font-bold text-black/80 dark:text-white">
                I'm Majid Asadollahi
              </p>
              <p className="text-3xl text-gray-700 dark:text-white">
                Full stack Developer & Freelance Web
              </p>
              <p className="text-black/75 dark:text-white/70 text-center sm:text-left">
                Interested in software analysis and development, eager to learn
                new technologies and experience new challenges, fast learner To
                complete tasks independently and jointly.
              </p>
              <a
                href="mailto:majid.asadollahi95@gmail.com"
                className="inline-block primary-btn !px-6"
              >
                Hire Me
              </a>
            </div>
          </div>
          {/* {image container} */}
          <div>
            <img
              src={majid_prev_ui}
              alt="john cena"
              className="w-full md:max-w-lg mx-auto"
            ></img>
          </div>
        </div>
      </main>
    </>
  );
};

export default Hero;
