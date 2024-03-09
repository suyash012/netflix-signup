const boxes = document.querySelectorAll("#button");
const contents = document.querySelectorAll("#content");

boxes.forEach(box => {
    box.addEventListener('click', (e) => {
        const content = box.nextElementSibling;
        if (box.getAttribute('aria-expanded') === 'false') {
            content.style.display = "block";
            box.setAttribute('aria-expanded', 'true');
            box.querySelector("#icon").textContent = "-";
        } else {
            box.setAttribute('aria-expanded', 'false');
            content.style.display = "none";
            box.querySelector("#icon").textContent = "+";
        }
    })
})
