import { defineConfig } from "cypress";
import "dotenv/config";
import { config } from "dotenv";
import { baseConfig } from "./baseConfig";

config({ path : `.env.prod` });

const configObj = { 
  ...baseConfig, 
  e2e: {
    baseUrl: process.env.BASE_URL,
  }, 
  env: {
    USERNAME: process.env.USERNAME,
    PASSWORD: process.env.PASSWORD,
  }
};

export default defineConfig(configObj);