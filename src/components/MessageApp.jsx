import React, { useEffect } from "react";

const MessageApp = () => {
  useEffect(() => {
    return () => {
      console.log("Me desmonté :(");
    };
  }, []);

  return (
    <div className="alert alert-primary text-center" role="alert">
      Se agregó usuario con éxito!
    </div>
  );
};

export default MessageApp;
