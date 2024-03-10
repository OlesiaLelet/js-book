//!1.Створіть функцію getRandomArray(length, min, max) – яка
// повертає масив випадкових цілих чисел. У функцї є параметри: length -
// довжина масиву, min – мінімальне значення цілого числа, max – максимальне
// значення цілого числа.
// Приклад: getRandomArray(15, 1, 100) –> [6, 2, 55, 11, 78, 2, 55, 77, 57, 87, 23, 2,
// 56, 3, 2]

let getRandomArray= function (length, min, max) {
  const arrayOfR= new Array(length);
  
  const randomNumbers= function (min, max) {
  return Math.floor(Math.random()*(max-min) + min);
  };
  arrayOfR.fill(1);
  let arrayOfRandom= arrayOfR.map((item, index) => item * randomNumbers(min,max) )
  return arrayOfRandom;
  
  }
 // console.log(getRandomArray(5, 1, 5));

// !2.Створіть функцію getModa(...numbers) – яка вираховує моду всіх переданих
// в неї аргументв. НЕ ЦІЛІ ЧИСЛА ІГНОРУЮТЬСЯ
// Приклад: getModa(6, 2, 55, 11, 78, 2, 55, 77, 57, 87, 23, 2, 56, 3, 2) –> 2
let getModa = function(...numbers) {
  const numbersArray=[...numbers];
  const counter={};
  numbersArray.forEach((item, index) => { 
    if (!item.isInteger) 
    { numbersArray.splice[index, 1] };
  });
     const getAmount = numbersArray.forEach( (item) => {
      // if (!item.isInteger) continue;
      if (counter[item]) {
        counter[item]++
      } else 
      {
        counter[item]=1;
      }
    });
    let maxValue=0;
    let moda=0;
    let getMaxValue = Object.entries(counter).forEach(([key, value])=> {
      if (value> maxValue) {
        maxValue=value;
         moda=key;
        }
    
     });
  

return moda;
}
//  console.log(getModa(6, 2, 3.25, 55, 11, 78, 2, 55, 77, 57, 87, 23, 2, 56, 3, 2));

//3!.Створіть функцію getAverage(...numbers) – яка рахує середнє арифметичне всх переданих в неї аргументв. НЕ ЦІЛІ ЧИСЛА ІГНОРУЮТЬСЯ
 let getAverage = function (...numbers ) {
  arrayOfNum=[...numbers];
  const summ= arrayOfNum.reduce( (accumulator, current) => {
         return accumulator + current;
  });
  let averageValue= summ / arrayOfNum.length;
  return averageValue;
 }
 //console.log (getAverage(6, 2, 55, 11, 78, 2, 55, 77, 57, 87, 23, 2, 56, 3, 2));

//!4. Створіть функцію getMedian(...numbers) – яка рахує медану всіх переданих в неї аргументв. НЕ ЦІЛІ ЧИСЛА ІГНОРУЮТЬСЯ.
let getMedian= function (...numbers) {
  let arrayOfNum=[...numbers];
  let  mediana;
  let indexOfM;
  const sortedArr= arrayOfNum.sort( (a,b) => {return a-b});
  if (sortedArr.length%2==0) {
    indexOfM=sortedArr.length/2-1;
    const med1= sortedArr.at(indexOfM);
    const med2= sortedArr.at(indexOfM+1)
    mediana= (med1+med2)/2;
    return mediana;
    }
  else {
    indexOfM=sortedArr.length/2;
    mediana=sortedArr.at(indexOfM);
    return mediana;
 }
};
//console.log(getMedian(1, 2, 3, 4, 5 ));

//!5. Створіть функцію filterEvenNumbers(...numbers) – яка фільтрує парні числа передані як аргументи функції.
//Приклад: filterEvenNumbers(1, 2, 3, 4, 5, 6) -> [1, 3, 5];
const filterEvenNumbers = function (...numbers) {
const arrayOfNum=[...numbers];
 const filteredArr= arrayOfNum.filter((item)=> item%2!==0 );
 return filteredArr;
}
//console.log(filterEvenNumbers(1, 2, 3, 4, 5, 6));

//!6. Створіть функцію countPositiveNumbers(...numbers) – яка порахує кількість чисел більших нуля
//Приклад: countPositiveNumbers(1, -2, 3, -4, -5, 6) -> 3
const countPositiveNumbers= function (...numbers) {
  const arrayOfNum=[...numbers];
  let summP=0;
  const positiveNumbers=arrayOfNum.filter((item)=> item > 0);
  positiveNumbers.forEach((item) => summP+=1);
  return summP;
}
//console.log (countPositiveNumbers( -4, -5, 6, 8, 1, 4));

//!7.Створіть функцію getDividedByFive(...numbers) – яка від фільтрує усі елементи в масив та залишить тільки ті, які діляться націло на 5
//Приклад: getDividedByFive(6, 2, 55, 11, 78, 2, 55, 77, 57, 87, 23, 2, 56, 3, 2) -> [55, 55];
const getDividedByFive = function(...numbers) {
  const arrayOfNum=[...numbers];
  const dividedN= arrayOfNum.filter((item) => item%5==0);

  return dividedN;
}
//console.log (getDividedByFive (6, 2, 55, 11, 78, 2, 55, 77, 57, 87, 23, 2, 56, 3, 2));

// 8. Створіть функцію replaceBadWords(string) – яка 
//1) розіб'є фразу на слова,
//2) замінить погані слова на зрочки (*). При виршенні цього завдання необхідно розбити масив на слова за 
//допомогою функцї .split(" "), після чого масив необхдно буде склеїти .join(" ") Погані слова: shit та fuck.
//Передбачте можливсть розширювати cписок цих слів у майбутньому.
const  replaceBadWords = function (string, arrOfBadWords= ["shit", "fuck"]) {
    const withoutBadW= arrOfBadWords.forEach ((word) => {
     const reg = new RegExp(word, "gi")
     string =  string.replaceAll(word, "*".repeat(word.length));
 })
   return string;
 }
 //console.log (replaceBadWords("Why am I doing all the fucking work?"));

// 9. Створіть функцію divideByThree(word), яка розбиває кожне слово на умовні склади по 3 букви. 
//Якщо букв менше трьох – не розбиває. Пробіли завжди видаляються. Рядок приводится до нижнього регістру.
// Приклад: divideByThree("Commander) -> ["com", "man", "der"]
// Приклад: divideByThree("live") -> ["liv", "e"]
let  divideByThree = function (word) {
  const arrOfword= word.toLowerCase().split("");
  const ammountOfThree=Math.ceil(arrOfword.length/3);
  const arrByThree= Array(ammountOfThree).fill("")
  let i=0;
  let byThree = arrByThree.map ((item) => {
  const letters= arrOfword[i]  + (arrOfword[i+1]||"") + (arrOfword[i+2]||"");
    i+=3;
    return letters;
  })
  return byThree; 
  }
 console.log(divideByThree("Commander"));