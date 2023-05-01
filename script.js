let currentLangState = "rus";
let keyData = [
    {
        rus: "ё",
        rusCaps: "Ё",
        rusShift: "Ё",
        eng: "`",
        engCaps: "`",
        engShift: "~",
        style: "key-default",
        action() {
            textareaElement.textContent = textareaElement.textContent + this[currentLangState];

        },
        keyEvent: "Backquote",
    },
    {
        rus: "1",
        rusCaps: "1",
        rusShift: "!",
        eng: "1",
        engCaps: "1",
        engShift: "!",
        style: "key-default",
        action() {
            textareaElement.textContent = textareaElement.textContent + this[currentLangState];

        },
        keyEvent: "Digit1",
    },
    {
        rus: "2",
        rusCaps: "2",
        rusShift: '"',
        eng: "2",
        engCaps: "2",
        engShift: "@",
        style: "key-default",
        action() {
            textareaElement.textContent = textareaElement.textContent + this[currentLangState];

        },
        keyEvent: "Digit2",
    },
    {
        rus: "3",
        rusCaps: "3",
        rusShift: "№",
        eng: "3",
        engCaps: "3",
        engShift: "#",
        style: "key-default",
        action() {
            textareaElement.textContent = textareaElement.textContent + this[currentLangState];

        },
        keyEvent: "Digit3",
    },
    {
        rus: "4",
        rusCaps: "4",
        rusShift: ";",
        eng: "4",
        engCaps: "4",
        engShift: "$",
        style: "key-default",
        action() {
            textareaElement.textContent = textareaElement.textContent + this[currentLangState];

        },
        keyEvent: "Digit4",
    },
    {
        rus: "5",
        rusCaps: "5",
        rusShift: "%",
        eng: "5",
        engCaps: "5",
        engShift: "%",
        style: "key-default",
        action() {
            textareaElement.textContent = textareaElement.textContent + this[currentLangState];

        },
        keyEvent: "Digit5",
    },
    {
        rus: "6",
        rusCaps: "6",
        rusShift: ":",
        eng: "6",
        engCaps: "6",
        engShift: "^",
        style: "key-default",
        action() {
            textareaElement.textContent = textareaElement.textContent + this[currentLangState];

        },
        keyEvent: "Digit6",
    },
    {
        rus: "7",
        rusCaps: "7",
        rusShift: "?",
        eng: "7",
        engCaps: "7",
        engShift: "&",
        style: "key-default",
        action() {
            textareaElement.textContent = textareaElement.textContent + this[currentLangState];

        },
        keyEvent: "Digit7",
    },
    {
        rus: "8",
        rusCaps: "8",
        rusShift: "*",
        eng: "8",
        engCaps: "8",
        engShift: "*",
        style: "key-default",
        action() {
            textareaElement.textContent = textareaElement.textContent + this[currentLangState];

        },
        keyEvent: "Digit8",
    },
    {
        rus: "9",
        rusCaps: "9",
        rusShift: "(",
        eng: "9",
        engCaps: "9",
        engShift: "(",
        style: "key-default",
        action() {
            textareaElement.textContent = textareaElement.textContent + this[currentLangState];

        },
        keyEvent: "Digit9",
    },
    {
        rus: "0",
        rusCaps: "0",
        rusShift: ")",
        eng: "0",
        engCaps: "0",
        engShift: ")",
        style: "key-default",
        action() {
            textareaElement.textContent = textareaElement.textContent + this[currentLangState];

        },
        keyEvent: "Digit0",
    },
    {
        rus: "-",
        rusCaps: "-",
        rusShift: "_",
        eng: "-",
        engCaps: "-",
        engShift: "_",
        style: "key-default",
        action() {
            textareaElement.textContent = textareaElement.textContent + this[currentLangState];

        },
        keyEvent: "Minus",
    },
    {
        rus: "=",
        rusCaps: "=",
        rusShift: "+",
        eng: "=",
        engCaps: "=",
        engShift: "+",
        style: "key-default",
        action() {
            textareaElement.textContent = textareaElement.textContent + this[currentLangState];

        },
        keyEvent: "Equal",
    },
    {
        rus: "Backspace",
        rusCaps: "Backspace",
        rusShift: "Backspace",
        eng: "Backspace",
        engCaps: "Backspace",
        engShift: "Backspace",
        style: "key-special-backspace",
        action() {


        },
        keyEvent: "Backspace",
    },
    {
        rus: "Tab",
        rusCaps: "Tab",
        rusShift: "Tab",
        eng: "Tab",
        engCaps: "Tab",
        engShift: "Tab",
        style: "key-special-tab",
        action() {


        },
        keyEvent: "Tab",
    },
    {
        rus: "й",
        rusCaps: "Й",
        rusShift: "Й",
        eng: "q",
        engCaps: "Q",
        engShift: "Q",
        style: "key-default",
        action() {
            textareaElement.textContent = textareaElement.textContent + this[currentLangState];

        },
        keyEvent: "KeyQ",
    },
    {
        rus: "ц",
        rusCaps: "Ц",
        rusShift: "Ц",
        eng: "w",
        engCaps: "W",
        engShift: "W",
        style: "key-default",
        action() {
            textareaElement.textContent = textareaElement.textContent + this[currentLangState];

        },
        keyEvent: "KeyW",
    },
    {
        rus: "у",
        rusCaps: "У",
        rusShift: "У",
        eng: "e",
        engCaps: "E",
        engShift: "E",
        style: "key-default",
        action() {
            textareaElement.textContent = textareaElement.textContent + this[currentLangState];

        },
        keyEvent: "KeyE",
    },
    {
        rus: "к",
        rusCaps: "К",
        rusShift: "К",
        eng: "r",
        engCaps: "R",
        engShift: "R",
        style: "key-default",
        action() {
            textareaElement.textContent = textareaElement.textContent + this[currentLangState];

        },
        keyEvent: "KeyR",
    },
    {
        rus: "е",
        rusCaps: "Е",
        rusShift: "Е",
        eng: "t",
        engCaps: "T",
        engShift: "T",
        style: "key-default",
        action() {
            textareaElement.textContent = textareaElement.textContent + this[currentLangState];

        },
        keyEvent: "KeyT",
    },
    {
        rus: "н",
        rusCaps: "Н",
        rusShift: "Н",
        eng: "y",
        engCaps: "Y",
        engShift: "Y",
        style: "key-default",
        action() {
            textareaElement.textContent = textareaElement.textContent + this[currentLangState];

        },
        keyEvent: "KeyY",
    },
    {
        rus: "г",
        rusCaps: "Г",
        rusShift: "Г",
        eng: "u",
        engCaps: "U",
        engShift: "U",
        style: "key-default",
        action() {
            textareaElement.textContent = textareaElement.textContent + this[currentLangState];

        },
        keyEvent: "KeyU",
    },
    {
        rus: "ш",
        rusCaps: "Ш",
        rusShift: "Ш",
        eng: "i",
        engCaps: "I",
        engShift: "I",
        style: "key-default",
        action() {
            textareaElement.textContent = textareaElement.textContent + this[currentLangState];

        },
        keyEvent: "KeyI",
    },
    {
        rus: "щ",
        rusCaps: "Щ",
        rusShift: "Щ",
        eng: "o",
        engCaps: "O",
        engShift: "O",
        style: "key-default",
        action() {
            textareaElement.textContent = textareaElement.textContent + this[currentLangState];

        },
        keyEvent: "KeyO",
    },
    {
        rus: "з",
        rusCaps: "З",
        rusShift: "З",
        eng: "p",
        engCaps: "P",
        engShift: "P",
        style: "key-default",
        action() {
            textareaElement.textContent = textareaElement.textContent + this[currentLangState];

        },
        keyEvent: "KeyP",
    },
    {
        rus: "х",
        rusCaps: "Х",
        rusShift: "Х",
        eng: "[",
        engCaps: "[",
        engShift: "{",
        style: "key-default",
        action() {
            textareaElement.textContent = textareaElement.textContent + this[currentLangState];

        },
        keyEvent: "BracketLeft",
    },
    {
        rus: "ъ",
        rusCaps: "Ъ",
        rusShift: "Ъ",
        eng: "]",
        engCaps: "]",
        engShift: "}",
        style: "key-default",
        action() {
            textareaElement.textContent = textareaElement.textContent + this[currentLangState];

        },
        keyEvent: "BracketRight",
    },
    {
        rus: "\\",
        rusCaps: "\\",
        rusShift: "/",
        eng: "\\",
        engCaps: "\\",
        engShift: "|",
        style: "key-default",
        action() {
            textareaElement.textContent = textareaElement.textContent + this[currentLangState];

        },
        keyEvent: "Backslash",
    },
    {
        rus: "Del",
        rusCaps: "Del",
        rusShift: "Del",
        eng: "Del",
        engCaps: "Del",
        engShift: "Del",
        style: "key-special-del",
        action() {


        },
        keyEvent: "Delete",
    },
    {
        rus: "CapsLock",
        rusCaps: "CapsLock",
        rusShift: "CapsLock",
        eng: "CapsLock",
        engCaps: "CapsLock",
        engShift: "CapsLock",
        style: "key-special-caps",
        action() {


        },
        keyEvent: "CapsLock",
    },
    {
        rus: "ф",
        rusCaps: "Ф",
        rusShift: "Ф",
        eng: "a",
        engCaps: "A",
        engShift: "A",
        style: "key-default",
        action() {
            textareaElement.textContent = textareaElement.textContent + this[currentLangState];

        },
        keyEvent: "KeyA",
    },
    {
        rus: "ы",
        rusCaps: "Ы",
        rusShift: "Ы",
        eng: "s",
        engCaps: "S",
        engShift: "S",
        style: "key-default",
        action() {
            textareaElement.textContent = textareaElement.textContent + this[currentLangState];

        },
        keyEvent: "KeyS",
    },
    {
        rus: "в",
        rusCaps: "В",
        rusShift: "В",
        eng: "d",
        engCaps: "D",
        engShift: "D",
        style: "key-default",
        action() {
            textareaElement.textContent = textareaElement.textContent + this[currentLangState];

        },
        keyEvent: "KeyD",
    },
    {
        rus: "а",
        rusCaps: "А",
        rusShift: "А",
        eng: "f",
        engCaps: "F",
        engShift: "F",
        style: "key-default",
        action() {
            textareaElement.textContent = textareaElement.textContent + this[currentLangState];

        },
        keyEvent: "KeyF",
    },
    {
        rus: "п",
        rusCaps: "П",
        rusShift: "П",
        eng: "g",
        engCaps: "G",
        engShift: "G",
        style: "key-default",
        action() {
            textareaElement.textContent = textareaElement.textContent + this[currentLangState];

        },
        keyEvent: "KeyG",
    },
    {
        rus: "р",
        rusCaps: "Р",
        rusShift: "Р",
        eng: "h",
        engCaps: "H",
        engShift: "H",
        style: "key-default",
        action() {
            textareaElement.textContent = textareaElement.textContent + this[currentLangState];

        },
        keyEvent: "KeyH",
    },
    {
        rus: "о",
        rusCaps: "О",
        rusShift: "О",
        eng: "j",
        engCaps: "J",
        engShift: "J",
        style: "key-default",
        action() {
            textareaElement.textContent = textareaElement.textContent + this[currentLangState];

        },
        keyEvent: "KeyJ",
    },
    {
        rus: "л",
        rusCaps: "Л",
        rusShift: "Л",
        eng: "k",
        engCaps: "K",
        engShift: "K",
        style: "key-default",
        action() {
            textareaElement.textContent = textareaElement.textContent + this[currentLangState];

        },
        keyEvent: "KeyK",
    },
    {
        rus: "д",
        rusCaps: "Д",
        rusShift: "Д",
        eng: "l",
        engCaps: "L",
        engShift: "L",
        style: "key-default",
        action() {
            textareaElement.textContent = textareaElement.textContent + this[currentLangState];

        },
        keyEvent: "KeyL",
    },
    {
        rus: "ж",
        rusCaps: "Ж",
        rusShift: "Ж",
        eng: ";",
        engCaps: ";",
        engShift: ":",
        style: "key-default",
        action() {
            textareaElement.textContent = textareaElement.textContent + this[currentLangState];

        },
        keyEvent: "Semicolon",
    },
    {
        rus: "э",
        rusCaps: "Э",
        rusShift: "Э",
        eng: "'",
        engCaps: "'",
        engShift: '"',
        style: "key-default",
        action() {
            textareaElement.textContent = textareaElement.textContent + this[currentLangState];

        },
        keyEvent: "Quote",
    },
    {
        rus: "Enter",
        rusCaps: "Enter",
        rusShift: "Enter",
        eng: "Enter",
        engCaps: "Enter",
        engShift: "Enter",
        style: "key-special-enter",
        action() {


        },
        keyEvent: "Enter",
    },
    {
        rus: "Shift",
        rusCaps: "Shift",
        rusShift: "Shift",
        eng: "Shift",
        engCaps: "Shift",
        engShift: "Shift",
        style: "key-special-lshift",
        action() {


        },
        keyEvent: "ShiftLeft",
    },
    {
        rus: "я",
        rusCaps: "Я",
        rusShift: "Я",
        eng: "z",
        engCaps: "Z",
        engShift: "Z",
        style: "key-default",
        action() {
            textareaElement.textContent = textareaElement.textContent + this[currentLangState];

        },
        keyEvent: "KeyZ",
    },
    {
        rus: "ч",
        rusCaps: "Ч",
        rusShift: "Ч",
        eng: "x",
        engCaps: "X",
        engShift: "X",
        style: "key-default",
        action() {
            textareaElement.textContent = textareaElement.textContent + this[currentLangState];

        },
        keyEvent: "KeyX",
    },
    {
        rus: "с",
        rusCaps: "С",
        rusShift: "С",
        eng: "c",
        engCaps: "C",
        engShift: "C",
        style: "key-default",
        action() {
            textareaElement.textContent = textareaElement.textContent + this[currentLangState];

        },
        keyEvent: "KeyC",
    },
    {
        rus: "м",
        rusCaps: "м",
        rusShift: "м",
        eng: "v",
        engCaps: "V",
        engShift: "V",
        style: "key-default",
        action() {
            textareaElement.textContent = textareaElement.textContent + this[currentLangState];

        },
        keyEvent: "KeyV",
    },
    {
        rus: "и",
        rusCaps: "И",
        rusShift: "И",
        eng: "b",
        engCaps: "B",
        engShift: "B",
        style: "key-default",
        action() {
            textareaElement.textContent = textareaElement.textContent + this[currentLangState];

        },
        keyEvent: "KeyB",
    },
    {
        rus: "т",
        rusCaps: "Т",
        rusShift: "Т",
        eng: "n",
        engCaps: "N",
        engShift: "N",
        style: "key-default",
        action() {
            textareaElement.textContent = textareaElement.textContent + this[currentLangState];

        },
        keyEvent: "KeyN",
    },
    {
        rus: "ь",
        rusCaps: "Ь",
        rusShift: "Ь",
        eng: "m",
        engCaps: "M",
        engShift: "M",
        style: "key-default",
        action() {
            textareaElement.textContent = textareaElement.textContent + this[currentLangState];

        },
        keyEvent: "KeyM",
    },
    {
        rus: "б",
        rusCaps: "Б",
        rusShift: "Б",
        eng: ",",
        engCaps: ",",
        engShift: "<",
        style: "key-default",
        action() {
            textareaElement.textContent = textareaElement.textContent + this[currentLangState];

        },
        keyEvent: "Comma",
    },
    {
        rus: "ю",
        rusCaps: "Ю",
        rusShift: "Ю",
        eng: ".",
        engCaps: ".",
        engShift: ">",
        style: "key-default",
        action() {
            textareaElement.textContent = textareaElement.textContent + this[currentLangState];

        },
        keyEvent: "Period",
    },
    {
        rus: ".",
        rusCaps: ".",
        rusShift: ",",
        eng: "/",
        engCaps: "/",
        engShift: "?",
        style: "key-default",
        action() {
            textareaElement.textContent = textareaElement.textContent + this[currentLangState];

        },
        keyEvent: "Slash",
    },
    {
        rus: "↑",
        rusCaps: "↑",
        rusShift: "↑",
        eng: "↑",
        engCaps: "↑",
        engShift: "↑",
        style: "key-special",
        action() {
            textareaElement.textContent = textareaElement.textContent + this[currentLangState];

        },
        keyEvent: "ArrowUp",
    },
    {
        rus: "Shift",
        rusCaps: "Shift",
        rusShift: "Shift",
        eng: "Shift",
        engCaps: "Shift",
        engShift: "Shift",
        style: "key-special-rshift",
        action() {


        },
        keyEvent: "ShiftRight",
    },
    {
        rus: "Ctrl",
        rusCaps: "Ctrl",
        rusShift: "Ctrl",
        eng: "Ctrl",
        engCaps: "Ctrl",
        engShift: "Ctrl",
        style: "key-special",
        action() {


        },
        keyEvent: "ControlLeft",
    },
    {
        rus: "Win",
        rusCaps: "Win",
        rusShift: "Win",
        eng: "Win",
        engCaps: "Win",
        engShift: "Win",
        style: "key-special",
        action() {


        },
        keyEvent: "MetaLeft",
    },
    {
        rus: "Alt",
        rusCaps: "Alt",
        rusShift: "Alt",
        eng: "Alt",
        engCaps: "Alt",
        engShift: "Alt",
        style: "key-special",
        action() {


        },
        keyEvent: "AltLeft",
    },
    {
        rus: " ",
        rusCaps: " ",
        rusShift: " ",
        eng: " ",
        engCaps: " ",
        engShift: " ",
        style: "key-default-space",
        action() {
            textareaElement.textContent = textareaElement.textContent + this[currentLangState];

        },
        keyEvent: "Space",
    },
    {
        rus: "Alt",
        rusCaps: "Alt",
        rusShift: "Alt",
        eng: "Alt",
        engCaps: "Alt",
        engShift: "Alt",
        style: "key-special",
        action() {


        },
        keyEvent: "AltRight",
    },
    {
        rus: "←",
        rusCaps: "←",
        rusShift: "←",
        eng: "←",
        engCaps: "←",
        engShift: "←",
        style: "key-special",
        action() {
            textareaElement.textContent = textareaElement.textContent + this[currentLangState];

        },
        keyEvent: "ArrowLeft",
    },
    {
        rus: "↓",
        rusCaps: "↓",
        rusShift: "↓",
        eng: "↓",
        engCaps: "↓",
        engShift: "↓",
        style: "key-special",
        action() {
            textareaElement.textContent = textareaElement.textContent + this[currentLangState];

        },
        keyEvent: "ArrowDown",
    },
    {
        rus: "→",
        rusCaps: "→",
        rusShift: "→",
        eng: "→",
        engCaps: "→",
        engShift: "→",
        style: "key-special",
        action() {
            textareaElement.textContent = textareaElement.textContent + this[currentLangState];

        },
        keyEvent: "ArrowRight",
    },
    {
        rus: "Ctrl",
        rusCaps: "Ctrl",
        rusShift: "Ctrl",
        eng: "Ctrl",
        engCaps: "Ctrl",
        engShift: "Ctrl",
        style: "key-special",
        action() {


        },
        keyEvent: "ControlRight",
    }
]



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



// - keyboard elements
const keyDefault = document.createElement("div");
const keySpecial = document.createElement("div");
const keyDefaultSpace = document.createElement("div");
const keySpecialBackspace = document.createElement("div");
const keySpecialTab = document.createElement("div");
const keySpecialDel = document.createElement("div");
const keySpecialCaps = document.createElement("div");
const keySpecialEnter = document.createElement("div");
const keySpecialLShift = document.createElement("div");
const keySpecialRShift = document.createElement("div");
//

// -- add style to keyboard elements
keyDefault.classList.add("key-default");
keySpecial.classList.add("key-default", "key-special");
keyDefaultSpace.classList.add("key-default", "key-default-space");
keySpecialBackspace.classList.add("key-default", "key-special", "key-special-backspace");
keySpecialTab.classList.add("key-default", "key-special", "key-special-tab");
keySpecialDel.classList.add("key-default", "key-special", "key-special-del");
keySpecialCaps.classList.add("key-default", "key-special", "key-special-caps");
keySpecialEnter.classList.add("key-default", "key-special", "key-special-enter");
keySpecialLShift.classList.add("key-default", "key-special", "key-special-lshift");
keySpecialRShift.classList.add("key-default", "key-special", "key-special-rshift");
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
for (let i = 0; i < keyData.length; i++) {
    addKey(keyData[i].style);
}

function addKey(style) { // add key according to key style
    if (style == "key-default") {
        keyboardWrapper.appendChild(keyDefault.cloneNode(true));
    } else if (style == "key-special") {
        keyboardWrapper.appendChild(keySpecial.cloneNode(true));
    } else if (style == "key-default-space") {
        keyboardWrapper.appendChild(keyDefaultSpace.cloneNode(true));
    } else if (style == "key-special-backspace") {
        keyboardWrapper.appendChild(keySpecialBackspace.cloneNode(true));
    } else if (style == "key-special-tab") {
        keyboardWrapper.appendChild(keySpecialTab.cloneNode(true));
    } else if (style == "key-special-del") {
        keyboardWrapper.appendChild(keySpecialDel.cloneNode(true));
    } else if (style == "key-special-caps") {
        keyboardWrapper.appendChild(keySpecialCaps.cloneNode(true));
    } else if (style == "key-special-enter") {
        keyboardWrapper.appendChild(keySpecialEnter.cloneNode(true));
    } else if (style == "key-special-lshift") {
        keyboardWrapper.appendChild(keySpecialLShift.cloneNode(true));
    } else {
        keyboardWrapper.appendChild(keySpecialRShift.cloneNode(true));
    };
}

function addKeyValue() {
    const allKeys = document.querySelectorAll(".key-default");
    for (let i = 0; i < allKeys.length; i++) {
        const element = keyData[i];
        allKeys[i].textContent = element.rus;
        allKeys[i].onclick = function () {
            keyData[i].action();
        }
        window.addEventListener("keydown", (e) => {
            if (e.code === keyData[i].keyEvent) {
                keyData[i].action();
                allKeys[i].classList.toggle("key-active") // add style to key while press it
            }
        })
        window.addEventListener("keyup", (e) => {
            if (e.code === keyData[i].keyEvent) {
                allKeys[i].classList.toggle("key-active") // delete style to key while press it

            }
        })

    }
}
addKeyValue();


//

// -- footer
footerParagraph.innerHTML = "OS: Windows<br>Eng/Rus:  left ctrl + left alt";
//

















