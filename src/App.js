import React, { useState } from "react";
import "./App.css";
import Input from "./components/Input";

function App() {
  const [returnLink, setReturnLink] = useState("");

  const callBackFunc = (message) => {
    setReturnLink(message);
  };
  return (
    <div className="app">
      <div className="app-header col-sm-12 col-md-12 col-xs-12">
        <h1>URL SHORTNER</h1>
      </div>

      <div className="parent col-sm-12 col-md-12 col-xs-12">
        <h3>Paste Long URL</h3>
        <Input parentCallBack={callBackFunc} />
      </div>

      <div className="parent col-sm-12 col-md-12 col-xs-12">
        <h3>Short Link </h3>
        <p>{returnLink}</p>
      </div>
    </div>
  );
}

export default App;
