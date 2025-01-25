/** @type { import("drizzle-kit").Config } */
export default {
    schema: "./configs/schema.js",
    dialect: "postgresql",
    dbCredentials: {
        url: 'postgresql://neondb_owner:npg_bSMec4n3EFzV@ep-wandering-hall-a24by8f3-pooler.eu-central-1.aws.neon.tech/neondb?sslmode=require',
    }
};