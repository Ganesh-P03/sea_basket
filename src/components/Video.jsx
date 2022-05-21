import React from "react";

function Video() {
  return (
    <div className="dis_video">
      <h1 className="video_heading">Glance</h1>
      <center>
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/V7-IElAjgpQ"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
      </center>
    </div>
  );
}

export default Video;
