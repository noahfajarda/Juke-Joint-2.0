import React, { useEffect, useState } from "react";

// data retrieval
import retrieveData from "../../../utils/dataRetrieval/fetchTrackData";

export default function Search({ setId, setType, type }) {
  // set form state variables, change, submit
  const [form, setForm] = useState({
    search: "",
    type: "track",
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

    if (form.type === "track") {
      // filtered track data already
      // refer to function to view all data retrieved
      const trackData = await retrieveData.fetchTrackData(form.search);
      console.log(trackData);

      // set the widget
      setType(type);
      setId(trackData.trackId);
    } else if (form.type === "artist") {
      console.log("do the search artist function");
    }

    // display the widget
    const widgetContainerEl = document.querySelector(".spotify-widget");
    widgetContainerEl.style.display = "block";
  };
  const types = ["track", "artist", "album"];

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

      <select id="type" name="type" value={form.type} onChange={handleChange}>
        {types.map((type) => {
          return (
            <option value={type} key={type}>
              {type}
            </option>
          );
        })}
      </select>

      <button type="submit" id="submit" className="submit">
        Search
      </button>
    </form>
  );
}
