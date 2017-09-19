import { Kefir as K } from "kefir";

function createElementWithClass(kind, className) {
  const element = document.createElement(kind);

  element.className = className;

  return element;
}

function clicker(kind) {
  const element = createElementWithClass("div", kind);
  const click = K.fromEvents(element, "click");
  const mousedown = K.fromEvents(element, "mousedown");
  const mouseup = K.fromEvents(element, "mouseup");

  click.onValue(e => e.preventDefault());

  return { element, click, mousedown, mouseup };
}

export default clicker;
