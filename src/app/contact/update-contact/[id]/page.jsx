import ContactComponent from "@/components/contact-components/ContactComponent";
import React from "react";

const page = () => {
  const selectedRoute = "update-contact";

  return <ContactComponent selectedRoute={selectedRoute} />;
};

export default page;
