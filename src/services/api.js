import axios from "axios";

export const key = "016aedba4966a38bcc359dbf0ff06ac555c7e6b4";

export const api = axios.create({
  baseURL: "https://api-ssl.bitly.com/v4",
  headers: {
    Authorization: `Bearer ${key}`,
    "Content-Type": "application/json",
  },
});
