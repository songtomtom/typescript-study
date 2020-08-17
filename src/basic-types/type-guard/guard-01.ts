function someFunc2(val: string | number) {
  if (isNumber(val)) {
    val.toFixed(2);
    isNaN(val);
  } else {
    val.split('/');
    val.toUpperCase();
    val.length;
  }
}

function isNumber(val: string | number): val is number {
  return typeof val === 'number';
}
