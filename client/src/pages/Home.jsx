import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

// css
import "../styles/Home.css";

export default function Home({ user }) {
  return (
    <div>
      <Link to={`/search`}>Go to Search</Link>
    </div>
  );
}
