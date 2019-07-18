"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _kefir = require("kefir");

function createElementWithClass(kind, className) {
  var element = document.createElement(kind);
  element.className = className;
  return element;
}

function clicker(kind) {
  var element = createElementWithClass("div", kind);

  var click = _kefir.Kefir.fromEvents(element, "click");

  var mousedown = _kefir.Kefir.fromEvents(element, "mousedown");

  var mouseup = _kefir.Kefir.fromEvents(element, "mouseup");

  click.onValue(function (e) {
    return e.preventDefault();
  });
  return {
    element: element,
    click: click,
    mousedown: mousedown,
    mouseup: mouseup
  };
}

var _default = clicker;
exports["default"] = _default;