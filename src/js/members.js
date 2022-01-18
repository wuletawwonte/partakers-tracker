document.addEventListener("DOMContentLoaded", async () => {
    let names = window.api.getMembers();

    let membersList = document.getElementById("app");
    let memberNames = names.map(member => member.firstname).join("<br />");

    membersList.innerHTML = memberNames;

});