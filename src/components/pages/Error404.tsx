import React from "react";

const Error404 = () => {
  return (
    <div className="flex items-center justify-center">
      <div className="h-[100vh] flex items-center justify-between flex-row">
        <span>404</span>
        <p className="w-[50px] flex justify-center">|</p>
        <span>Not Found</span>
      </div>
    </div>
  );
};

export default Error404;
