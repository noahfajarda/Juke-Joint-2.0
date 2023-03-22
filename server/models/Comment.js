const { Schema, model } = require('mongoose');

const commentSchema = new Schema(
  {
    searchedItem: {
      type: String,
      required: true
    },
    body: {
      type: String,
      required: true
    },
    type: {
      type: String,
      required: true
    },
  });

const Comment = model('Comment', commentSchema)

module.exports = Comment;