import BaseElement from "./BaseElement";

export default class extends BaseElement {
    constructor (selector) {
        super(selector);
    }

    type(text) {
        return this.element.type(text);
    }
}