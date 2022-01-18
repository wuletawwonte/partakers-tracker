const dbconnector = require("./dbconnector");
const db = dbconnector.db;

exports.getMembers = () => {
    const query = "SELECT * FROM test";
    let stmt = db.prepare(query);
    console.log(stmt);
    let res = stmt.all();
    return res;
}