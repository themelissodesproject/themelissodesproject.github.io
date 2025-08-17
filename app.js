const search = () =>{
    const searchbox = document.getElementById("search-item").value.toUpperCase();
    const pagesites = document.getElementById("page-list")
    const page = document.querySelectorAll(".page")
    const pname = pagesites.getElementsByTagName("h2")

    for (var i=0; i < pname.length; i++) {
        let match = page[i].getElementsByTagName('h2')[0];

        if (match) {
           let textvalue = match.textContent || match.innerHTML

           if (textvalue.toUpperCase().indexOf(searchbox) > -1) {
                page[i].style.display = "";
            } else{
                page[i].style.display = "none";
           }
        }
    }
}