const { contextBridge } = require("electron");
const membersModel = require("./db/membersmodel");

const getMembers = () => {
    return membersModel.getMembers();
}

contextBridge.exposeInMainWorld("api", {
    getMembers: getMembers
});