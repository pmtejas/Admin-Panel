import { gql } from "@apollo/client";

export const GET_HOME = gql`
query Query($homeId: ID!) {
  home(id: $homeId) {
    BestActivitiesToTry {
      description
      image
      name
    }
    Destination {
      description
      image
      name
    }
    Ferries {
      description
      image
      name
      place
    }
    SightSeeings {
      description
      image
      name
    }
    SocialMediaLinks {
      Facebook
      Instagram
      Twitter
      Youtube
    }
    TopBeaches {
      description
      image
      name
      place
    }
    TopsellingPackages {
      description
      image
      name
      price
    }
    logo
    tagline
    video
  }
}
`;

export const GET_HOMES = gql`
query Query {
  homes {
    logo
    tagline
    video
    BestActivitiesToTry {
      description
      image
      name
    }
    Destination {
      description
      image
      name
    }
    Ferries {
      description
      image
      name
      place
    }
    SightSeeings {
      description
      image
      name
    }
    SocialMediaLinks {
      Facebook
      Instagram
      Twitter
      Youtube
    }
    TopBeaches {
      description
      image
      name
      place
    }
    TopsellingPackages {
      description
      image
      name
      price
    }
  }
}
`;

