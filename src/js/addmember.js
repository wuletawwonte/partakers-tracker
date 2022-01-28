document.addEventListener("DOMContentLoaded", () => {
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
            }  else {
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
            };
            window.api.addMember(newMember);
            sessionStorage.setItem("message", "የወንጌል ማህበርተኛው በትክክል ተመዝግቧል።");
            window.location.href = `../pages/members.html`;
        }
    });
});
