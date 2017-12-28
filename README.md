roll-array
==========

Performs efficient inline left and right rolls of arrays and subarrays.

## Installation

  `npm install roll-array`

## Usage
```javascript
  var roll = require('roll-array');
  roll([0, 1, 2, 3], 1);
  ```

## Examples
```javascript
  var roll = require('roll-array');

  // right roll
  roll([0, 1, 2, 3, 4, 5, 6, 7], 2);
  // = [6, 7, 0, 1, 2, 3, 4, 5]

  // left roll
  roll([0, 1, 2, 3, 4, 5, 6, 7], -3);
  // = [3, 4, 5, 6, 7, 0, 1, 2]

  // right roll of elements [1, 5)
  roll([0, 1, 2, 3, 4, 5, 6, 7], 2, 1, 5);
  // = [0, 3, 4, 1, 2, 5, 6, 7]
  ```

## Methods

## `roll-array(array, amount[, begin][, end])`
  Rolls the array by the given amount. The array is rolled inline, but also returned by the function.

  `array` {Array} the array to roll.

  `amount` {Number} the amount to roll, which can be positive for right rolls or negative for left rolls.

  `begin` {Number} the index of the first element to roll. If unspecified, will assume 0 for the first element.

  `end` {Number} the index beyond the last element to roll. If unspecified, will assume the array length.

  `return` the rolled array.

## Tests

  `npm test`
