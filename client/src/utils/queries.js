import { gql } from "@apollo/client";

export const QUERY_me = gql`
  query Me {
    me {
      _id
      firstName
      lastName
      username
      email
      password
      searchedSongs {
        _id
        trackName
        trackArtist
        trackId
        title
        trackArt
      }
    }
  }
`;