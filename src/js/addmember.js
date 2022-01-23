document.addEventListener("DOMContentLoaded", () => {    

    const saveMemberBtn = document.getElementById("saveMember");

    saveMemberBtn.addEventListener("click", (e)=> {
        e.preventDefault();

        let firstname = document.getElementById("firstname");
        const middlename = document.getElementById("middlename");
        const lastname = document.getElementById("lastname");
        const phoneNumber = document.getElementById("phone");
        const amount = document.getElementById("amount");

        const validate = () => {
            let errorMessage = [];
            if(firstname.validity.valueMissing) {
                console.log(firstname.validationMessage)
                errorMessage.push("First Name cannot be empty");
            }
            if(errorMessage.length == 0) {
                return true;
            } else {

                return false;
            }
        }

        if(validate()) {
            console.log("form properly validated");
            const newMember = {
                firstname: firstname.value,
                middlename: middlename.value,
                lastname: lastname.value,
                phoneNumber: phoneNumber.value,
                amount: amount.value
            }
            window.api.addMember(newMember);
            sessionStorage.setItem('message', 'የወንጌል ማህበርተኛው በትክክል ተምዝግቧል።');
            window.location.href=`../pages/members.html`;
        }
    });


});