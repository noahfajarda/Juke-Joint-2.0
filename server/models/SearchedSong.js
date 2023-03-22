const { Schema, model } = require('mongoose');

const searchedSongSchema = new Schema(
  {
    trackName: {
      type: String,
      required: true
    },
    trackArtist: {
      type: String,
      required: true
    },
    trackId: {
      type: String,
      required: true
    },
    title: {
      type: String,
      required: true
    },
    trackArt: {
      type: String,
      required: true
    },
  });

const SearchedSong = model('SearchedSong', searchedSongSchema)

module.exports = SearchedSong;