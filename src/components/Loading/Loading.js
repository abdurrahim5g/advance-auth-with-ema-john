import React from "react";
import loadingImg from "../../images/loading-gif.gif";
import "./Loading.css";

const Loading = () => {
  return (
    <div className="loading-component">
      <img src={loadingImg} alt="" />
    </div>
  );
};

export default Loading;
