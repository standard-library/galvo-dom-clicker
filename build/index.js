"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _kefir = require("kefir");

function createElementWithClass(kind, className) {
  var element = document.createElement(kind);

  element.className = className;

  return element;
}

function clicker(kind) {
  var element = createElementWithClass("div", kind);
  var click = _kefir.Kefir.fromEvents(element, "click");

  click.onValue(function (e) {
    return e.preventDefault();
  });

  return { element: element, click: click };
}

exports.default = clicker;