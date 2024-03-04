/** @format */

import { Redis } from "@upstash/redis";

export const redis = new Redis({
  url: "https://us1-wondrous-python-40103.upstash.io",
  token: process.env.REDIS_KEY!,
});
