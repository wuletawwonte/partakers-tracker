document.addEventListener("DOMContentLoaded", async () => {
    let names = window.api.getMembers();
    let memberAddedAlert = document.getElementById('memberAddedAlert');
    if(sessionStorage.getItem('message') != null) {
        let message = sessionStorage.getItem('message');
        memberAddedAlert.innerHTML = `<div class="alert alert-success">${message}</div>`;
        sessionStorage.removeItem('message');
    }

    let membersList = document.getElementById("membersContainer");
    let memberNames = names
        .map((member) => {
            return `<tr>
                    <td>${member.firstname} ${member.middlename}</td>
                    <td><button>Delete</button></td>
                </tr>
                `;
        }).join("");

    if (memberNames.length == 0) {
        membersList.innerHTML = "የተመዘገበ አባል የለም። እባክዎን አባል በመመዝገብ ይጀምሩ።";
    } else {
        let tableContent = `
            <table class="table table-hover table-sm table-bordered table-striped"> 
                <thead>
                    <tr>
                        <th>አባላት</th>
                        <th>ተግባር</th>
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
