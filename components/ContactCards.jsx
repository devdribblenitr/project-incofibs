import React, { useState } from "react";
import data from "./ContactData";
import ContactCard from "./ContactCard";

const ContactCards = () => {
  const [team, setTeam] = useState(data);

  return (
    <div className="w-full py-4 px-12 mx-6 ml-0">
      <div className="w-full grid grid-cols-1 lg:grid-cols-3 gap-y-3 gap-x-10 place-content-center">
        {team.map((data) => {
          return (
            <ContactCard
              key={data.id}
              // img={data.img}
              designation={data.designation}
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
