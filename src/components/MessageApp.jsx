import React, { useEffect } from "react";

const MessageApp = () => {
  useEffect(() => {
    //monta
    console.log("Me monté :)");
    //cuando se desmonta
    return () => {
      console.log("Me desmonté :(");
    };
  }, []);

  return (
    <div className="alert alert-primary text-center mt-3" role="alert">
      se agregó usuario con éxito
    </div>
  );
};

export default MessageApp;
