import { RequestParameters } from 'relay-runtime/lib/util/RelayConcreteNode';
import { Variables } from 'relay-runtime/lib/util/RelayRuntimeTypes';

export const fetchGraphQL = async (request: RequestParameters, variables: Variables) => {
  const response = await fetch(import.meta.env.VITE_GRAPHQL_URL, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-type': 'application/json',
    },
    body: JSON.stringify({
      query: request.text,
      variables,
    }),
  });

  const data = await response.json();

  if (Array.isArray(data.errors)) {
    console.log(data.errors);
    throw new Error(
      `Error fetching GraphQL query '${
        variables.name
      }' with variables '${JSON.stringify(variables)}': ${JSON.stringify(
        data.errors
      )}`
    );
  }

  return data;
};
