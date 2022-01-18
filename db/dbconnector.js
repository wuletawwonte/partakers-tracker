const sqlite = require("better-sqlite3-with-prebuilds");
let db = sqlite("evandb", {fileMustExist: true});

exports.db = db;