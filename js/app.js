import { getPage } from "./model.js";

const app = document.querySelector("#app");

function loadPage(pageName) {
    getPage(pageName)
        .then((data) => {
            app.innerHTML = data;
        })
        .catch((error) => {
            console.log(error);
        });
}

function changePage(pageName) {
    window.history.pushState(
        { page: pageName },
        "",
        `?page=${pageName}`
    );

    loadPage(pageName);
}

document.querySelector("#home").addEventListener("click", () => {
    changePage("home");
});

document.querySelector("#men").addEventListener("click", () => {
    changePage("men");
});

document.querySelector("#women").addEventListener("click", () => {
    changePage("women");
});

document.querySelector("#new").addEventListener("click", () => {
    changePage("new");
});

document.querySelector("#about").addEventListener("click", () => {
    changePage("about");
});

window.addEventListener("popstate", () => {
    const params = new URLSearchParams(window.location.search);
    const page = params.get("page") || "home";

    loadPage(page);
});

const params = new URLSearchParams(window.location.search);
const startingPage = params.get("page") || "home";

loadPage(startingPage);