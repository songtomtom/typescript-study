function someFuncIn(val: any) {
  if ('toFixed' in val) {
    val.toFixed(2);
    isNaN(val);
  } else if ('split' in val) {
    val.split('/');
    val.toUpperCase();
    val.length;
  }
}
