import Image from "next/image";
import React from "react";
import teacher from "../public/teacher.jpg";
import EmailIcon from "@mui/icons-material/Email";
import PhoneIcon from "@mui/icons-material/Phone";

const ContactCard = ({ name, email, contact }) => {
  return (
    <div class="w-full  bg-white rounded-lg border border-gray-800 shadow-md dark:bg-[#1d4559] dark:border-white mx-auto my-6 ">
      <div class="flex flex-col items-center py-6  ">
        <Image
          class="my-3 shadow-lg"
          src={teacher}
          alt="Bonnie image"
          width="160px"
          height="160px"
        />
        <h5 class="my-1 text-xl font-medium text-gray-900 dark:text-white">
          {name}
        </h5>
        <span class="text-sm text-gray-200 dark:text-gray-200">
          Designation
        </span>
        <div class="md:flex mt-4 space-x-3 md:mt-6">
          <a
            href={`mailto:${email}`}
            class="inline-flex items-center py-2 px-4 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300"
          >
            <EmailIcon style={{ color: "white" }} />{" "}
          </a>

          <a
            href={`tel:${contact}`}
            class="inline-flex items-center py-2 px-4 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300"
          >
            {" "}
            <PhoneIcon style={{ color: "white" }} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default ContactCard;
