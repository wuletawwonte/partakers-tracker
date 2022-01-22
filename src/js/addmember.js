document.addEventListener("DOMContentLoaded", () => {    
    const saveMemberBtn = document.getElementById("saveMember");
    saveMemberBtn.addEventListener("click", (e)=> {
        e.preventDefault();
        
        console.log("save Member Clicked");
    });


});