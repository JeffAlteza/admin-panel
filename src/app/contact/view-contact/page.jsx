import ContactComponent from "@/components/contact-components/ContactComponent";
import React from "react";

const ViewContact = () => {
  const selectedRoute = "view-contact";

  return <ContactComponent selectedRoute={selectedRoute} />;
};

export default ViewContact;
