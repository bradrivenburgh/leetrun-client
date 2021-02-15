let API_ENDPOINT = "";

API_ENDPOINT = (process.env.NODE_ENV === 'development')
  ? "http://localhost:8000/api"
  : process.env.REACT_APP_API_ENDPOINT

const config = {
  API_ENDPOINT,
  API_TOKEN: process.env.REACT_APP_API_TOKEN,
  TOKEN_KEY: 'leetrun-client-auth-token',
}

export default config;