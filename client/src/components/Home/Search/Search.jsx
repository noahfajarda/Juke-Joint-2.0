import React, { useEffect, useState } from "react";

// data retrieval
import fetchTrackData from "../../../utils/dataRetrieval/fetchTrackData";

export default function Search({ setId, setType, type }) {
  // set form state variables, change, submit
  const [form, setForm] = useState({
    search: "",
  });
  const handleChange = (event) => {
    const { name, value } = event.target;
    setForm({
      ...form,
      [name]: value,
    });
  };
  const handleSubmit = async (e) => {
    // get form info
    e.preventDefault();
    console.log(form);
    // maybe reset the form
    // setForm({ search: "" });

    // filtered track data already
    // refer to function to view all data retrieved
    const trackData = await fetchTrackData(form.search);
    console.log(trackData);

    // set the widget
    setType(type);
    setId(trackData.trackId);

    // display the widget
    const widgetContainerEl = document.querySelector(".spotify-widget");
    widgetContainerEl.style.display = "block";
  };

  return (
    <form
      name="new-post"
      id="search-post"
      onSubmit={(e) => {
        handleSubmit(e);
      }}
    >
      <input
        className="search-bar"
        type="text"
        id="search"
        name="search"
        value={form.search}
        onChange={handleChange}
      />
      <button type="submit" id="submit" className="submit">
        Search
      </button>
    </form>
  );
}
