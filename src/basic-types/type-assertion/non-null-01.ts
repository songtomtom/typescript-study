// function fnA(x: number | null | undefined) {
//   return x.toFixed(2);
// }

function fnD(x: number | null | undefined) {
  if (x) {
    return x.toFixed(2);
  }
}

function fnB(x: number | null | undefined) {
  return (x as number).toFixed(2);
}

function fnC(x: number | null | undefined) {
  return (<number>x).toFixed(2);
}

function fnE(x: number | null | undefined) {
  return x!.toFixed(2);
}
