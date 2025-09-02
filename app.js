const search = () => {
    const input = document.getElementById("search-item").value.trim().toUpperCase();
    const pages = document.querySelectorAll("#page-list .page:not(#no-results)");
    const container = document.getElementById("results-container");
    const noResults = document.getElementById("no-results");

    let matchFound = false;

    pages.forEach(page => {
        const title = page.querySelector("h2").textContent.toUpperCase();
        if (title.includes(input)) {
            page.style.display = "";
            matchFound = true;
        } else {
            page.style.display = "none";
        }
    });

    if (input.length > 0) {
        container.style.display = "block";
        noResults.style.display = matchFound ? "none" : "flex";
    } else {
        container.style.display = "none";
        noResults.style.display = "none";
    }
};