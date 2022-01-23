const { contextBridge } = require("electron");
const membersModel = require("./db/membersmodel");

const getMembers = () => {
    return membersModel.getMembers();
}

const addMember = (member) => {
    membersModel.addMember(member);
}

contextBridge.exposeInMainWorld("api", {
    getMembers,
    addMember
});