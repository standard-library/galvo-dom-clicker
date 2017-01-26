"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _kefir = require("kefir");

function createElementWithClass(kind) {
  var element = document.createElement("div");

  element.className = kind;

  return element;
}

function clicker(kind) {
  var element = createElementWithClass(kind);
  var click = _kefir.Kefir.fromEvents(element, "click");

  click.onValue(function (e) {
    return e.preventDefault();
  });

  return { element: element, click: click };
}

exports.default = clicker;