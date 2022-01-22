document.addEventListener("DOMContentLoaded", async () => {
    let names = window.api.getMembers();

    let membersList = document.getElementById("membersContainer");
    let memberNames = names
        .map((member) => {
            return `<tr>
                    <td>${member.firstname} ${member.lastname}</td>
                    <td><button>Delete</button></td>
                </tr>
                `;
        }).join("");

    if (memberNames.length == 0) {
        membersList.innerHTML = "የተመዘገበ አባል የለም። እባክዎን አባል በመመዝገብ ይጀምሩ።";
    } else {
        let tableContent = `
            <table class="table table-hover table-bordered"> 
                <thead>
                    <tr>
                        <th>Names</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    ${memberNames}
                </tbody>
            </table>
        `;
        membersList.innerHTML = tableContent;
    }
});
