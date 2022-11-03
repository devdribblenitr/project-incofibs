import Image from "next/image";
import React from "react";
import teacher from "../../public/teacher.jpg";
import EmailIcon from "@mui/icons-material/Email";
import PhoneIcon from "@mui/icons-material/Phone";

const Body = ({ title, mail, Contact, img, designation }) => {
  return (
    <div class="w-full   rounded-lg border  mx-auto my-6 ">
      <div class="flex flex-col items-center mt-0  comm:pt-6 comm:my-6 shadow-[-10px_-10px_30px_4px_rgba(0,0,0,0.1),_10px_10px_30px_4px_rgba(45,78,255,0.15)]">
        <Image
          class="  border-2 rounded-lg "
          src={img}
          alt="Bonnie image"
          width="220px"
          height="220px"
        />
        <h5 class="my-1 text-xl font-bold text-gray-900 dark:text-[#102c3a]">
          {title}
        </h5>
        <span class="text-md text-gray-500 dark:text-[#102c3a] font-bold ">
          {designation}
        </span>
        <div class="md:flex mt-4 space-x-4 md:mt-6 pb-6">
          <a
            href={`mailto:${mail}`}
            class="inline-flex items-center py-2 sm:px-4 px-2 text-sm font-medium text-center text-white bg-orange-700 rounded-lg hover:bg-orange-600 focus:ring-4 focus:outline-none focus:ring-blue-300 "
          >
            <EmailIcon style={{ color: "white" }} />{" "}
          </a>

          <a
            href={`tel:${Contact}`}
            class="inline-flex items-center py-2 sm:px-4 px-2 text-sm font-medium text-center text-white bg-orange-700 rounded-lg hover:bg-orange-600 focus:ring-4 focus:outline-none focus:ring-blue-300"
          >
            {" "}
            <PhoneIcon style={{ color: "white" }} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Body;
