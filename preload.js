const { contextBridge } = require("electron");
const membersModel = require("./db/membersmodel");

const getMembers = async (searchKey = '') => {
    return membersModel.getMembers(searchKey);
}

const addMember = (member) => {
    membersModel.addMember(member);
}

const getMember = async (id) => {
    return membersModel.getMember(id);
}

contextBridge.exposeInMainWorld("api", {
    getMembers,
    addMember,
    getMember
});