document.addEventListener("DOMContentLoaded", async () => {
    let names = [];
    let memberAddedAlert = document.getElementById("memberAddedAlert");
    let membersList = document.getElementById("membersContainer");
    let searchField = document.getElementById("searchfield");

    searchField.addEventListener("keyup", () => {
        reloadTable(searchField.value);
    });

    const memberRegisteredMessage = (alertElement) => {
        if (sessionStorage.getItem("message") != null) {
            let message = sessionStorage.getItem("message");
            alertElement.innerHTML = `<div class="alert alert-success">${message}</div>`;
            sessionStorage.removeItem("message");
        }
    };

    // invoke member added alert function
    memberRegisteredMessage(memberAddedAlert);

    // names.then((members) => {
    //     console.log(members);
    // })
    // .catch((err) => {
    //     console.log(err);
    // });

    const loadedMembers = (names) => {
        let memberNames = names
            .map((member) => {
                return `<tr>
                    <td><a class="member-link" href="#">${member.firstname} ${member.middlename}</a></td>
                    <td><button>Delete</button></td>
                </tr>
                `;
            })
            .join("");

        if (memberNames.length == 0) {
            return "የተመዘገበ አባል የለም። እባክዎን አባል በመመዝገብ ይጀምሩ።";
        } else {
            return membersTable(memberNames);
        }
    };

    // invoke load members function
    membersList.innerHTML = loadedMembers(names);

    const reloadTable = (search) => {
        window.api.getMembers(search)
            .then((member) => {
            names = member;
            console.log(member);
            membersList.innerHTML = loadedMembers(names);
        })
        .catch(err => {
            console.log(err);
        });
    };

    reloadTable();

    const membersTable = (names) => {
        let tableContent = `
                <table class="table table-hover table-sm table-bordered table-striped"> 
                    <thead>
                        <tr>
                            <th>አባላት</th>
                            <th>ተግባር</th>
                        </tr>
                    </thead>
                    <tbody>
                        ${names}
                    </tbody>
                </table>
            `;
        return tableContent;
    };
});
