import { Platform } from "react-native";

const localHost = "http://localhost:5001/meal-to-go-e45ad/us-central1";
const liveHost = "https://us-central1-meal-to-go-e45ad.cloudfunctions.net";

const isAndroid = Platform.OS === "android";

const isDevelopment = process.env.NODE_ENV === "development";
export const isMock = true;

export const host = isDevelopment && !isAndroid ? localHost : liveHost;
