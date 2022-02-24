import "./App.css";
import Header from "./Components/Header";
import Content from "./Components/Content";
import "./css/Style.css";
import FadeIn from "react-fade-in";
import Lottie from "react-lottie";
import animationData from "./Loadding/87911-loading.json";
import animationDatatext from "./Loadding/97124-loading.json";


import React, { useState, useEffect } from "react";

function App() {
  const [Loadding, setLoadding] = useState(true);

    useEffect(() => {

            setTimeout(() => {
                    setLoadding(false)
            }, 2000);
       
    }, [])

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  const defaultOptionstext = {
    loop: true,
    autoplay: true,
    animationData: animationDatatext,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
    <div>
      {Loadding ? (
          <div className="div-loadding container-xl">
             <div className="centered">
        <FadeIn>
          <Lottie options={defaultOptions} height={300} width={300} />
          <Lottie options={defaultOptionstext} height={300} width={300} />
        </FadeIn>
        </div>
        </div>
      ) : (
        <div className="container-xl ">
        <FadeIn>
          <Header />
          <Content />
        </FadeIn>
        </div>
        
      )}
    </div>
  );
}

export default App;
