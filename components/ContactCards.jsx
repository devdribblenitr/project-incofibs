import React, { useState } from "react";
import data from "./ContactData";
import ContactCard from "./ContactCard";

const ContactCards = () => {
  const [team, setTeam] = useState(data);

  return (
    <div className="w-full py-4 px-12 mx-6 ml-0">
      <div>
        <h1 className="w-full max-w-[1440px] mx-auto text-center py-2 text-3xl font-bold">
          Contacts
        </h1>
      </div>
      <div className="w-full grid grid-cols-1 lg:grid-cols-3 gap-y-3 place-content-center">
        {team.map((data) => {
          return (
            <ContactCard
              key={data.id}
              name={data.name}
              email={data.email}
              contact={data.contact}
            />
          );
        })}
      </div>
    </div>
  );
};

export default ContactCards;
