// import React from "react";

const About = () => {
  return (
    <>
      <section
        id="about"
        className="bg-white dark:bg-slate-800 dark:text-white"
      >
        <div className="container md:w-[70%] sm:py-16 py-10">
          <div className="grid items-center gap-4 grid-cols-1 sm:grid-cols-2">
            <div className="relative font-bold">
              <div className="text-center text-6xl xl:text-8xl font-bold text-black/5 dark:text-gray-700">
                ABOUT
              </div>
              <h1 className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-3xl md:text-4xl">
                About me
              </h1>
            </div>
            <div className="text-slate-500">
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fugiat
                reiciendis et deserunt quo nostrum explicabo dignissimos ratione
                suscipit. Quisquam ipsa sapiente culpa inventore consequuntur
                tempora dolores dicta aliquid fuga aut?
              </p>
              <br />
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat
                veniam impedit reprehenderit harum sint! Cum ipsum minus vitae
                vel accusantium odit saepe hic illo natus nisi, sunt laborum
                incidunt error.
              </p>
              <div>
                <a href="" className="primary-btn inline-block my-6 mr-6">
                  Dowmload Resume
                </a>
                <a
                  href="tel: +989909997497"
                  className="outline-btn inline-block"
                >
                  Contact
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
