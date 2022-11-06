import Image from "next/image";
import React from "react";
import EmailIcon from "@mui/icons-material/Email";
import PhoneIcon from "@mui/icons-material/Phone";

const ContactCard = ({ name, email, contact, img, designation }) => {
  return (
    <div className="w-full rounded-lg border shadow-lg mx-auto my-6">
      <div className="flex flex-col items-center py-6  ">
        {/* <Image
          className="my-3 shadow-lg"
          src={img}
          alt={name}
          width="200px"
          height="200px"
        /> */}
        <h5 className="my-1 text-xl font-medium text-gray-900">{name}</h5>
        <span className="text-sm">{designation}</span>
        <div className="md:flex mt-4 space-x-3 md:mt-6">
          <a
            href={`mailto:${email}`}
            className="inline-flex items-center py-2 px-4 text-sm font-medium text-center bg-orange-600 rounded-lg hover:bg-orange-400 focus:ring-4 focus:outline-none focus:ring-blue-300"
          >
            <EmailIcon style={{ color: "white" }} />
          </a>

          <a
            href={`tel:${contact}`}
            className="inline-flex items-center py-2 px-4 text-sm font-medium text-center  bg-orange-600 rounded-lg hover:bg-orange-400 focus:ring-4 focus:outline-none focus:ring-blue-300"
          >
            <PhoneIcon style={{ color: "white" }} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default ContactCard;
