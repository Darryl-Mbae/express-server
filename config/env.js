import { config } from "dotenv";

config({ path: `.env.${process.env.NODE_ENV || 'development'}.local` });

export const {PORT, NODE_ENV, REDIS_URL, OPTIMIZE_API_KEY, ARCJET_KEY, ARCJET_ENV} = process.env;
