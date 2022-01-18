const dbconnector = require("./dbconnector");
const db = dbconnector.db;

exports.getMembers = () => {
    const query = "SELECT * FROM members";
    let stmt = db.prepare(query);
    let res = stmt.all();
    return res;
}
