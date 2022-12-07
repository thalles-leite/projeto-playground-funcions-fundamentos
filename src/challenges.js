/* eslint no-unused-expressions: ["error", { "allowTernary": true }] */
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
const catAndMouse = (mouse, cat1, cat2) => {
  retorno = '';
  const distCat1 = Math.abs(cat1 - mouse);
  const distCat2 = Math.abs(cat2 - mouse);
  if (distCat1 < distCat2) {
    retorno = 'cat1';
  } else if (distCat2 < distCat1) {
    retorno = 'cat2';
  } else {
    retorno = 'os gatos trombam e o rato foge';
  }
  return retorno;
};
// Desafio 8 - Crie a função fizzBuzz
const fizzBuzz = (arrayNum) => { // Utilizei o switch case para conseguir reduzir a complexidade cognitiva para 5.
  const arrReturn = [];
  for (let value of arrayNum) {
    switch (true) { // o switch case avalia a condição true e false dos cases...fonte: https://seanbarry.dev/posts/switch-true-pattern
    case (value % 15 === 0): // 15 é o mínimo multiplo comum de 3 e 5, logo, para reduzir a complexidade cognitiva, utilizei o módulo de 15.
      arrReturn.push('fizzBuzz');
      break;
    case (value % 3 === 0):
      arrReturn.push('fizz');
      break;
    case (value % 5 === 0):
      arrReturn.push('buzz');
      break;
    default: // seria default se todas as condições acima forem falsas.
      arrReturn.push('bug!');
      break;
    }
  }
  return arrReturn;
};

// Desafio 9 - Crie a função encode e a função decode
const encode = (word) => {
  const cripted = [];
  const arrWord = word.split('');
  const listCrip = {
    a: 1,
    e: 2,
    i: 3,
    o: 4,
    u: 5,
  };
  for (let value of arrWord) {
    (listCrip[value] !== undefined) ? cripted.push(listCrip[value]) : cripted.push(value);
  }
  return (cripted.join(''));
};
const decode = (word) => {
  const cripted = [];
  const arrWord = word.split('');
  const listCrip = {
    1: 'a',
    2: 'e',
    3: 'i',
    4: 'o',
    5: 'u',
  };
  for (let value of arrWord) {
    (listCrip[value] !== undefined) ? cripted.push(listCrip[value]) : cripted.push(value);
  }
  return (cripted.join(''));
};
// Desafio 10 - Crie a função techList
const techList = (techP, nameP) => {
  const arrReturn = [];
  const ordTech = techP.sort();
  for (let value of ordTech) {
    const objeto = {
      tech: value,
      name: nameP,
    };
    arrReturn.push(objeto);
  }
  return arrReturn.sort();
};
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
