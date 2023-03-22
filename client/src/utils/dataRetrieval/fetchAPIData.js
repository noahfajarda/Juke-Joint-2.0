import access from "../retrieve-authorization-token"
import dataRetrieval from "../fetch-API-data-&-colors"

// declare env variables
const client_id = import.meta.env.VITE_REACT_API_CLIENT_ID
const client_secret = import.meta.env.VITE_REACT_API_CLIENT_SECRET

async function fetchTrackData(track) {
  // retrieve access token
  const token = await access.getAccessToken(client_id, client_secret);

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

async function fetchAlbumData(album) {
  // retrieve access token
  const token = await access.getAccessToken(client_id, client_secret);

  // hit API for track to retrieve data & filter
  // pass in TOKEN & TRACK
  const test = await dataRetrieval.search_for_album(token, album)
  let data = await test.json();
  data = data.albums.items[0];

  // this is all API data retrieved
  console.log(data)


  // isolate all the data you need for the DB
  const albumDBDataToInsert = {
    albumName: data.name,
    albumArtist: data.artists[0].name,
    albumId: data.id
  }

  return albumDBDataToInsert;
}

export default { fetchTrackData, fetchAlbumData }