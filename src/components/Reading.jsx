import React from "react";

function Reading(props) {
  return (
    <div className="reading">
      <h1>{props.heading}</h1>
      <br />

      <p>{props.content}</p>
    </div>
  );
}

export default Reading;
