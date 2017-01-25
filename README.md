# galvo-clicker

A function that, given a class name, creates an element with a corresponding click event stream. Could be used for adding left and right arrows to a slideshow.

## Installation

```shell
yarn add @standard-library/galvo-clicker
```

## Usage

```javascript
import clicker from "@standard-library/galvo-clicker";

button = clicker("button");

button.element
// => <div class="button"></div>
button.click
// => Kefir.Stream
```

Using [galvo](https://github.com/standard-library/galvo) this event stream can be used to move forward and backward in a sequence of elements:

```javascript
import galvo from "@standard-library/galvo";
import clicker from "@standard-library/galvo-clicker";

const next = clicker("paginator");
const sequence = galvo({
  advance: next.click
}, ["a", "b", "c"]);

next.element.click();
next.element.click();

sequence.current
// => a---b---c
```
