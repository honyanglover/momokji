const category = new Map();

document.addEventListener("DOMContentLoaded", () => {
    document.querySelectorAll(".category button").forEach($button => {
        $button.addEventListener("click", ev => {
            const list = category.get(ev.target.innerText);
            console.log(list);
        });
    });
});