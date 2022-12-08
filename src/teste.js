// condição 1 - linea < lineB + lineC && linea > modulo (lineB - lineC)
// ou
// linea < lineB + linec && lineb < linea + linec && linec < lineb+linea
// eslint-disable-next-line sonarjs/cognitive-complexity, complexity
const fCondition = (lineA, lineB, lineC) => {
  if (lineA < lineB + lineC && lineA > Math.abs(lineB - lineC)) return true;
  if (lineB < lineA + lineC && lineB > Math.abs(lineA - lineC)) return true;
  if (lineC < lineB + lineA && lineC > Math.abs(lineB - lineA)) return true;
  return false;
};

const sCondition = (lineA, lineB, lineC) => {
  if (lineA < lineB + lineC && lineB < lineA + lineC && lineC < lineA + lineB) return true;
  return false;
};

const triangleCheck = (lA, lB, lC) => fCondition(lA, lB, lC) && sCondition(lA, lB, lC);

console.log(triangleCheck(10, 14, 8));
