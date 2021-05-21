function getJson(url, callBack) {
    fetch(url)
        .then((res) => res.json())
        .then(callBack);
}

addEventListener("load", (e) => {
    getJson("../portfolio.json", (json) => {
        for (const projet of json.projets) {
            let divgen = document.createElement("div"),
                divblabla = document.createElement("div"),
                divimgs = document.createElement("div"),
                divlink = document.createElement("div"),
                divtitle = document.createElement("div"),
                title = document.createElement("h2"),
                technos = document.createElement("h6"),
                desc = document.createElement("p"),
                linklogo = document.createElement("i"),
                link = document.createElement("a");

            divgen.classList.add("project");
            divtitle.classList.add("divtitle");
            divblabla.classList.add("infos");
            divimgs.classList.add("illustrations");
            divlink.classList.add("divlinks");

            title.innerText = projet.name;
            technos.innerText = "Technologies utilisées: " + projet.technologys;
            desc.innerText = projet.description;

            for (const src of projet.images.slice(1)) {
                console.log(src);
                let img = new Image();
                img.src = src;
                img.setAttribute("loading", "lazy");
                divimgs.appendChild(img);
            }

            let logo = new Image();
            logo.src = projet.images[0];
            logo.setAttribute("loading", "lazy");
            divtitle.appendChild(logo);
            divtitle.appendChild(title);

            divblabla.appendChild(divtitle);
            divblabla.appendChild(technos);
            divblabla.appendChild(desc);

            if (projet.link != "") {
                if (projet.link.includes("github")) {
                    linklogo.classList.add("fab");
                    linklogo.classList.add("fa-github");
                } else {
                    linklogo.classList.add("fas");
                    linklogo.classList.add("fa-link");
                }
                link.innerText = projet.link;
                link.href = projet.link;
                link.target = "_blank";
                divlink.appendChild(linklogo);
                divlink.appendChild(link);
            }

            divblabla.appendChild(divlink);

            divgen.appendChild(divblabla);
            divgen.appendChild(divimgs);

            document.querySelector("main").appendChild(divgen);
        }
    });
});
