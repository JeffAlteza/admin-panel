import React from "react";
import ContactTable from "./ContactTable";
import UpdateContact from "./UpdateContact";

const ContactComponent = ({ selectedRoute }) => {
  return (
    <div className="bg-white py-8 h-screen lg:mx-40 md:mx-20 sm:mx-4">
    <div className="flex flex-col">
      <p className="text font-bold text-4xl">Contact</p>
      <p className="text text-md">Contacts & Social Media</p>
    </div>
    <hr className="my-4" />
    <div className="h-screen w-full rounded-lg">
      {selectedRoute === "view-contact" ? (
        <div className="lg:block md:block sm:block">
          <ContactTable />
        </div>
      ) : selectedRoute === "update-contact" ? (
        <div className="lg:block md:block sm:block">
          <UpdateContact />
        </div>
      ) : null}
    </div>
  </div>
  );
};

export default ContactComponent;
