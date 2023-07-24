import EditHeader from "@/components/header/EditHeader";
import HeaderComponent from "@/components/header/header";
import React from "react";

const Features = () => {
  return (
    <div>
      <div className="bg-white py-8 h-screen">
        <HeaderComponent />
        <div>
        <EditHeader />
        </div>
      </div>
    </div>
  );
};

export default Features;
