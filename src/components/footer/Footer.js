import React from "react";

const Footer = () => {
  let today = new Date().getFullYear()
  return (
    <div className="--flex-center --py2">
      <p>All Rights Reserved. &copy; `${today}`</p>
    </div>
  );
};

export default Footer;
