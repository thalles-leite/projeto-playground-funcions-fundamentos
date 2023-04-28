// Desafio 11 - Crie a função generatePhoneNumber
const generatePhoneNumber  = (array) => {
  let verificaNumero = array.length;
  if(verificaNumero !== 11){
    return 'Array com tamanho incorreto.';
  }
  for (let numeros of array) {
    if(numeros > 9){
      return 'não é possível gerar um número de telefone com esses valores';
    }else if(numeros < 0){
      return 'não é possível gerar um número de telefone com esses valores';
    }    
    for (let numeros2 in array) {
      if (numeros === array[numeros2]) {
        contador += 1;
      }
      if(contador >= 3){
        return 'não é possível gerar um número de telefone com esses valores';
      }
    }
    /*let contador = 1;
    for (const numeros2 of array) {
      if(numeros[index] === numeros2[index]){
        contador +=1;
      }
      if(contador >= 3){
        return 'não é possível gerar um número de telefone com esses valores';
      }
    }*/
  }
  let numberParenteses = array.splice(0, 2);
  let numberPrimeiraParte = array.splice(0, 5);
  let numberSegundaParte = array.splice(0, 8);
  return `(${numberParenteses.join('')}) ${numberPrimeiraParte.join('')}-${numberSegundaParte.join('')}`;
}

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
  for (let value of splitString) {
    if (parseInt(value, 10) >= 0 && parseInt(value, 10) <= 9) soma += parseInt(value, 10);
  }
  if (soma > 1) return (`${soma} copos de água`);
  return (`${soma} copo de água`);
};
/* eslint no-undef: 0 */

// Não modifique essas linhas
module.exports = {
  generatePhoneNumber: typeof generatePhoneNumber === 'function' ? generatePhoneNumber : (() => {}),
  triangleCheck: typeof triangleCheck === 'function' ? triangleCheck : (() => {}),
  hydrate: typeof hydrate === 'function' ? hydrate : (() => {}),
};
