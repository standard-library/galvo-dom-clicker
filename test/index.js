import test from "tape";

import clicker from "..";

test("creates an element with a class", t => {
  const kind = "foo";
  const arrow = clicker(kind);

  t.equal(arrow.element.className, kind);

  t.end();
});

test("creates a stream of click events", t => {
  const arrow = clicker("foo");

  t.notEqual(arrow.click, undefined);

  let values = [];
  arrow.click.observe(e => {
    values.push(e);
  });

  triggerMouseEvent(arrow.element, "click");

  t.equal(values.length, 1);
  t.end();
});

test("creates a stream of mousedown events", t => {
  const arrow = clicker("foo");

  t.notEqual(arrow.mousedown, undefined);

  let values = [];
  arrow.mousedown.observe(e => {
    values.push(e);
  });

  triggerMouseEvent(arrow.element, "mousedown");

  t.equal(values.length, 1);
  t.end();
});

test("creates a stream of mouseup events", t => {
  const arrow = clicker("foo");

  t.notEqual(arrow.mouseup, undefined);

  let values = [];
  arrow.mouseup.observe(e => {
    values.push(e);
  });

  triggerMouseEvent(arrow.element, "mouseup");

  t.equal(values.length, 1);
  t.end();
});

function triggerMouseEvent(node, type) {
  let event = new MouseEvent(type);

  node.dispatchEvent(event);
}
