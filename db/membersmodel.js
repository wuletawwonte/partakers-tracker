const dbconnector = require("./dbconnector");
const db = dbconnector.db;

exports.getMembers = (searchKey) => {
    const query = `SELECT * FROM members WHERE firstname LIKE '%${searchKey}%'  OR middlename LIKE '%${searchKey}%' OR lastname LIKE '%${searchKey}%' ORDER BY id DESC LIMIT 5`;
    let stmt = db.prepare(query);
    let res = stmt.all();
    return res;
}

exports.addMember = (member) => {
    const query = `INSERT INTO members(firstname, middlename, lastname, phone_number, amount, created) values 
    ('${member.firstname}', '${member.middlename}', '${member.lastname}', '${member.phoneNumber}', '${member.amount}', '${member.created}')`;
    db.exec(query);
}
