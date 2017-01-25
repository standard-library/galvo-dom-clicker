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
