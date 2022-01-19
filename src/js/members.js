document.addEventListener("DOMContentLoaded", async () => {
    let names = window.api.getMembers();

    let membersList = document.getElementById("app");
    let memberNames = names
        .map((member) => {
            return "<tr>" + member.firstname + " " + member.lastname + "</tr>";
        })
        .join("<br />");

    if (memberNames.length == 0) {
        membersList.innerHTML = "No Member Registered Yet";
    } else {
        membersList.innerHTML = memberNames;
    }
});
