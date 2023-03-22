const { Schema, model } = require('mongoose');

const likeSchema = new Schema(
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

const Like = model('Like', likeSchema)

module.exports = Like;