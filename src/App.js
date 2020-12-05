import React, { useState } from "react";
import "./App.css";
import Input from "./components/Input";

function App() {
  const [returnLink, setReturnLink] = useState("");
  const copyToClipboard = () => {
    navigator.clipboard.writeText(returnLink);
  };

  const callBackFunc = (message) => {
    setReturnLink(message);
  };
  return (
    <div className="app">
      <div className="app-header">
        <h1>URL SHORTNER</h1>
      </div>

      <div className="container">
        <div className="row">
          <div className="parent col-sm-12 col-md-6 col-xs-12">
            <div className="">
              <h3>Paste Long URL</h3>
              <Input parentCallBack={callBackFunc} />
            </div>{" "}
          </div>
        </div>
      </div>

      <div className="container">
        <div className="row">
          <div className="parent col-sm-12 col-md-6 col-xs-12">
            <h3>Short Link </h3>
            <div className="returnLinkCont">
              <p>{returnLink}</p>
            </div>
            <button className="btn btn-primary" conClick={copyToClipboard}>
              {" "}
              Copy to clipboard
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
