function getScroll() {
    var h = document.documentElement,
        st = "scrollTop";
    return h[st];
}

addEventListener("scroll", (e) => {
    if (getScroll() > 0) {
        document.querySelector("nav").classList.add("top");
    } else {
        document.querySelector("nav").classList.remove("top");
    }
});

addEventListener("load", (e) => {
    let title = document.title;
    if (title.startsWith("Home")) {
        document.getElementById("menu-item-1").classList.add("selected");
    }
    if (title.startsWith("About")) {
        document.getElementById("menu-item-2").classList.add("selected");
    }
    if (title.startsWith("My curriculum")) {
        document.getElementById("menu-item-3").classList.add("selected");
    }
    if (title.startsWith("My portfolio")) {
        document.getElementById("menu-item-4").classList.add("selected");
    }
    if (title.startsWith("Contact")) {
        document.getElementById("menu-item-5").classList.add("selected");
    }
    if (title.startsWith("My horse")) {
        document.getElementById("menu-item-6").classList.add("selected");
    }
});
