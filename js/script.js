const accordion = document.querySelectorAll(".accordion");

for (let i = 0; i < accordion.length; i++) {
    accordion[i].addEventListener("click", function () {
        this.classList.toggle("active");
        let heading = this.children[0];
        let panel = this.children[1];
        let arrow = this.children[0].children[0];
        if (panel.style.maxHeight) {
            heading.style.fontWeight = 400;
            panel.style.maxHeight = null;
            arrow.style.transform = "rotateZ(0deg)";
        } else {
            heading.style.fontWeight = 700;
            panel.style.maxHeight = panel.scrollHeight + "px";
            arrow.style.transform = "rotateZ(180deg)";
        }
    })
}