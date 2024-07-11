import { defineConfig } from "drizzle-kit";

export default defineConfig({
  schema: "./configs/schema.js",
  out: "./drizzle",
  dialect: "postgresql",
  dbCredentials: {
    url: "postgresql://neondb_owner:luQR6LhzyM1T@ep-falling-sea-a54ot0he.us-east-2.aws.neon.tech/AI-Form-Builder?sslmode=require",
  },
});
