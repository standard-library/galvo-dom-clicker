import test from "tape";

import clicker from "..";

test('creates an element with a class', (t) => {
  const kind = "foo"
  const arrow = clicker(kind);

  t.equal(arrow.element.className, kind);

  t.end();
});

test('creates an stream of click events', (t) => {
  const arrow = clicker("foo");

  arrow.click.onValue(function (e) {
    t.equal(arrow.element, e.target)
    t.end();
  });

  arrow.element.click();
});
