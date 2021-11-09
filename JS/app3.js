const navBar = document.getElementById("navbar__list");
const sections = document.querySelectorAll("section");

//Builds Navbar with anchors
for (let i = 0; i < sections.length; i++) {
    let navElement = document.createElement("li");
    navElement.innerHTML = "<a class = 'menu__link' href = ''>" + sections[i].getAttribute("data-nav") + "</a>";
    navBar.appendChild(navElement);
}

//Scroll to section when Navbar link is clicked
const link = document.querySelectorAll(".menu__link");
for (let i = 0; i < link.length; i++) {
    link[i].addEventListener("click", (event) => {
        event.preventDefault();
        let index = i + 1;
        let goto_section = document.getElementById("section" + index);
        goto_section.scrollIntoView();
    });
}

//Fucntion of adding active class
function addActive() {
    var addElement = document.querySelectorAll("section");
    for (section of addElement) {
        section.classList.add("your-active-class");
    }
}
//function for removing active class
function removeActive() {
    var removeElement = document.querySelectorAll("section");
    for (section of removeElement) {
        section.classList.remove("your-active-class");
    }
}

//Setting the area in view as active
function makeActiveClass() {
    for (section of sections)
        if (section.getBoundingClientRect().top < window.innerHeight) {
            addActive();
        } else {
            removeActive();
        }
}

window.addEventListener("scroll", makeActiveClass());
