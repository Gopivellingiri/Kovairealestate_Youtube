import React from "react";

const Layout = ({ children, className = "" }) => {
  return (
    <section className={`max-w-325 mx-auto py-10 px-5 ${className}`}>
      {children}
    </section>
  );
};

export default Layout;
