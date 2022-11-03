import React, { useState } from "react";
import data from "./data";
import Body from "./Body";

const Student = () => {
  const [student, setStudent] = useState(data);
  return (
    <div className="w-full bg-gray-200 mt-0 px-12 py-12 mx-6 ml-0">
      <div>
        <h1 className="w-full max-w-[1440px] mx-auto text-center py-2 text-4xl text-[#102c3a] font-bold">
          Core Student Body
        </h1>
        <div className="w-32 h-1 bg-[#102c3a]  mx-auto my-3"></div>
      </div>
      <div className="w-full grid grid-cols-2 lg:grid-cols-3 comm:gap-y-3 comm:gap-x-16 gap-y-0 gap-x-4 place-content-center">
        {student.map((data) => {
          return (
            <Body
              key={data.id}
              designation={data.designation}
              img={data.img}
              title={data.title}
              mail={data.mail}
              Contact={data.Contact}
            />
          );
        })}
      </div>
    </div>
  );
};
export default Student;
