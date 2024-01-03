const search = document.querySelector(".get_search");
const search_bar = document.querySelector(".search_bar");
const search_icon = document.querySelector(".search_icon_box")

search.addEventListener("click", function () {
    search_bar.classList.toggle("show");
})

search_icon.addEventListener("click", function () {
    search_bar.classList.remove("show")
})



