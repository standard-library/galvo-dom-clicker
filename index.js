import { Kefir as K } from "kefir";

function createElementWithClass(kind, className) {
  const element = document.createElement(kind);

  element.className = className;

  return element;
}

function clicker(kind) {
  const element = createElementWithClass("div", kind);
  const click = K.fromEvents(element, "click");

  click.onValue((e) => e.preventDefault());

  return { element, click };
}

export default clicker;
