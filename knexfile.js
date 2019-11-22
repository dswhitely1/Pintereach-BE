// Update with your config settings.
require('dotenv').config();
const dbConnnection = process.env.DATABASE_URL;

module.exports = {
  development: {
    client: 'pg',
    connection: {
      host: process.env.DB_HOST,
      database: process.env.DB_NAME,
      user: process.env.DB_USER,
      password: process.env.DB_PASS
    },
    useNullAsDefault: true,
    migrations: {
      directory: "./data/migrations"
    },
    seeds: {
      directory: "./data/seeds"
    }
  },

  testing: {
    client: "sqlite3",
    connection: {
      filename: "./data/test.db3"
    },
    useNullAsDefault: true,
    migrations: {
      directory: "./data/migrations"
    },
    seeds: {
      directory: "./data/seeds"
    }
  },

  production: {
    client: "pg",
    connection: dbConnnection,
    migrations: {
      directory: "./data/migrations"
    },
    seeds: {
      directory: "./data/seeds"
    },
    useNullAsDefault: true,
    pool: {
      min: 2,
      max: 10,
    }
  }
};
