const dbconnector = require("./dbconnector");
const db = dbconnector.db;

exports.getMembers = (searchKey) => {
    console.log(searchKey);
    const query = `SELECT * FROM members WHERE firstname LIKE '%${searchKey}%' ORDER BY firstname`;
    let stmt = db.prepare(query);
    let res = stmt.all();
    console.log(res);
    return res;
}

exports.addMember = (member) => {
    const query = `INSERT INTO members(firstname, middlename, lastname, phone_number, amount) values 
    ('${member.firstname}', '${member.middlename}', '${member.lastname}', '${member.phoneNumber}', '${member.amount}')`;
    db.exec(query);
}
