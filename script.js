import Key from "./key.js";

const keyData = [
    new Key({ ru: "ё", ruCaps: "Ё", ruShift: "Ё", en: "`", enCaps: "`", enShift: "~" }, [], (symbol) => {
        return () => insertAtCursor(textareaPlanted, symbol);
    }, "Backquote", { ru: true, en: false }),
    new Key({ ru: "1", ruCaps: "1", ruShift: "!", en: "1", enCaps: "1", enShift: "!" }, [], (symbol) => {
        return () => insertAtCursor(textareaPlanted, symbol);
    }, "Digit1", { ru: false, en: false }),
    new Key({ ru: "2", ruCaps: "2", ruShift: '"', en: "2", enCaps: "2", enShift: "@" }, [], (symbol) => {
        return () => insertAtCursor(textareaPlanted, symbol);
    }, "Digit2", { ru: false, en: false }),
    new Key({ ru: "3", ruCaps: "3", ruShift: "№", en: "3", enCaps: "3", enShift: "#" }, [], (symbol) => {
        return () => insertAtCursor(textareaPlanted, symbol);
    }, "Digit3", { ru: false, en: false }),
    new Key({ ru: "4", ruCaps: "4", ruShift: ";", en: "4", enCaps: "4", enShift: "$" }, [], (symbol) => {
        return () => insertAtCursor(textareaPlanted, symbol);
    }, "Digit4", { ru: false, en: false }),
    new Key({ ru: "5", ruCaps: "5", ruShift: "%", en: "5", enCaps: "5", enShift: "%" }, [], (symbol) => {
        return () => insertAtCursor(textareaPlanted, symbol);
    }, "Digit5", { ru: false, en: false }),
    new Key({ ru: "6", ruCaps: "6", ruShift: ":", en: "6", enCaps: "6", enShift: "^" }, [], (symbol) => {
        return () => insertAtCursor(textareaPlanted, symbol);
    }, "Digit6", { ru: false, en: false }),
    new Key({ ru: "7", ruCaps: "7", ruShift: "?", en: "7", enCaps: "7", enShift: "&" }, [], (symbol) => {
        return () => insertAtCursor(textareaPlanted, symbol);
    }, "Digit7", { ru: false, en: false }),
    new Key({ ru: "8", ruCaps: "8", ruShift: "*", en: "8", enCaps: "8", enShift: "*" }, [], (symbol) => {
        return () => insertAtCursor(textareaPlanted, symbol);
    }, "Digit8", { ru: false, en: false }),
    new Key({ ru: "9", ruCaps: "9", ruShift: "(", en: "9", enCaps: "9", enShift: "(" }, [], (symbol) => {
        return () => insertAtCursor(textareaPlanted, symbol);
    }, "Digit9", { ru: false, en: false }),
    new Key({ ru: "0", ruCaps: "0", ruShift: ")", en: "0", enCaps: "0", enShift: ")" }, [], (symbol) => {
        return () => insertAtCursor(textareaPlanted, symbol);
    }, "Digit0", { ru: false, en: false }),
    new Key({ ru: "-", ruCaps: "-", ruShift: "_", en: "-", enCaps: "-", enShift: "_" }, [], (symbol) => {
        return () => insertAtCursor(textareaPlanted, symbol);
    }, "Minus", { ru: false, en: false }),
    new Key({ ru: "=", ruCaps: "=", ruShift: "+", en: "=", enCaps: "=", enShift: "+" }, [], (symbol) => {
        return () => insertAtCursor(textareaPlanted, symbol);
    }, "Equal", { ru: false, en: false }),
    new Key({ ru: "Backspace", ruCaps: "Backspace", ruShift: "Backspace", en: "Backspace", enCaps: "Backspace", enShift: "Backspace" }, ["key-special", "key-special-backspace"], () => {
        return () => backspaceAtCursor(textareaPlanted, "");
    }, "Backspace", { ru: false, en: false }),
    new Key({ ru: "Tab", ruCaps: "Tab", ruShift: "Tab", en: "Tab", enCaps: "Tab", enShift: "Tab" }, ["key-special", "key-special-tab"], () => {
        return () => insertAtCursor(textareaPlanted, "\t");
    }, "Tab", { ru: false, en: false }),
    new Key({ ru: "й", ruCaps: "Й", ruShift: "Й", en: "q", enCaps: "Q", enShift: "Q" }, [], (symbol) => {
        return () => insertAtCursor(textareaPlanted, symbol);
    }, "KeyQ", { ru: true, en: true }),
    new Key({ ru: "ц", ruCaps: "Ц", ruShift: "Ц", en: "w", enCaps: "W", enShift: "W" }, [], (symbol) => {
        return () => insertAtCursor(textareaPlanted, symbol);
    }, "KeyW", { ru: true, en: true }),
    new Key({ ru: "у", ruCaps: "У", ruShift: "У", en: "e", enCaps: "E", enShift: "E" }, [], (symbol) => {
        return () => insertAtCursor(textareaPlanted, symbol);
    }, "KeyE", { ru: true, en: true }),
    new Key({ ru: "к", ruCaps: "К", ruShift: "К", en: "r", enCaps: "R", enShift: "R" }, [], (symbol) => {
        return () => insertAtCursor(textareaPlanted, symbol);
    }, "KeyR", { ru: true, en: true }),
    new Key({ ru: "е", ruCaps: "Е", ruShift: "Е", en: "t", enCaps: "T", enShift: "T" }, [], (symbol) => {
        return () => insertAtCursor(textareaPlanted, symbol);
    }, "KeyT", { ru: true, en: true }),
    new Key({ ru: "н", ruCaps: "Н", ruShift: "Н", en: "y", enCaps: "Y", enShift: "Y" }, [], (symbol) => {
        return () => insertAtCursor(textareaPlanted, symbol);
    }, "KeyY", { ru: true, en: true }),
    new Key({ ru: "г", ruCaps: "Г", ruShift: "Г", en: "u", enCaps: "U", enShift: "U" }, [], (symbol) => {
        return () => insertAtCursor(textareaPlanted, symbol);
    }, "KeyU", { ru: true, en: true }),
    new Key({ ru: "ш", ruCaps: "Ш", ruShift: "Ш", en: "i", enCaps: "I", enShift: "I" }, [], (symbol) => {
        return () => insertAtCursor(textareaPlanted, symbol);
    }, "KeyI", { ru: true, en: true }),
    new Key({ ru: "щ", ruCaps: "Щ", ruShift: "Щ", en: "o", enCaps: "O", enShift: "O" }, [], (symbol) => {
        return () => insertAtCursor(textareaPlanted, symbol);
    }, "KeyO", { ru: true, en: true }),
    new Key({ ru: "з", ruCaps: "З", ruShift: "З", en: "p", enCaps: "P", enShift: "P" }, [], (symbol) => {
        return () => insertAtCursor(textareaPlanted, symbol);
    }, "KeyP", { ru: true, en: true }),
    new Key({ ru: "х", ruCaps: "Х", ruShift: "Х", en: "[", enCaps: "[", enShift: "{" }, [], (symbol) => {
        return () => insertAtCursor(textareaPlanted, symbol);
    }, "BracketLeft", { ru: true, en: false }),
    new Key({ ru: "ъ", ruCaps: "Ъ", ruShift: "Ъ", en: "]", enCaps: "]", enShift: "}" }, [], (symbol) => {
        return () => insertAtCursor(textareaPlanted, symbol);
    }, "BracketRight", { ru: true, en: false }),
    new Key({ ru: "\\", ruCaps: "\\", ruShift: "/", en: "\\", enCaps: "\\", enShift: "|" }, [], (symbol) => {
        return () => insertAtCursor(textareaPlanted, symbol);
    }, "Backslash", { ru: false, en: false }),
    new Key({ ru: "Del", ruCaps: "Del", ruShift: "Del", en: "Del", enCaps: "Del", enShift: "Del" }, ["key-special", "key-special-del"], () => {
        return () => delAtCursor(textareaPlanted, "");
    }, "Delete", { ru: false, en: false }),
    new Key({ ru: "CapsLock", ruCaps: "CapsLock", ruShift: "CapsLock", en: "CapsLock", enCaps: "CapsLock", enShift: "CapsLock" }, ["key-special", "key-special-caps"], () => {
        return () => textareaElement.textContent += "";
    }, "CapsLock", { ru: false, en: false }),
    new Key({ ru: "ф", ruCaps: "Ф", ruShift: "Ф", en: "a", enCaps: "A", enShift: "A" }, [], (symbol) => {
        return () => insertAtCursor(textareaPlanted, symbol);
    }, "KeyA", { ru: true, en: true }),
    new Key({ ru: "ы", ruCaps: "Ы", ruShift: "Ы", en: "s", enCaps: "S", enShift: "S" }, [], (symbol) => {
        return () => insertAtCursor(textareaPlanted, symbol);
    }, "KeyS", { ru: true, en: true }),
    new Key({ ru: "в", ruCaps: "В", ruShift: "В", en: "d", enCaps: "D", enShift: "D" }, [], (symbol) => {
        return () => insertAtCursor(textareaPlanted, symbol);
    }, "KeyD", { ru: true, en: true }),
    new Key({ ru: "а", ruCaps: "А", ruShift: "А", en: "f", enCaps: "F", enShift: "F" }, [], (symbol) => {
        return () => insertAtCursor(textareaPlanted, symbol);
    }, "KeyF", { ru: true, en: true }),
    new Key({ ru: "п", ruCaps: "П", ruShift: "П", en: "g", enCaps: "G", enShift: "G" }, [], (symbol) => {
        return () => insertAtCursor(textareaPlanted, symbol);
    }, "KeyG", { ru: true, en: true }),
    new Key({ ru: "р", ruCaps: "Р", ruShift: "Р", en: "h", enCaps: "H", enShift: "H" }, [], (symbol) => {
        return () => insertAtCursor(textareaPlanted, symbol);
    }, "KeyH", { ru: true, en: true }),
    new Key({ ru: "о", ruCaps: "О", ruShift: "О", en: "j", enCaps: "J", enShift: "J" }, [], (symbol) => {
        return () => insertAtCursor(textareaPlanted, symbol);
    }, "KeyJ", { ru: true, en: true }),
    new Key({ ru: "л", ruCaps: "Л", ruShift: "Л", en: "k", enCaps: "K", enShift: "K" }, [], (symbol) => {
        return () => insertAtCursor(textareaPlanted, symbol);
    }, "KeyK", { ru: true, en: true }),
    new Key({ ru: "д", ruCaps: "Д", ruShift: "Д", en: "l", enCaps: "L", enShift: "L" }, [], (symbol) => {
        return () => insertAtCursor(textareaPlanted, symbol);
    }, "KeyL", { ru: true, en: true }),
    new Key({ ru: "ж", ruCaps: "Ж", ruShift: "Ж", en: ";", enCaps: ";", enShift: ":" }, [], (symbol) => {
        return () => insertAtCursor(textareaPlanted, symbol);
    }, "Semicolon", { ru: true, en: false }),
    new Key({ ru: "э", ruCaps: "Э", ruShift: "Э", en: "'", enCaps: "'", enShift: '"' }, [], (symbol) => {
        return () => insertAtCursor(textareaPlanted, symbol);
    }, "Quote", { ru: true, en: false }),
    new Key({ ru: "Enter", ruCaps: "Enter", ruShift: "Enter", en: "Enter", enCaps: "Enter", enShift: "Enter" }, ["key-special", "key-special-enter"], () => {
        return () => insertAtCursor(textareaPlanted, "\n");
    }, "Enter", { ru: false, en: false }),
    new Key({ ru: "Shift", ruCaps: "Shift", ruShift: "Shift", en: "Shift", enCaps: "Shift", enShift: "Shift" }, ["key-special", "key-special-lshift"], () => {
        return () => textareaElement.textContent += "";
    }, "ShiftLeft", { ru: false, en: false }),
    new Key({ ru: "я", ruCaps: "Я", ruShift: "Я", en: "z", enCaps: "Z", enShift: "Z" }, [], (symbol) => {
        return () => insertAtCursor(textareaPlanted, symbol);
    }, "KeyZ", { ru: true, en: true }),
    new Key({ ru: "ч", ruCaps: "Ч", ruShift: "Ч", en: "x", enCaps: "X", enShift: "X" }, [], (symbol) => {
        return () => insertAtCursor(textareaPlanted, symbol);
    }, "KeyX", { ru: true, en: true }),
    new Key({ ru: "с", ruCaps: "С", ruShift: "С", en: "c", enCaps: "C", enShift: "C" }, [], (symbol) => {
        return () => insertAtCursor(textareaPlanted, symbol);
    }, "KeyC", { ru: true, en: true }),
    new Key({ ru: "м", ruCaps: "м", ruShift: "м", en: "v", enCaps: "V", enShift: "V" }, [], (symbol) => {
        return () => insertAtCursor(textareaPlanted, symbol);
    }, "KeyV", { ru: true, en: true }),
    new Key({ ru: "и", ruCaps: "И", ruShift: "И", en: "b", enCaps: "B", enShift: "B" }, [], (symbol) => {
        return () => insertAtCursor(textareaPlanted, symbol);
    }, "KeyB", { ru: true, en: true }),
    new Key({ ru: "т", ruCaps: "Т", ruShift: "Т", en: "n", enCaps: "N", enShift: "N" }, [], (symbol) => {
        return () => insertAtCursor(textareaPlanted, symbol);
    }, "KeyN", { ru: true, en: true }),
    new Key({ ru: "ь", ruCaps: "Ь", ruShift: "Ь", en: "m", enCaps: "M", enShift: "M" }, [], (symbol) => {
        return () => insertAtCursor(textareaPlanted, symbol);
    }, "KeyM", { ru: true, en: true }),
    new Key({ ru: "б", ruCaps: "Б", ruShift: "Б", en: ",", enCaps: ",", enShift: "<" }, [], (symbol) => {
        return () => insertAtCursor(textareaPlanted, symbol);
    }, "Comma", { ru: true, en: false }),
    new Key({ ru: "ю", ruCaps: "Ю", ruShift: "Ю", en: ".", enCaps: ".", enShift: ">" }, [], (symbol) => {
        return () => insertAtCursor(textareaPlanted, symbol);
    }, "Period", { ru: true, en: false }),
    new Key({ ru: ".", ruCaps: ".", ruShift: ",", en: "/", enCaps: "/", enShift: "?" }, [], (symbol) => {
        return () => insertAtCursor(textareaPlanted, symbol);
    }, "Slash", { ru: false, en: false }),
    new Key({ ru: "↑", ruCaps: "↑", ruShift: "↑", en: "↑", enCaps: "↑", enShift: "↑" }, ["key-special"], (symbol) => {
        return () => insertAtCursor(textareaPlanted, symbol);
    }, "ArrowUp", { ru: false, en: false }),
    new Key({ ru: "Shift", ruCaps: "Shift", ruShift: "Shift", en: "Shift", enCaps: "Shift", enShift: "Shift" }, ["key-special", "key-special-rshift"], () => {
        return () => textareaElement.textContent += "";
    }, "ShiftRight", { ru: false, en: false }),
    new Key({ ru: "Ctrl", ruCaps: "Ctrl", ruShift: "Ctrl", en: "Ctrl", enCaps: "Ctrl", enShift: "Ctrl" }, ["key-special"], () => {
        return () => textareaElement.textContent += "";
    }, "ControlLeft", { ru: false, en: false }),
    new Key({ ru: "Win", ruCaps: "Win", ruShift: "Win", en: "Win", enCaps: "Win", enShift: "Win" }, ["key-special"], () => {
        return () => textareaElement.textContent += "";
    }, "MetaLeft", { ru: false, en: false }),
    new Key({ ru: "Alt", ruCaps: "Alt", ruShift: "Alt", en: "Alt", enCaps: "Alt", enShift: "Alt" }, ["key-special"], () => {
        return () => textareaElement.textContent += "";
    }, "AltLeft", { ru: false, en: false }),
    new Key({ ru: " ", ruCaps: " ", ruShift: " ", en: " ", enCaps: " ", enShift: " " }, ["key-default-space"], (symbol) => {
        return () => insertAtCursor(textareaPlanted, symbol);
    }, "Space", { ru: false, en: false }),
    new Key({ ru: "Alt", ruCaps: "Alt", ruShift: "Alt", en: "Alt", enCaps: "Alt", enShift: "Alt" }, ["key-special"], () => {
        return () => textareaElement.textContent += "";
    }, "AltRight", { ru: false, en: false }),
    new Key({ ru: "←", ruCaps: "←", ruShift: "←", en: "←", enCaps: "←", enShift: "←" }, ["key-special"], (symbol) => {
        return () => insertAtCursor(textareaPlanted, symbol);
    }, "ArrowLeft", { ru: false, en: false }),
    new Key({ ru: "↓", ruCaps: "↓", ruShift: "↓", en: "↓", enCaps: "↓", enShift: "↓" }, ["key-special"], (symbol) => {
        return () => insertAtCursor(textareaPlanted, symbol);
    }, "ArrowDown", { ru: false, en: false }),
    new Key({ ru: "→", ruCaps: "→", ruShift: "→", en: "→", enCaps: "→", enShift: "→" }, ["key-special"], (symbol) => {
        return () => insertAtCursor(textareaPlanted, symbol);
    }, "ArrowRight", { ru: false, en: false }),
    new Key({ ru: "Ctrl", ruCaps: "Ctrl", ruShift: "Ctrl", en: "Ctrl", enCaps: "Ctrl", enShift: "Ctrl" }, ["key-special"], () => {
        return () => textareaElement.textContent += "";
    }, "ControlRight", { ru: false, en: false })
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
textareaElement.setAttribute("placeholder", "Write something here...");
//

let shiftStatus = false;
let capsStatus = false;

// -- main keyboard
function createKey(param) { // add key according to key style
    const div = document.createElement("div");
    div.classList.add("key-default", ...param);
    return div;
}

function renderKey(lang, shift) {
    keyboardWrapper.innerHTML = '';
    let shiftMemory = [];
    shiftMemory.push(shift);
    for (let i = 0; i < keyData.length; i++) {
        const key = keyData[i];
        const keyElement = keyboardWrapper.appendChild((createKey(key.style)));
        shift = shiftMemory[0];

        if (key.capsSensetivity[lang]) {
            capsStatus
                ? shift = !shift
                : shift;
        }
        let symbol;
        if (lang == "ru") {
            shift
                ? symbol = key.symbol["ruShift"]
                : symbol = key.symbol[lang];
        } else {
            shift
                ? symbol = key.symbol["enShift"]
                : symbol = key.symbol[lang];
        }

        keyElement.textContent = symbol;

        keyElement.onclick = key.actionProvider(symbol);

        const eventsToRemove = key.windowEvents || {};
        for (let eventType in eventsToRemove) {
            let eventAction = eventsToRemove[eventType];
            window.removeEventListener(eventType, eventAction);
        }
        key.windowEvents = {};

        const kd = (e) => {
            e.preventDefault();
            if (e.code === key.keyEvent) {
                keyElement.classList.add("key-active") // add style to key while press it
                key.actionProvider(symbol)();
            }
        };
        key.windowEvents.keydown = kd;
        window.addEventListener("keydown", kd);

        const ku = (e) => {
            e.preventDefault();
            if (e.code === key.keyEvent) {
                keyElement.classList.remove("key-active") // delete style to key while press it

            }
        };
        key.windowEvents.keyup = ku;
        window.addEventListener("keyup", ku)

    }


    // change font case CapsLock by CLICK
    const capsLockElement = document.querySelector(".key-special-caps");

    capsLockElement.addEventListener("click", () => {
        capsStatus
            ? capsStatus = false
            : capsStatus = true;
        renderKey(currentLang(), shiftStatus);
    })
    //

    // --change font case Shift by CLICK
    const shiftLeftElement = document.querySelector(".key-special-lshift");
    const shiftRightElement = document.querySelector(".key-special-rshift");
    shiftLeftElement.addEventListener("click", () => {
        shiftStatus
            ? shiftStatus = false
            : shiftStatus = true;
        renderKey(currentLang(), shiftStatus);
    });

    shiftRightElement.addEventListener("click", () => {
        shiftStatus
            ? shiftStatus = false
            : shiftStatus = true;
        renderKey(currentLang(), shiftStatus);
    })




    //

}
renderKey(currentLang(), shiftStatus);
//


// -- footer
footerParagraph.innerHTML = "OS: Windows<br>Eng/Ru: ctrl + alt";
//


// -- change language Ctrl+Alt
window.addEventListener("keydown", (e) => {
    if (e.ctrlKey && e.altKey) {
        shiftStatus = false;
        changeLocalStorage();
        renderKey(currentLang(), shiftStatus);
    }
})
//

// --change font case Shift
window.addEventListener("keydown", (e) => {
    if (e.code === "ShiftLeft" || e.code === "ShiftRight") {
        shiftStatus = true;
        renderKey(currentLang(), shiftStatus);
    }
})

window.addEventListener("keyup", (e) => {
    if (e.code === "ShiftLeft" || e.code === "ShiftRight") {
        shiftStatus = false;
        renderKey(currentLang(), shiftStatus);
    }
})

//

// --change font case CapsLock
window.addEventListener("keydown", (e) => {
    e.preventDefault();
    if (e.code === "CapsLock") {
        capsStatus
            ? capsStatus = false
            : capsStatus = true;
        renderKey(currentLang(), shiftStatus);
    }
})
//


const textareaPlanted = document.querySelector(".textarea-element");

const typeInTextarea = (newText, el) => {
    const [start, end] = [el.selectionStart, el.selectionEnd];
    el.setRangeText(newText, start, end, 'select');
}

function insertAtCursor(input, textToInsert) {
    // get current text of the input
    const value = input.value;

    // save selection start and end position
    const start = input.selectionStart;
    const end = input.selectionEnd;

    // update the value with our text inserted
    input.value = value.slice(0, start) + textToInsert + value.slice(end);

    // update cursor to be at the end of insertion
    input.selectionStart = input.selectionEnd = start + textToInsert.length;
}

function delAtCursor(input, textToInsert) {
    const value = input.value;
    const start = input.selectionStart;
    const end = input.selectionEnd + 1;
    input.value = value.slice(0, start) + textToInsert + value.slice(end);
    input.selectionStart = input.selectionEnd = start + textToInsert.length;
}

function backspaceAtCursor(input, textToInsert) {
    const value = input.value;
    const start = input.selectionStart - 1;
    const end = input.selectionEnd;
    input.value = value.slice(0, start) + textToInsert + value.slice(end);
    input.selectionStart = input.selectionEnd = start + textToInsert.length;
}


















