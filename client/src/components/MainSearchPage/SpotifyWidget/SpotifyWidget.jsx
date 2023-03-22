import React from "react";
import { Spotify } from "react-spotify-embed";
import "./SpotifyWidget.css";

export default function SpotifyWidget({ type, id }) {
  return (
    <div className="test">
      <Spotify
        className="test"
        link={`https://open.spotify.com/${type}/${id}`}
      />
      {/* alternative I-frame */}
      {/* <iframe
        style="border-radius: 5px"
        src={`https://open.spotify.com/embed/${type}/${id}?utm_source=generator`}
        width="100%"
        height="380"
        frameBorder="0"
        allowFullScreen=""
        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
        loading="lazy"
      ></iframe> */}
    </div>
  );
}
