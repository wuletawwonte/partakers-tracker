document.addEventListener("DOMContentLoaded", async () => {
    let names = window.api.getMembers();

    let membersList = document.getElementById("app");
    console.log(names);
    let memberNames = names.map((member) => {return member.firtname}).join("<br />");

    membersList.innerHTML = memberNames;

});