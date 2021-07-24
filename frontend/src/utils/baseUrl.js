const baseUrl =
  process.env.NODE_ENV !== "production"
    ? "http://localhost:4000"
    : "https://raghu-amazon-clone.herokuapp.com";

module.exports = baseUrl;