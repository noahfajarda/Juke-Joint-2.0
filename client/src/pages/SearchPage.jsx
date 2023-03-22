import React, { useEffect, useState } from "react";
import { Link, Navigate } from "react-router-dom";

// css
import "../styles/SearchPage.css";

// spotify widget component
import SpotifyWidget from "../components/Home/SpotifyWidget/SpotifyWidget";
import Search from "../components/Home/Search/Search";

export default function SearchPage({ user }) {
  // see if you can get the user
  // console.log(user);

  // type & track variables to change for spotify widget
  const [type, setType] = useState("");
  const [id, setId] = useState("");

  return (
    <div>
      {/* display widget */}
      <div className="spotify-widget">
        <SpotifyWidget type={type} id={id} />
      </div>
      {/* search container */}
      <Search setType={setType} setId={setId} type="track" />
      <Link to={`/home`}>Go Home</Link>
    </div>
  );
}
