export default class Key {
    constructor(symbol, style, actionProvider, keyEvent, capsSensetivity, shiftSensetivity) {
        this.symbol = symbol;
        this.style = style;
        this.actionProvider = actionProvider;
        this.keyEvent = keyEvent;
        this.capsSensetivity = capsSensetivity;
    }
}


