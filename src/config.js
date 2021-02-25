export function getConfig() {
  // Configure the audience here. By default, it will take whatever is in the config
  // (specified by the `audience` key) unless it's the default value of "YOUR_API_IDENTIFIER" (which
  // is what you get sometimes by using the Auth0 sample download tool from the quickstart page, if you
  // don't have an API).
  // If this resolves to `null`, the API page changes to show some helpful info about what to do
  // with the audience.

  const config = {
    domain: process.env.REACT_APP_AUTH_DOMAIN,
    clientId: process.env.REACT_APP_AUTH_CLIENT_ID,
    audience: process.env.REACT_APP_AUTH_AUDIENCE,
  };

  const audience =
    config.audience && config.audience !== 'YOUR_API_IDENTIFIER'
      ? config.audience
      : null;

  return {
    domain: config.domain,
    clientId: config.clientId,
    ...(audience ? {audience} : null),
  };
}
