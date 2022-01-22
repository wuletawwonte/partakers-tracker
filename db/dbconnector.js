const sqlite = require("better-sqlite3-with-prebuilds");
let db = sqlite("evan.db", {fileMustExist: true});

exports.db = db;