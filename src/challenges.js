// Desafio 1
function compareTrue(girafa, elefante, macaco) {
  // iniciando o projeto
  if ((girafa && elefante) === true) {
    return true;
  }
  if ((macaco && elefante) === false) {
    return false;
  } return false;
}

// Desafio 2
function calcArea(base, height) {
  let area = (base * height) / 2;
  return area;
}

// Desafio 3
function splitSentence(parametro) {
  let array = parametro.split(' ');
  return array;
}

// Desafio 4
function concatName(array) {
  return array[array.length - 1] + ', ' + array[0];
}

// Desafio 5
function footballPoints(wins, ties) {
  let result = 0;
  result = (wins * 3) + (ties * 1);
  return result;
}

// Desafio 6
function highestCount(array) {
  let count = 0;
  let major = array[0];
  for (let i = 0; i < array.length; i++) {
    if (array[i] > major) {
      major = array[i];
    }
  }
  for (let i = 0; i < array.length; i++) {
    if (array[i] >= major) {
      count++;
    }
  } return count;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let distancia1 = Math.abs(mouse - cat1);
  let distancia2 = Math.abs(mouse - cat2);

  if (distancia1 < distancia2) {
    return 'cat1';
  } if (distancia1 > distancia2) {
    return 'cat2';
  } return 'os gatos trombam e o rato foge';
}

// Desafio 8
function fizzBuzz(numbers) {
  let array = [];
  for (let i = 0; i < array.length; i++) {
    if (numbers[i] % 3 === 0 && numbers[i] % 5 === 0) {
      array.push('fizzBuzz');
    }
  } else if (numbers[i] % 3 === 0 && numbers[i] % 5 != 0) {
    array.push('fizz');
  } else if (numbers[i] % 3 != 0 && numbers[i] % 5 === 0) {
    array.push('buzz');
  } else (numbers[i] % 3 != 0 && numbers[i] % 5 != 0) {
    array.push('bug!')
  }
}

// Desafio 9
function encode() {
  // seu código aqui
}
function decode() {
  // seu código aqui
}

// Desafio 10
function techList() {
  // seu código aqui
}

module.exports = {
  calcArea,
  catAndMouse,
  compareTrue,
  concatName,
  decode,
  encode,
  fizzBuzz,
  footballPoints,
  highestCount,
  splitSentence,
  techList,
};
