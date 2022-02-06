document.addEventListener("DOMContentLoaded", () => {
    const homeBtn = document.getElementById("member-details-list");
    const aboutBtn = document.getElementById("member-details-pay");

    const memberContent = document.getElementById("member-details-content");

    const loadHomeContent = () => {
        aboutBtn. className = "";
        homeBtn.className = "member-details-menu-active";
        memberContent.innerHTML = "<h2>Home Content</h2>";
    }

    const loadAboutContent = () => {
        homeBtn.className = "";
        aboutBtn.className = "member-details-menu-active";
        memberContent.innerHTML = "<h2>About Content</h2>";
    }

    loadHomeContent();

    homeBtn.addEventListener("click", () => {
        loadHomeContent();
    });

    aboutBtn.addEventListener("click", () => {
        loadAboutContent();
    });
});