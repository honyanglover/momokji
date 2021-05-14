const category = new Map();
let current = category;
let depth = 0;

document.addEventListener("DOMContentLoaded", () => {
    const $category = document.querySelector(".category");

    $category.querySelectorAll("button").forEach($button => {
        $button.addEventListener("click", ev => {
            let innerHTML = '';

            current = current.get(ev.target.innerText);

            for (const key of current.keys()) {
                innerHTML += `
                    <li>
                        <button>${key}</button>
                    </li>
                `;
            }

            $category.dataset.depth++;
            $category.innerHTML = innerHTML;

            $category.querySelectorAll("Button").forEach($button => {
                $button.addEventListener("click", ev => {
                    current = current.get(ev.target.innerText);

                    $category.dataset.depth++;
                    $category.innerHTML = current[Math.floor(Math.random() * current.length)].name;
                });
            });
        });
    });
});