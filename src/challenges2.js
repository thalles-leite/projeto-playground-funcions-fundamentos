// Desafio 11 - Crie a função generatePhoneNumber
const verifySize = (numPhone) => numPhone.length !== 11;
const verifyNumbers = (numPhone) => {
  for (let value of numPhone) {
    if (value < 0 || value > 9) {
      return true;
    }
  }
  return false;
};
// eslint-disable-next-line sonarjs/cognitive-complexity
const verifyRepet = (numPhone) => {
  let cont = 0;
  for (let value of numPhone) {
    for (let valueToComp of numPhone) {
      if (value === valueToComp) cont += 1;
    }
    if (cont > 2) return true;
    cont = 0;
  }
  return false;
};

const verifyErro = (fverifySize, fvNumbs, fvRpt) => {
  let erro;
  if (fverifySize) erro = 'Array com tamanho incorreto.';
  else if (fvNumbs || fvRpt) erro = 'não é possível gerar um número de telefone com esses valores';
  return erro;
};

const generatePhoneNumber = (numPhone) => {
  const erro = verifyErro(verifySize(numPhone), verifyNumbers(numPhone), verifyRepet(numPhone));
  let ddd;
  let finalNumber = [];
  if (erro === undefined) {
    ddd = numPhone.slice(0, 2).join('');
    firstNumbers = numPhone.slice(2, 7).join('');
    lastNumbers = numPhone.slice(7, 11).join('');
    finalNumber.push('(', ddd, ') ', firstNumbers, '-', lastNumbers);
    return finalNumber.join('');
  }
  return erro;
};

// Desafio 12 -  Crie a função triangleCheck
// eslint-disable-next-line complexity, sonarjs/cognitive-complexity
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
// Desafio 13 - Crie a função hydrate
const hydrate = (pString) => {
  let soma = 0;
  let splitString = pString.split('');
  console.log(splitString);
  for (let value of splitString) {
    if (parseInt(value, 10) >= 0 && parseInt(value, 10) <= 9) soma += parseInt(value, 10);
  }
  if (soma > 1) return (`${soma} copos de agua`);
  return (`${soma} copo de água`);
};
/* eslint no-undef: 0 */

// Não modifique essas linhas
module.exports = {
  generatePhoneNumber: typeof generatePhoneNumber === 'function' ? generatePhoneNumber : (() => {}),
  triangleCheck: typeof triangleCheck === 'function' ? triangleCheck : (() => {}),
  hydrate: typeof hydrate === 'function' ? hydrate : (() => {}),
};
