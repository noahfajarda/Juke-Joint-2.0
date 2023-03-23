const { Artist, SearchedSong, User, Comment, Like, Playlist } = require('../models');
const { signToken } = require('../utils/auth');
const bcrypt = require('bcrypt');
const { AuthenticationError } = require('apollo-server-express');

const resolvers = {
  Query: {
    // read all
    artists: async () => {
      try {
        return await Artist.find({});
      } catch (err) {
        console.log("\n\n\nThere was a server-side error: \n\n\n", err)
      }
    },
    searchedSongs: async () => {
      try {
        return await SearchedSong.find({});
      } catch (err) {
        console.log("\n\n\nThere was a server-side error: \n\n\n", err)
      }
    },
    users: async () => {
      try {
        return await User.find({});
      } catch (err) {
        console.log("\n\n\nThere was a server-side error: \n\n\n", err)
      }
    },
    comments: async () => {
      try {
        return await Comment.find({});
      } catch (err) {
        console.log("\n\n\nThere was a server-side error: \n\n\n", err)
      }
    },
    likes: async () => {
      try {
        return await Like.find({});
      } catch (err) {
        console.log("\n\n\nThere was a server-side error: \n\n\n", err)
      }
    },
    playlistTracks: async () => {
      try {
        return await Playlist.find({});
      } catch (err) {
        console.log("\n\n\nThere was a server-side error: \n\n\n", err)
      }
    },
    // GET ONE USER!!
    me: async (parent, args, context) => {
      if (context.user) {
        return User.findOne({ _id: context.user._id })
      }
      throw new AuthenticationError('You need to be logged in!');
    },
  },
  Mutation: {
    // add
    addArtist: async (parent, { name }) => {
      return await Artist.create({ name })
    },
    addSearchedSong: async (parent, { trackName, trackArtist, trackId, title, trackArt }) => {
      return await SearchedSong.create({ trackName, trackArtist, trackId, title, trackArt })
    },
    addUser: async (parent, { firstName, lastName, username, email, password }) => {
      try {
        const user = await User.create({ firstName, lastName, username, email, password })
        const token = signToken(user)
        return { user, token }
      } catch (error) {
        console.log(error)
      }
    },
    addComment: async (parent, { searchedItem, body, type }) => {
      return await Comment.create({ searchedItem, body, type })
    },
    addLike: async (parent, { trackId, trackName, trackArtist, trackArt }) => {
      return await Like.create({ trackId, trackName, trackArtist, trackArt })
    },
    addPlaylistTrack: async (parent, { trackId, trackName, trackArtist, trackArt }) => {
      return await Playlist.create({ trackId, trackName, trackArtist, trackArt })
    },
    // delete
    deleteArtist: async (parent, { _id }) => {
      return Artist.findOneAndDelete({ _id });
    },
    deleteSearchedSong: async (parent, { _id }) => {
      return SearchedSong.findOneAndDelete({ _id });
    },
    deleteUser: async (parent, { _id }) => {
      return User.findOneAndDelete({ _id });
    },
    deleteComment: async (parent, { _id }) => {
      return Comment.findOneAndDelete({ _id });
    },
    deleteLike: async (parent, { _id }) => {
      return Like.findOneAndDelete({ _id });
    },
    deletePlaylistTrack: async (parent, { _id }) => {
      return Playlist.findOneAndDelete({ _id });
    }
  }
};

module.exports = resolvers;