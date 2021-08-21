function getScroll() {
    let h = document.documentElement,
        st = "scrollTop";
    return h[st];
}

addEventListener("scroll", (e) => {
    if (getScroll() > 0) {
        document.body.classList.add("top");
    } else {
        document.body.classList.remove("top");
    }
});

addEventListener("load", (e) => {
    const id = document.title.toLowerCase().split(" - ")[0].replaceAll(" ", "-");
    document.getElementById(id).classList.add("selected");
});
