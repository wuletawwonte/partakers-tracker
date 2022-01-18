const sqlite = require("better-sqlite3-with-prebuilds");
const db = new sqlite("../mydb.db");

exports.db = db;