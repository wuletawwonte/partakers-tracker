const { contextBridge } = require("electron");
const membersModel = require("./db/membersmodel");

const getMembers = async (searchKey = "") => {
    console.log(searchKey);
    return membersModel.getMembers(searchKey);
}

const addMember = (member) => {
    membersModel.addMember(member);
}

contextBridge.exposeInMainWorld("api", {
    getMembers,
    addMember
});