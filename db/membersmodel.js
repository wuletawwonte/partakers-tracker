const dbconnector = require("./dbconnector");
const db = dbconnector.db;

exports.getMembers = () => {
    const query = "SELECT * FROM members ORDER BY id DESC";
    let stmt = db.prepare(query);
    let res = stmt.all();
    return res;
}

exports.addMember = (member) => {
    const query = `INSERT INTO members(firstname, middlename, lastname, phone_number, amount) values 
    ('${member.firstname}', '${member.middlename}', '${member.lastname}', '${member.phoneNumber}', '${member.amount}')`;
    db.exec(query);
}
