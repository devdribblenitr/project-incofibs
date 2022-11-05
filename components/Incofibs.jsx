import React from "react";
const Incofibs = () => {
  return (
    <>
      <div className="mt-10 flex flex-col items-center lg:my-10">
        <div className="mx-2 ">
          <div className="flex flex-col items-center lg:items-end lg:mr-[100px]">
            <img
              className="center z-10 w-[320px] md:w-[400px] lg:absolute h-72 lg:h-96 rounded-3xl shadow-2xl"
              src="https://res.cloudinary.com/dzbax077h/image/upload/v1665156071/nitr_o5jm74.jpg"
              alt="nitr"
            />
          </div>
          <div className="rounded-3xl mt-10 lg:mr-[400px] m-2 md:m-20 lg:mb-20">
            <div className="flex flex-col space-y-4 bg-slate-100 p-5 py-20 lg:pl-20 lg:pr-44 lg:text-justify text-center text-xl rounded-3xl h-fit max-w-5xl shadow-xl text-[#184353dc]">
              <div className="mx-4 bg-white font-serif text-5xl text-center text-bold">
                About InCoFIBS
              </div>
              <div>
                InCoFIBS is a prestigious international conference organised to
                provide a platform for industry experts, researchers, and
                students to effectively exchange ideas and recent advances in
                the various fields of Biological Sciences. It also provides a
                stage for budding student researchers to share their findings
                and ideas with global experts. The 3rd International Conference
                on Frontiers in Biological Sciences (InCoFIBS-2023) will be held
                in Department of Life Science, National Institute of Technology
                Rourkela, India, from 2nd to 4th February 2023.
              </div>
              <div>
                Life science is originally a biological discipline. But today it
                has matured into a form of integrative science with
                technological advances in molecular biology and biotechnology
                which has led to burgeoning of specializations and new
                interdisciplinary fields like Epigenetics, Systems Biology,
                Molecular Biophysics, Nano Biotechnology, Bioinformatics, etc.
              </div>
              <div>
                Specific aims of this meeting will be to assemble three sessions
                consisting of total of 12 modules over three parallel sessions
                running for a span of three days. There will be tentatively 3
                key note sessions in every session followed by Plenary /Invited
                Lectures. The program will start with a keynote/Inaugural
                address from a prominent Scientist from India or Abroad.
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Incofibs;
