import access from "../retrieve-authorization-token"
import dataRetrieval from "../fetch-API-data-&-colors"

export default async function fetchTrackData(track) {
  // retrieve access token
  const token = await access.getAccessToken();

  // hit API for track to retrieve data & filter
  // pass in TOKEN & TRACK
  const test = await dataRetrieval.search_for_track(token, track)
  let data = await test.json();
  data = data.tracks.items[0];

  // this is all API data retrieved
  console.log(data)


  // isolate all the data you need for the DB
  const trackDBDataToInsert = {
    trackName: data.name,
    trackArtist: data.artists[0].name,
    trackId: data.id,
    title: "Track",
    trackArt: data.album.images[1].url
    // for track art: 1=large, 2=medium, 3=small
  }

  return trackDBDataToInsert;
}
