const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type Artist {
    _id: ID!
    name: String!
  }

  type SearchedSong {
    _id: ID!
    trackName: String!
    trackArtist: String!
    trackId: String!
    title: String!
    trackArt: String!
  }

  type User {
    _id: ID
    firstName: String!
    lastName: String!
    username: String!
    email: String!
    password: String!
    searchedSongs: [SearchedSong]
  }
  type Auth {
    token: ID!
    user: User
  }

  type Comment {
    _id: ID!
    searchedItem: String!
    body: String!
    type: String!
  }

  type Like {
    _id: ID!
    trackId: String!
    trackName: String!
    trackArtist: String!
    trackArt: String!
  }

  type Playlist {
    _id: ID!
    trackId: String!
    trackName: String!
    trackArtist: String!
    trackArt: String!
  }

  type Query {
    # Read All
    artists: [Artist]
    searchedSongs: [SearchedSong]
    users: [User]
    comments: [Comment]
    likes: [Like]
    playlistTracks: [Playlist]
    # me: Auth
    me: User
  }

  type Mutation {
    # Create
    addArtist(name: String!): Artist
    addSearchedSong(trackName: String!, trackArtist: String!, trackId: String!, title: String!, trackArt: String!): SearchedSong
    addUser(firstName: String!, lastName: String!, username: String!, email: String!, password: String!): Auth
    addComment(searchedItem: String!, body: String!, type: String!): Comment
    addLike(trackId: String!, trackName: String!, trackArtist: String!, trackArt: String!): Like
    addPlaylistTrack(trackId: String!, trackName: String!, trackArtist: String!, trackArt: String!): Playlist

    # Delete
    deleteArtist(_id: ID!): Artist
    deleteSearchedSong(_id: ID!): SearchedSong
    deleteUser(_id: ID!): User
    deleteComment(_id: ID!): Comment
    deleteLike(_id: ID!): Like
    deletePlaylistTrack(_id: ID!): Playlist
  }
`;

module.exports = typeDefs;
