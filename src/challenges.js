// Desafio 1 - Crie a função compareTrue
const compareTrue = (parametro1, parametro2) => parametro1 && parametro2;
// Desafio 2 - Crie a função splitSentence
const splitSentence = (parametro) => parametro.split(' ');
// Desafio 3 - Crie a função concatName
const concatName = (paramArray) => (`${paramArray[paramArray.length - 1]}, ${paramArray[0]}`);
// Desafio 4 - Crie a função footballPoints
const footballPoints = (wins, ties) => {
  let points = 0;
  points += wins * 3 + ties;
  return points;
};
// Desafio 5 - Crie a função highestCount
const highestCount = (arrayNum) => {
  let maior = arrayNum[0];
  let cont = 0;
  for (let value of arrayNum) {
    if (value > maior) {
      maior = value;
      cont = 1;
    } else if (value === maior) {
      cont += 1;
    }
  }
  return cont;
};
// Desafio 6 - Crie as funções calcTriangleArea, calcRectangleArea e calcAllAreas
const calcTriangleArea = (base, height) => (base * height) / 2;
const calcRectangleArea = (base, height) => base * height;
const calcAllAreas = (base, height, form) => {
  let retorno = '';
  if (form === 'triângulo') {
    retorno = `O valor da área do ${form} é de: ${calcTriangleArea(base, height)}`;
  } else if (form === 'retângulo') {
    retorno = `O valor da área do ${form} é de: ${calcRectangleArea(base, height)}`;
  } else {
    retorno = 'Não foi possível fazer o cálculo, insira uma forma geométrica válida';
  }
  return retorno;
};
// Desafio 7 - Crie a função catAndMouse

// Desafio 8 - Crie a função fizzBuzz

// Desafio 9 - Crie a função encode e a função decode

// Desafio 10 - Crie a função techList

// Não modifique essas linhas
module.exports = {
  calcTriangleArea: typeof calcTriangleArea === 'function' ? calcTriangleArea : (() => { }),
  calcRectangleArea: typeof calcRectangleArea === 'function' ? calcRectangleArea : (() => { }),
  calcAllAreas: typeof calcAllAreas === 'function' ? calcAllAreas : (() => { }),
  catAndMouse: typeof catAndMouse === 'function' ? catAndMouse : (() => { }),
  compareTrue: typeof compareTrue === 'function' ? compareTrue : (() => { }),
  concatName: typeof concatName === 'function' ? concatName : (() => { }),
  decode: typeof decode === 'function' ? decode : (() => { }),
  encode: typeof encode === 'function' ? encode : (() => { }),
  fizzBuzz: typeof fizzBuzz === 'function' ? fizzBuzz : (() => { }),
  footballPoints: typeof footballPoints === 'function' ? footballPoints : (() => { }),
  highestCount: typeof highestCount === 'function' ? highestCount : (() => { }),
  splitSentence: typeof splitSentence === 'function' ? splitSentence : (() => { }),
  techList: typeof techList === 'function' ? techList : (() => { }),
};
