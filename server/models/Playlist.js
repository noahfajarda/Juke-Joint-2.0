const { Schema, model } = require('mongoose');

const playlistSchema = new Schema(
  {
    trackId: {
      type: String,
      required: true
    },
    trackName: {
      type: String,
      required: true
    },
    trackArtist: {
      type: String,
      required: true
    },
    trackArt: {
      type: String,
      required: true
    }
  });

const Playlist = model('Playlist', playlistSchema)

module.exports = Playlist;