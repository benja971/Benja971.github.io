function getScroll() {
    var h = document.documentElement,
        st = "scrollTop";
    return h[st];
}

addEventListener("scroll", (e) => {
    if (getScroll() > 0) {
        document.querySelector("#logomenu").classList.add("top");
    } else {
        document.querySelector("#logomenu").classList.remove("top");
    }
});
