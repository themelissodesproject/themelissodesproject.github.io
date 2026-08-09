const search = () => {
  const input = document.getElementById("search-item").value.trim().toUpperCase();
  const pages = document.querySelectorAll("#page-list .page:not(#no-results)");
  const container = document.getElementById("results-container");
  const noResults = document.getElementById("no-results");

  let matchFound = false;

  pages.forEach(page => {
    const title = page.querySelector("h2").textContent.toUpperCase();
    const keywords = (page.getAttribute("data-keywords") || "").toUpperCase();

    // Match if the search input appears anywhere in title or keywords
    const isMatch =
      input.length > 0 && (title.includes(input) || keywords.includes(input));

    page.style.display = isMatch ? "" : "none";
    if (isMatch) matchFound = true;
  });

  if (input.length > 0) {
    container.style.display = "block";
    noResults.style.display = matchFound ? "none" : "flex";
  } else {
    container.style.display = "none";
    noResults.style.display = "none";
  }
};