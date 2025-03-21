import Redis from "ioredis";
import { REDIS_URL } from "../config/env.js";

// Connect to Upstash Redis
const redis = new Redis(REDIS_URL);

export default redis;
