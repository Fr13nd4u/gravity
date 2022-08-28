import React, { FC, useState } from "react";

import image1 from "../assets/chubaka.jpg";
import image2 from "../assets/dogs.jpg";
import image3 from "../assets/dyno.jpg";
import { url } from "../url";
import { useNumbers } from "../utils";

import "./App.css";
import ImageComponent from "./ImageComponent";

const App: FC = () => {
  const [show, setShow] = useState<boolean>(false);
  const showPromise = useNumbers(url);
  showPromise.then((res) => setShow(res));

  return (
    <div className="app">
      <div className="app-content">
        <ImageComponent src={image1} show={show} />
        <ImageComponent src={image2} show={show} />
        <ImageComponent src={image3} show={show} />
      </div>
    </div>
  );
};

export default App;
