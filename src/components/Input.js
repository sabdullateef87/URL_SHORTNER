import React, { useState } from "react";
import { getUrlToDom } from "../apis/getLongUrl";

function Input({ parentCallBack }) {
  const [copiedUrl, setcopiedUrl] = useState("");
  const [shortUrl, setShortUrl] = useState("");

  const sendData = () => {
    parentCallBack(shortUrl);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await getUrlToDom(copiedUrl);
    setShortUrl(response.data.data.shortUrl);
    sendData();
    console.log(response.data.data.shortUrl);
  };

  const handleChange = (e) => {
    e.preventDefault();
    setcopiedUrl(e.target.value);
  };

 
  return (
    <div className="form-container">
      <form onSubmit={handleSubmit} className="forms">
        <div className="form-group">
          <input
            type="text"
            className="form-control"
            placeholder="Paste Your Long URL"
            onChange={handleChange}
            value={copiedUrl}
          />
        </div>

        <div className="submit-container">
          <button type="submit" className="btn btn-primary">
            CLICK TO SHORTEN
          </button>
        </div>
      </form>
    </div>
  );
}

export default Input;
