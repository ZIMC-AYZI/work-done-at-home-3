
  function makeCounter() {

  let currentCount = 0;
  return function() {
    currentCount++;
    return currentCount;
  };
}

  let counter = makeCounter();

function Hobbit(name, age, counter) {
    this.name = name;

    this.getAge = function(min, max){
        this.age = Math.floor(Math.random() * (max - min + 1) + min);
        return this.age;
    };
    this.getAge(12, 100);

    counter = counter;

};

let hobbitsArea = [];

const sasha = new Hobbit('Sasha');
const lesha = new Hobbit('Lesha');
const dima = new Hobbit('Dima');
const lara = new Hobbit('Lara');
const pasha = new Hobbit('Pasha');
const grisha = new Hobbit('Grisha');
const perya = new Hobbit('Perya');
const stas = new Hobbit('Stas');
const misha = new Hobbit('Misha');
const krava = new Hobbit('Krava');

console.log(hobbitsArea);

hobbitsArea.push(sasha, lesha, dima, lara, pasha, grisha, perya, stas, misha, krava);
for(let i = 0;i < hobbitsArea.length; i++){

    console.log('My name ' + hobbitsArea[i].name + ' i am ' + hobbitsArea[i].age + ' years old ' + hobbitsArea[i].counter);
}


