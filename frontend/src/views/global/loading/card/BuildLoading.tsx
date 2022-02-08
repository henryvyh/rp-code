import React from "react";
import CardLoading from "./CardLoading";

const BuildLoading: React.FC = () => {
  return (
    <>
      {Array.from(Array(12)).map((item, i) => (
        <CardLoading key={i} />
      ))}
    </>
  );
};
export default BuildLoading;
