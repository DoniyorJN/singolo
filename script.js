//link

const anchors = document.querySelectorAll('a[href*="#"]')
for (let anchor of anchors) {
    anchor.addEventListener('click', function (e) {
        e.preventDefault()
        const blockID = anchor.getAttribute('href').substr(1);
        document.getElementById(blockID).scrollIntoView({
            behavior: "smooth",
            block: "start"
        })
        for (let anchor of anchors) {
            anchor.removeAttribute("class", "active");
        }
        anchor.setAttribute("class", "active");
    })
}
