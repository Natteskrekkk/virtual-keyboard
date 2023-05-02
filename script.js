import Key from "./key.js";

const keyData = [
    new Key({ ru: "ё", ruCaps: "Ё", ruShift: "Ё", en: "`", enCaps: "`", enShift: "~" }, [], (symbol) => {
        return () => textareaElement.textContent += symbol;
    }, "Backquote"),
    new Key({ ru: "1", ruCaps: "1", ruShift: "!", en: "1", enCaps: "1", enShift: "!" }, [], (symbol) => {
        return () => textareaElement.textContent += symbol;
    }, "Digit1"),
    new Key({ ru: "2", ruCaps: "2", ruShift: '"', en: "2", enCaps: "2", enShift: "@" }, [], (symbol) => {
        return () => textareaElement.textContent += symbol;
    }, "Digit2"),
    new Key({ ru: "3", ruCaps: "3", ruShift: "№", en: "3", enCaps: "3", enShift: "#" }, [], (symbol) => {
        return () => textareaElement.textContent += symbol;
    }, "Digit3"),
    new Key({ ru: "4", ruCaps: "4", ruShift: ";", en: "4", enCaps: "4", enShift: "$" }, [], (symbol) => {
        return () => textareaElement.textContent += symbol;
    }, "Digit4"),
    new Key({ ru: "5", ruCaps: "5", ruShift: "%", en: "5", enCaps: "5", enShift: "%" }, [], (symbol) => {
        return () => textareaElement.textContent += symbol;
    }, "Digit5"),
    new Key({ ru: "6", ruCaps: "6", ruShift: ":", en: "6", enCaps: "6", enShift: "^" }, [], (symbol) => {
        return () => textareaElement.textContent += symbol;
    }, "Digit6"),
    new Key({ ru: "7", ruCaps: "7", ruShift: "?", en: "7", enCaps: "7", enShift: "&" }, [], (symbol) => {
        return () => textareaElement.textContent += symbol;
    }, "Digit7"),
    new Key({ ru: "8", ruCaps: "8", ruShift: "*", en: "8", enCaps: "8", enShift: "*" }, [], (symbol) => {
        return () => textareaElement.textContent += symbol;
    }, "Digit8"),
    new Key({ ru: "9", ruCaps: "9", ruShift: "(", en: "9", enCaps: "9", enShift: "(" }, [], (symbol) => {
        return () => textareaElement.textContent += symbol;
    }, "Digit9"),
    new Key({ ru: "0", ruCaps: "0", ruShift: ")", en: "0", enCaps: "0", enShift: ")" }, [], (symbol) => {
        return () => textareaElement.textContent += symbol;
    }, "Digit0"),
    new Key({ ru: "-", ruCaps: "-", ruShift: "_", en: "-", enCaps: "-", enShift: "_" }, [], (symbol) => {
        return () => textareaElement.textContent += symbol;
    }, "Minus"),
    new Key({ ru: "=", ruCaps: "=", ruShift: "+", en: "=", enCaps: "=", enShift: "+" }, [], (symbol) => {
        return () => textareaElement.textContent += symbol;
    }, "Equal"),
    new Key({ ru: "Backspace", ruCaps: "Backspace", ruShift: "Backspace", en: "Backspace", enCaps: "Backspace", enShift: "Backspace" }, ["key-special", "key-special-backspace"], (symbol) => {
        return () => textareaElement.textContent = textareaElement.textContent.substring(0, textareaElement.textContent.length - 1);
    }, "Backspace"),
    new Key({ ru: "Tab", ruCaps: "Tab", ruShift: "Tab", en: "Tab", enCaps: "Tab", enShift: "Tab" }, ["key-special", "key-special-tab"], (symbol) => {
        return () => textareaElement.textContent += "\t";
    }, "Tab"),
    new Key({ ru: "й", ruCaps: "Й", ruShift: "Й", en: "q", enCaps: "Q", enShift: "Q" }, [], (symbol) => {
        return () => textareaElement.textContent += symbol;
    }, "KeyQ"),
    new Key({ ru: "ц", ruCaps: "Ц", ruShift: "Ц", en: "w", enCaps: "W", enShift: "W" }, [], (symbol) => {
        return () => textareaElement.textContent += symbol;
    }, "KeyW"),
    new Key({ ru: "у", ruCaps: "У", ruShift: "У", en: "e", enCaps: "E", enShift: "E" }, [], (symbol) => {
        return () => textareaElement.textContent += symbol;
    }, "KeyE"),
    new Key({ ru: "к", ruCaps: "К", ruShift: "К", en: "r", enCaps: "R", enShift: "R" }, [], (symbol) => {
        return () => textareaElement.textContent += symbol;
    }, "KeyR"),
    new Key({ ru: "е", ruCaps: "Е", ruShift: "Е", en: "t", enCaps: "T", enShift: "T" }, [], (symbol) => {
        return () => textareaElement.textContent += symbol;
    }, "KeyT"),
    new Key({ ru: "н", ruCaps: "Н", ruShift: "Н", en: "y", enCaps: "Y", enShift: "Y" }, [], (symbol) => {
        return () => textareaElement.textContent += symbol;
    }, "KeyY"),
    new Key({ ru: "г", ruCaps: "Г", ruShift: "Г", en: "u", enCaps: "U", enShift: "U" }, [], (symbol) => {
        return () => textareaElement.textContent += symbol;
    }, "KeyU"),
    new Key({ ru: "ш", ruCaps: "Ш", ruShift: "Ш", en: "i", enCaps: "I", enShift: "I" }, [], (symbol) => {
        return () => textareaElement.textContent += symbol;
    }, "KeyI"),
    new Key({ ru: "щ", ruCaps: "Щ", ruShift: "Щ", en: "o", enCaps: "O", enShift: "O" }, [], (symbol) => {
        return () => textareaElement.textContent += symbol;
    }, "KeyO"),
    new Key({ ru: "з", ruCaps: "З", ruShift: "З", en: "p", enCaps: "P", enShift: "P" }, [], (symbol) => {
        return () => textareaElement.textContent += symbol;
    }, "KeyP"),
    new Key({ ru: "х", ruCaps: "Х", ruShift: "Х", en: "[", enCaps: "[", enShift: "{" }, [], (symbol) => {
        return () => textareaElement.textContent += symbol;
    }, "BracketLeft"),
    new Key({ ru: "ъ", ruCaps: "Ъ", ruShift: "Ъ", en: "]", enCaps: "]", enShift: "}" }, [], (symbol) => {
        return () => textareaElement.textContent += symbol;
    }, "BracketRight"),
    new Key({ ru: "\\", ruCaps: "\\", ruShift: "/", en: "\\", enCaps: "\\", enShift: "|" }, [], (symbol) => {
        return () => textareaElement.textContent += symbol;
    }, "Backslash"),
    new Key({ ru: "Del", ruCaps: "Del", ruShift: "Del", en: "Del", enCaps: "Del", enShift: "Del" }, ["key-special", "key-special-del"], (symbol) => {
        return () => textareaElement.textContent += "";
    }, "Delete"),
    new Key({ ru: "CapsLock", ruCaps: "CapsLock", ruShift: "CapsLock", en: "CapsLock", enCaps: "CapsLock", enShift: "CapsLock" }, ["key-special", "key-special-caps"], (symbol) => {
        return () => textareaElement.textContent += "";
    }, "CapsLock"),
    new Key({ ru: "ф", ruCaps: "Ф", ruShift: "Ф", en: "a", enCaps: "A", enShift: "A" }, [], (symbol) => {
        return () => textareaElement.textContent += symbol;
    }, "KeyA"),
    new Key({ ru: "ы", ruCaps: "Ы", ruShift: "Ы", en: "s", enCaps: "S", enShift: "S" }, [], (symbol) => {
        return () => textareaElement.textContent += symbol;
    }, "KeyS"),
    new Key({ ru: "в", ruCaps: "В", ruShift: "В", en: "d", enCaps: "D", enShift: "D" }, [], (symbol) => {
        return () => textareaElement.textContent += symbol;
    }, "KeyD"),
    new Key({ ru: "а", ruCaps: "А", ruShift: "А", en: "f", enCaps: "F", enShift: "F" }, [], (symbol) => {
        return () => textareaElement.textContent += symbol;
    }, "KeyF"),
    new Key({ ru: "п", ruCaps: "П", ruShift: "П", en: "g", enCaps: "G", enShift: "G" }, [], (symbol) => {
        return () => textareaElement.textContent += symbol;
    }, "KeyG"),
    new Key({ ru: "р", ruCaps: "Р", ruShift: "Р", en: "h", enCaps: "H", enShift: "H" }, [], (symbol) => {
        return () => textareaElement.textContent += symbol;
    }, "KeyH"),
    new Key({ ru: "о", ruCaps: "О", ruShift: "О", en: "j", enCaps: "J", enShift: "J" }, [], (symbol) => {
        return () => textareaElement.textContent += symbol;
    }, "KeyJ"),
    new Key({ ru: "л", ruCaps: "Л", ruShift: "Л", en: "k", enCaps: "K", enShift: "K" }, [], (symbol) => {
        return () => textareaElement.textContent += symbol;
    }, "KeyK"),
    new Key({ ru: "д", ruCaps: "Д", ruShift: "Д", en: "l", enCaps: "L", enShift: "L" }, [], (symbol) => {
        return () => textareaElement.textContent += symbol;
    }, "KeyL"),
    new Key({ ru: "ж", ruCaps: "Ж", ruShift: "Ж", en: ";", enCaps: ";", enShift: ":" }, [], (symbol) => {
        return () => textareaElement.textContent += symbol;
    }, "Semicolon"),
    new Key({ ru: "э", ruCaps: "Э", ruShift: "Э", en: "'", enCaps: "'", enShift: '"' }, [], (symbol) => {
        return () => textareaElement.textContent += symbol;
    }, "Quote"),
    new Key({ ru: "Enter", ruCaps: "Enter", ruShift: "Enter", en: "Enter", enCaps: "Enter", enShift: "Enter" }, ["key-special", "key-special-enter"], (symbol) => {
        return () => textareaElement.textContent += "\n";
    }, "Enter"),
    new Key({ ru: "Shift", ruCaps: "Shift", ruShift: "Shift", en: "Shift", enCaps: "Shift", enShift: "Shift" }, ["key-special", "key-special-lshift"], (symbol) => {
        return () => textareaElement.textContent += "";
    }, "ShiftLeft"),
    new Key({ ru: "я", ruCaps: "Я", ruShift: "Я", en: "z", enCaps: "Z", enShift: "Z" }, [], (symbol) => {
        return () => textareaElement.textContent += symbol;
    }, "KeyZ"),
    new Key({ ru: "ч", ruCaps: "Ч", ruShift: "Ч", en: "x", enCaps: "X", enShift: "X" }, [], (symbol) => {
        return () => textareaElement.textContent += symbol;
    }, "KeyX"),
    new Key({ ru: "с", ruCaps: "С", ruShift: "С", en: "c", enCaps: "C", enShift: "C" }, [], (symbol) => {
        return () => textareaElement.textContent += symbol;
    }, "KeyC"),
    new Key({ ru: "м", ruCaps: "м", ruShift: "м", en: "v", enCaps: "V", enShift: "V" }, [], (symbol) => {
        return () => textareaElement.textContent += symbol;
    }, "KeyV"),
    new Key({ ru: "и", ruCaps: "И", ruShift: "И", en: "b", enCaps: "B", enShift: "B" }, [], (symbol) => {
        return () => textareaElement.textContent += symbol;
    }, "KeyB"),
    new Key({ ru: "т", ruCaps: "Т", ruShift: "Т", en: "n", enCaps: "N", enShift: "N" }, [], (symbol) => {
        return () => textareaElement.textContent += symbol;
    }, "KeyN"),
    new Key({ ru: "ь", ruCaps: "Ь", ruShift: "Ь", en: "m", enCaps: "M", enShift: "M" }, [], (symbol) => {
        return () => textareaElement.textContent += symbol;
    }, "KeyM"),
    new Key({ ru: "б", ruCaps: "Б", ruShift: "Б", en: ",", enCaps: ",", enShift: "<" }, [], (symbol) => {
        return () => textareaElement.textContent += symbol;
    }, "Comma"),
    new Key({ ru: "ю", ruCaps: "Ю", ruShift: "Ю", en: ".", enCaps: ".", enShift: ">" }, [], (symbol) => {
        return () => textareaElement.textContent += symbol;
    }, "Period"),
    new Key({ ru: ".", ruCaps: ".", ruShift: ",", en: "/", enCaps: "/", enShift: "?" }, [], (symbol) => {
        return () => textareaElement.textContent += symbol;
    }, "Slash"),
    new Key({ ru: "↑", ruCaps: "↑", ruShift: "↑", en: "↑", enCaps: "↑", enShift: "↑" }, ["key-special"], (symbol) => {
        return () => textareaElement.textContent += symbol;
    }, "ArrowUp"),
    new Key({ ru: "Shift", ruCaps: "Shift", ruShift: "Shift", en: "Shift", enCaps: "Shift", enShift: "Shift" }, ["key-special", "key-special-rshift"], (symbol) => {
        return () => textareaElement.textContent += "";
    }, "ShiftRight"),
    new Key({ ru: "Ctrl", ruCaps: "Ctrl", ruShift: "Ctrl", en: "Ctrl", enCaps: "Ctrl", enShift: "Ctrl" }, ["key-special"], (symbol) => {
        return () => textareaElement.textContent += "";
    }, "ControlLeft"),
    new Key({ ru: "Win", ruCaps: "Win", ruShift: "Win", en: "Win", enCaps: "Win", enShift: "Win" }, ["key-special"], (symbol) => {
        return () => textareaElement.textContent += "";
    }, "MetaLeft"),
    new Key({ ru: "Alt", ruCaps: "Alt", ruShift: "Alt", en: "Alt", enCaps: "Alt", enShift: "Alt" }, ["key-special"], (symbol) => {
        return () => textareaElement.textContent += "";
    }, "AltLeft"),
    new Key({ ru: " ", ruCaps: " ", ruShift: " ", en: " ", enCaps: " ", enShift: " " }, ["key-default-space"], (symbol) => {
        return () => textareaElement.textContent += symbol;
    }, "Space"),
    new Key({ ru: "Alt", ruCaps: "Alt", ruShift: "Alt", en: "Alt", enCaps: "Alt", enShift: "Alt" }, ["key-special"], (symbol) => {
        return () => textareaElement.textContent += "";
    }, "AltRight"),
    new Key({ ru: "←", ruCaps: "←", ruShift: "←", en: "←", enCaps: "←", enShift: "←" }, ["key-special"], (symbol) => {
        return () => textareaElement.textContent += symbol;
    }, "ArrowLeft"),
    new Key({ ru: "↓", ruCaps: "↓", ruShift: "↓", en: "↓", enCaps: "↓", enShift: "↓" }, ["key-special"], (symbol) => {
        return () => textareaElement.textContent += symbol;
    }, "ArrowDown"),
    new Key({ ru: "→", ruCaps: "→", ruShift: "→", en: "→", enCaps: "→", enShift: "→" }, ["key-special"], (symbol) => {
        return () => textareaElement.textContent += symbol;
    }, "ArrowRight"),
    new Key({ ru: "Ctrl", ruCaps: "Ctrl", ruShift: "Ctrl", en: "Ctrl", enCaps: "Ctrl", enShift: "Ctrl" }, ["key-special"], (symbol) => {
        return () => textareaElement.textContent += "";
    }, "ControlRight")
]


// - Language
function setDefaultLocalStorage(param) {
    if (!localStorage.getItem("keyboard-lang")) {
        localStorage.setItem("keyboard-lang", param);
    }
}
setDefaultLocalStorage("ru");

function changeLocalStorage() {
    if (localStorage.getItem("keyboard-lang") === "ru") {
        localStorage.setItem("keyboard-lang", "en");
    } else {
        localStorage.setItem("keyboard-lang", "ru");
    }
}

const currentLang = function getLocalStorage() {
    return localStorage.getItem("keyboard-lang");
}
//






// - main structure elements
const bodyElement = document.querySelector("body");
const headerElement = document.createElement("header");
const mainElement = document.createElement("main");
const textareaElement = document.createElement("textarea");
const keyboardWrapper = document.createElement("div");
const footerElement = document.createElement("footer");
const footerParagraph = document.createElement("p");
//

// -- add style to structure elements
bodyElement.classList.add("body-element");
headerElement.classList.add("header-element");
mainElement.classList.add("main-element");
keyboardWrapper.classList.add("keyboard-wrapper");
textareaElement.classList.add("textarea-element");
footerElement.classList.add("footer-element");
//

// - create document structure
bodyElement.appendChild(headerElement);
bodyElement.appendChild(mainElement);
mainElement.appendChild(textareaElement);
mainElement.appendChild(keyboardWrapper);
bodyElement.appendChild(footerElement);
footerElement.appendChild(footerParagraph);
//

// -- header
headerElement.textContent = "RSS Vitual Keyboard";
//

// -- main textarea
textareaElement.setAttribute("placeholder", "Write someting here...");
//

// -- main keyboard
function createKey(param) { // add key according to key style
    const div = document.createElement("div");
    div.classList.add("key-default", ...param);
    return div;
}

function renderKey(lang) {
    keyboardWrapper.innerHTML = '';
    for (let i = 0; i < keyData.length; i++) {
        const element = keyData[i];
        const keyButton = keyboardWrapper.appendChild((createKey(element.style)));
        const symbol = element.symbol[lang];

        keyButton.textContent = symbol;

        keyButton.onclick = element.actionProvider(symbol);

        const eventsToRemove = element.windowEvents || {};
        for (let eventType in eventsToRemove) {
            let eventAction = eventsToRemove[eventType];
            window.removeEventListener(eventType, eventAction);
        }
        element.windowEvents = {};



        const kd = (e) => {
            e.preventDefault();
            if (e.code === element.keyEvent) {
                keyButton.classList.add("key-active") // add style to key while press it
                element.actionProvider(symbol)();
            }
        };
        element.windowEvents.keydown = kd;
        window.addEventListener("keydown", kd);

        const ku = (e) => {
            e.preventDefault();
            if (e.code === element.keyEvent) {
                keyButton.classList.remove("key-active") // delete style to key while press it

            }
        };
        element.windowEvents.keyup = ku;
        window.addEventListener("keyup", ku)

    }

}
renderKey(currentLang());
//


// -- footer
footerParagraph.innerHTML = "OS: Windows<br>Eng/Ru: ctrl + alt";
//


// -- change language

window.addEventListener("keydown", (e) => {
    if (e.ctrlKey && e.altKey) {

        changeLocalStorage();
        renderKey(currentLang());
    }
})


//

// --change language Shift
window.addEventListener("keydown", (e) => {
    if (e.code === "ShiftLeft" || e.code === "ShiftRight") {
        let shiftLang;
        if (currentLang() == "ru") {
            shiftLang = "ruShift";
        } else if (currentLang() == "en") {
            shiftLang = "enShift";
        }
        renderKey(shiftLang);
    }
})

window.addEventListener("keyup", (e) => {
    if (e.code === "ShiftLeft" || e.code === "ShiftRight") {
        renderKey(currentLang());
    }
})




















