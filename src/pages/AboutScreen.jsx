import React, { useState, useEffect } from "react";

const AboutScreen = () => {
  const [gif, setGif] = useState("");

  useEffect(() => {
    getGifRandom().then((respuesta) => {
      console.log(respuesta.images.original.url);
    });
  }, []);

  const getGifRandom = async () => {
    const resp = await fetch(
      "https://api.giphy.com/v1/gifs/random?api_key=yGsEUd2oFkyppcVxZBZ5H2aB7uQLZRIf"
    );
    const { data } = await resp.json();

    return data;
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col">
          <h1>About Screen</h1>
          <hr />
        </div>
      </div>
    </div>
  );
};

export default AboutScreen;
