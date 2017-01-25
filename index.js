import { Kefir as K } from "kefir";

function createElementWithClass(kind) {
  const element = document.createElement("div");

  element.className = kind;

  return element
}

function clicker(kind) {
  const element = createElementWithClass(kind);
  const click = K.fromEvents(element, "click");

  click.onValue((e) => e.preventDefault());

  return { element, click };
}

export default clicker;
