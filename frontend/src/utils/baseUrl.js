const baseUrl =
  process.env.NODE_ENV !== "production"
    ? "http://localhost:4000"
    : "https://rps-amazon-clone.herokuapp.com/";

module.exports = baseUrl;