document.addEventListener("DOMContentLoaded", async () => {
    let names = window.api.getMembers();

    let membersList = document.getElementById("app");
    let memberNames = names
        .map((member) => {
            return `<tr>
                    <td>${member.firstname} ${member.lastname}</td>
                    <td><button>Delete</button></td>
                </tr>
                `;
        }).join("");

    if (memberNames.length == 0) {
        membersList.innerHTML = "No Member Registered Yet";
    } else {
        let tableContent = `
            <table class="table table-hover table-info"> 
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
