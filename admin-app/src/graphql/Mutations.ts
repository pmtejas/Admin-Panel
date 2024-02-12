import { gql } from "@apollo/client";

export const CREATE_HOME= gql`
mutation Mutation($homeInput: HomeInput!) {
  createHome(homeInput: $homeInput) {
    BestActivitiesToTry {
      description
      image
      name
    }
    logo
    tagline
    video
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

export const UPDATE_HOME= gql`
mutation Mutation($updateHomeId: ID!, $homeInput: HomeInput!) {
  updateHome(id: $updateHomeId, homeInput: $homeInput) {
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

export const DELETE_HOME= gql`
mutation Mutation($deleteHomeId: ID!) {
  deleteHome(id: $deleteHomeId) {
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
      Youtube
      Twitter
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


