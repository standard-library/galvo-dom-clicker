"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _kefir = require("kefir");

function paginator(kind) {
  var element = document.createElement("div");
  var click = _kefir.Kefir.fromEvents(element, "click");

  element.className = kind;

  click.onValue(function (e) {
    return e.preventDefault();
  });

  return { element: element, click: click };
}

exports.default = paginator;