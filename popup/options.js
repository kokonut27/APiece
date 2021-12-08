const placeholderr = document.querySelector(".apiece-input").placeholder;
const redirects = document.querySelector(".redirects");
const clearBtn = document.querySelector(".clear");
const clearrBtn = document.querySelector(".clear-social");
const inputr = document.querySelector(".redirect-input");
const addBtnr = document.querySelector(".add-btn-r");
const saveBtns = document.querySelectorAll(".save");


clearBtn.addEventListener("click", () => {
    if (!confirm("This will reset all settings. Are you sure?")) return;
    chrome.storage.sync.set(defaultOptions);
    updateSettings();
});

clearrBtn.addEventListener("click", () => {
    if (!confirm("This will reset your social media. Are you sure?")) return;
    chrome.storage.sync.set({
        redirects: defaultOptions.social
    });
    updateSettings();
});


saveBtns.forEach(el => el.addEventListener("click", () => {
    chrome.storage.sync.set({
        social: getInputsFor(".sociali")
    });
}));

addBtnr.addEventListener("click", () => {
    const input = document.createElement("input");
    input.value = inputr.value;
    input.classList.add("input", "sociali");
    input.placeholder = placeholderr;
    inputr.value = "";

    redirects.appendChild(input);
});


function updateSettings() {
    chrome.storage.sync.get(keys, options => {
        redirects.textContent = "";
        for (const site of options.social) {
            const el = document.createElement("input");
            el.classList.add("input", "apiecei");
            el.value = site;
            el.placeholder = placeholderr;

            redirects.appendChild(el);
        }
    });
}

function getInputsFor(cls) {
    return [...document.querySelectorAll(`${cls}`)]
        .map(el => el.value.trim())
        .filter(e => e != "")
    ;
}

updateSettings();