const assert = require('assert')
const roll = require('../index.js')

describe("array-roll", function () {
  describe("with an empty array", function () {
    it("always returns an empty array", function () {
      assert.deepEqual(roll([], 3), []);
      assert.deepEqual(roll([], -17), []);
    });
  });

  describe("can roll entire arrays", function () {
    it("0", function() {
      assert.deepEqual(roll([2, 3, 5, 7, 11, 13], 0), [2, 3, 5, 7, 11, 13]);
    })
    it("left", function () {
      assert.deepEqual(roll([2, 3, 5, 7, 11, 13], -3), [7, 11, 13, 2, 3, 5]);
    });
    it("right", function () {
      assert.deepEqual(roll([2, 3, 5, 7, 11, 13], 2), [11, 13, 2, 3, 5, 7]);
    });
    it("and wrap the amount around the length", function() {
      assert.deepEqual(roll([2, 3, 5, 7, 11, 13], 13), [13, 2, 3, 5, 7, 11]);
      assert.deepEqual(roll([2, 3, 5, 7, 11, 13], -10), [11, 13, 2, 3, 5, 7]);
    });
  });

  describe("can roll subarrays", function () {
    it("0", function () {
      assert.deepEqual(roll([2, 3, 5, 7, 11, 13], 0, 2, 4), [2, 3, 5, 7, 11, 13]);
    });
    it("left", function () {
      assert.deepEqual(roll([2, 3, 5, 7, 11, 13], -3, 1, 5), [2, 11, 3, 5, 7, 13]);
    });
    it("right", function () {
      assert.deepEqual(roll([2, 3, 5, 7, 11, 13], 1, 2, 4), [2, 3, 7, 5, 11, 13]);
    });
    it("and wrap the amount around the length", function() {
      assert.deepEqual(roll([2, 3, 5, 7, 11, 13], 13, 1, 4), [2, 7, 3, 5, 11, 13]);
      assert.deepEqual(roll([2, 3, 5, 7, 11, 13], -10, 1, 4), [2, 5, 7, 3, 11, 13]);
    });
  });
});
