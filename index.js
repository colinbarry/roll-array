function reverse(arr, begin, end) {
  var len = Math.ceil((end - begin) / 2),
    i;

  for (i = 0; i < len; ++i) {
    var tmp = arr[begin + i];
    arr[begin + i] = arr[end - i];
    arr[end - i] = tmp;
  }
}

function roll(arr, amount, begin, end) {
  var len;

  begin = begin || 0;
  end = end || arr.length;

  len = end - begin;
  amount = amount % len;
  if (amount < 0) {
    amount = len + amount;
  }

  reverse(arr, begin, end - 1);
  reverse(arr, begin, begin + amount - 1);
  reverse(arr, begin + amount, end - 1);

  return arr;
}

module.exports = roll

