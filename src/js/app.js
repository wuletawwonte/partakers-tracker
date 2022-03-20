const saveMemberBtn = document.getElementById("saveMember");

saveMemberBtn.addEventListener("click", (e) => {
  e.preventDefault();

  // Input fields
  const firstname = document.getElementById("firstname");
  const middlename = document.getElementById("middlename");
  const lastname = document.getElementById("lastname");
  const phoneNumber = document.getElementById("phone");
  const amount = document.getElementById("amount");

  // Input Field Error Message Containers
  const firstnameError = document.getElementById("firstname-error");
  const middlenameError = document.getElementById("middlename-error");
  const lastnameError = document.getElementById("lastname-error");
  const phoneNumberError = document.getElementById("phone-error");
  const amountError = document.getElementById("amount-error");

  const validate = () => {
    let errorStatus = true;
    if (firstname.validity.valueMissing) {
      errorStatus = false;
      firstnameError.innerHTML = "እባክዎን ስም ሳይሞሉ አይለፉ";
      firstnameError.style = "display: block";
    } else {
      firstnameError.style = "display: none";
    }
    if (middlename.validity.valueMissing) {
      errorStatus = false;
      middlenameError.innerHTML = "እባክዎን የአባት ስም ሳይሞሉ አይለፉ";
      middlenameError.style = "display: block";
    } else {
      middlenameError.style = "display: none";
    }
    if (lastname.validity.valueMissing) {
      errorStatus = false;
      lastnameError.innerHTML = "እባክዎን የአያት ስም ሳይሞሉ አይለፉ";
      lastnameError.style = "display: block";
    } else {
      lastnameError.style = "display: none";
    }
    if (amount.validity.valueMissing) {
      errorStatus = false;
      amountError.innerHTML = "እባክዎን ወራዊ መዋጮ ሳይሞሉ አይለፉ";
      amountError.style = "display: block";
    } else {
      amountError.style = "display: none";
    }
    return errorStatus;
  };

  if (validate()) {
    console.log("form properly validated");
    const newMember = {
      firstname: firstname.value,
      middlename: middlename.value,
      lastname: lastname.value,
      phoneNumber: phoneNumber.value,
      amount: amount.value,
      created: Date.now(),
    };
    window.api.addMember(newMember);
    sessionStorage.setItem("message", "የወንጌል ማህበርተኛው በትክክል ተመዝግቧል።");
    // window.location.href = `../pages/members.html`;
  }
});

const homeBtn = document.getElementById("member-details-list");
const aboutBtn = document.getElementById("member-details-pay");

const memberContent = document.getElementById("member-details-content");

const loadHomeContent = () => {
  aboutBtn.classList.remove("member-details-menu-active");
  homeBtn.className = "member-details-menu-active";

  let tableContainer = `
            <table class="table table-hover table-sm table-bordered table-striped"> 
                <thead>
                    <tr>
                        <th></th>
                        <th>ወር</th>
                        <th>የክፍያ መጠን</th>
                        <th>የክፍያ ሁኔታ</th>
                        <th>ተግባር</th>
                    </tr>
                </thead>
                <tbody>
                </tbody>
            </table>

        `;

  memberContent.innerHTML = `<h3>የአባል የክፍያ ሁኔታ</h3>${tableContainer}`;
};

const loadAboutContent = () => {
  homeBtn.classList.remove("member-details-menu-active");
  aboutBtn.className = "member-details-menu-active";
  memberContent.innerHTML = "<h2>About Content</h2>";
};

loadHomeContent();

homeBtn.addEventListener("click", () => {
  loadHomeContent();
});

aboutBtn.addEventListener("click", () => {
  loadAboutContent();
});

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
                    <td><a class="member-link" href="#">${
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

// Navigation starts here

const menuItems = document.querySelectorAll(".main-menu-item");

const pages = document.querySelectorAll(".main-content");

menuItems.forEach((item) => {
  item.addEventListener("click", (e) => {
    if (item.id === e.target.id) {
      menuItems.forEach(mItem => mItem.classList.remove('activated-page-link'));
      item.classList.add("activated-page-link");
      pages.forEach((pageItem) => {
        if (pageItem.classList.contains(e.target.id)) {
          pageItem.classList.add("active-page");
        } else {
          pageItem.classList.remove("active-page");
        }
      });
    }
  });
});
