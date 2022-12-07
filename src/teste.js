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
    console.log(value);
    console.log(listCrip[value]);
   (listCrip[value] !== undefined) ? cripted.push(listCrip[value]) : cripted.push(value);
  }
  return cripted;
};

console.log(encode('olá, tudo bem?'));
