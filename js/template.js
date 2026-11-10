let next = document.getElementById("next");

function selectTemplate(name) {
    localStorage.setItem("animeTemplate", name);

    if (name === "tokyo ghoul") {
        next.href = "../html&css/tokyoghoul.html";
    }

    if (name === "aot") {
        next.href = "../html&css/aot.html";
    }
}