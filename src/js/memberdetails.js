document.addEventListener("DOMContentLoaded", () => {
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
});
