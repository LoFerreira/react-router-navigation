import React from "react";
import { useParams } from "react-router-dom";

const Params = (props) => {
  const { id } = useParams();

  return (
    <div className="params">
      <h1>Component Home</h1>
      <p>Valor: {id}</p>
    </div>
  );
};

export default Params;
