const localHost = "http://localhost:5001/meal-to-go-e45ad/us-central1";
const liveHost = "https://localhost:5001/meal-to-go-e45ad/us-central1";

const isDevelopment = process.env.NODE_ENV === "development";

export const host = isDevelopment ? localHost : liveHost;
