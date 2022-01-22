document.addEventListener("DOMContentLoaded", () => {    

    const saveMemberBtn = document.getElementById("saveMember");

    saveMemberBtn.addEventListener("click", (e)=> {
        e.preventDefault();

        const firstname = document.getElementById("firstname");
        const middlename = document.getElementById("middlename");
        const lastname = document.getElementById("lastname");
        const phoneNumber = document.getElementById("phone");
        const amount = document.getElementById("amount");

        console.log(firstname);
    });


});