import { ApolloClient, InMemoryCache } from '@apollo/client';

const SKETCH_API_URL = 'https://graphql.sketch.cloud/api';

export const SketchApiClient = new ApolloClient({
  uri: SKETCH_API_URL,
  cache: new InMemoryCache(),
});
