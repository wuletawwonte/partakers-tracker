document.addEventListener("DOMContentLoaded", async () => {
    const page = {
        start: 0,
        end: 9,
    };
    let names = [];
    let memberAddedAlert = document.getElementById("memberAddedAlert");
    let membersList = document.getElementById("membersContainer");
    let searchField = document.getElementById("searchfield");
    let paginationContainer = document.getElementById("paginationContainer");
    const prevBtn = document.getElementById("prev-button");
    const nextBtn = document.getElementById("next-button");

    prevBtn.addEventListener("click", () => {
        page.start -= 10;
        page.end -= 10;
        reloadTable(searchField.value);
    });

    nextBtn.addEventListener("click", () => {
        page.start += 10;
        page.end += 10;
        reloadTable(searchField.value);
    });

    const pageReset = () => {
        page.start = 0;
        page.end = 9;
    };

    searchField.addEventListener("keyup", () => {
        pageReset();
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

    const loadedMembers = (names) => {
        let memberNames = names
            .map((member, index) => {
                return `<tr>
                    <td>${++index}</td>
                    <td><a class="member-link" href="memberdetails.html">${
                        member.firstname
                    }</a></td>
                    <td><a class="member-link" href="#">${
                        member.middlename
                    }</a></td>
                    <td><a class="member-link" href="#">${
                        member.lastname
                    }</a></td>
                    <td><a class="member-link" href="#">${
                        member.phone_number
                    }</a></td>
                    <td><button>Delete</button></td>
                </tr>
                `;
            })
            .filter((member, index) => {
                if (index >= page.start && index <= page.end) {
                    return member;
                }
            })
            .join("");

        if (names.length == 0) {
            paginationContainer.style = "display: none";
            return `<span>የተመዘገበ አባል የለም። እባክዎን አባል በመመዝገብ ይጀምሩ።</span>`;
        } else {
            if (names.length > 10) {
                paginationContainer.style = "display: block";
                if (page.start == 0) {
                    prevBtn.style = "pointer-events: none; color: gray;";
                } else {
                    prevBtn.style = "display: block";
                }
                if (page.end > names.length) {
                    nextBtn.style = "pointer-events: none; color: gray;";
                } else {
                    nextBtn.style = "display: black";
                }
            } else {
                paginationContainer.style = "display: none";
            }
            return membersTable(memberNames);
        }
    };

    const reloadTable = (search) => {
        window.api
            .getMembers(search)
            .then((member) => {
                names = member;
                membersList.innerHTML = loadedMembers(names);
            })
            .catch((err) => {
                console.log(err);
            });
    };

    reloadTable();

    const membersTable = (names) => {
        let tableContent = `
                <table class="table table-hover table-sm table-bordered table-striped"> 
                    <thead>
                        <tr>
                            <th></th>
                            <th>ስም</th>
                            <th>የአባት ስም</th>
                            <th>የአያት ስም</th>
                            <th>ስልክ ቁጥር</th>
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
