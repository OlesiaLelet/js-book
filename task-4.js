
const students = ["Олександр", "Ігор", "Олена", "Іра", "Олексій",
"Світлана"];
const themes = ["Диференційне рівняння", "Теорія автоматів",
"Алгоритми структури даних"];
const marks = [4, 5, 5, 3, 4, 5];
 
// 1.Розділіть студентів на пари(хлопець + дівчина) для роботи над проектом.
const divideOnPairs = function (array) {
    const pairs=[];
    const female=[];
    const male=[];
    for (let i=0; i < array.length; i++) {
           if (array[i].at(-1)==="а") {
              female.push(array[i]);
            }
            else {
            male.push(array[i]);
           }
    }

    for (let i=0; i< female.length; i++) {
          pairs.push([female[i], male[i]]);
         }
          return pairs;
    
}
//console.log(divideOnPairs(students));

// 2. Зіставте пари з попереднього завдання та теми проектів, над якими студенти будуть працювати.
const Pairs=[...divideOnPairs(students)];

const getProjectforPairs= function (studentsPairsArray, themesForSt) {
  const projectForPairs=[];
  for (let i=0; i< studentsPairsArray.length; i++) {
    projectForPairs[i]=[studentsPairsArray[i][0] + " " + studentsPairsArray[i][1], themesForSt[i]];
  }
return projectForPairs;
}

//console.log (getProjectforPairs(Pairs, themes));

// 3.Зіставте оцінки(marks) зі студентом(students): [["Саша", 4], [...], [...]]
const getMarksForStudent= function (ArrayOfStudents, marks) {
const ArrayOfStudentsWithMarks=[];
for (let i=0; i< ArrayOfStudents.length; i++) {
   ArrayOfStudentsWithMarks[i]=[ArrayOfStudents[i], marks[i]];
}
return ArrayOfStudentsWithMarks;
}
//console.log(getMarksForStudent(students, marks));

//4. Поставте кожній парі випадкову оцінку(від 1 до 5) за проєкт (тут функція буде не чистою, але не повинна мутувати массив): [["Олександр Олена", "Теорія автоматів", 5], [...], [...]]
const studentsWithProjects= [...getProjectforPairs(Pairs, themes)];
 
const randomMarksForProject= function(arrayOfStudents) {
  const arrayWithRandomMarks=[];
  function randomInt(min,max){
    return Math.floor(Math.random() * (max - min) + min);
    }
 for (let i=0; i< arrayOfStudents.length; i++) {
  arrayWithRandomMarks[i]=arrayOfStudents[i];
  arrayWithRandomMarks[i][2]=randomInt(1,5); 
 }
 return arrayWithRandomMarks;
  }
// console.log(randomMarksForProject(studentsWithProjects));

//5. Вивести початковий масив та результати виконання кожної функції в консоль.
console.log(students);
console.log(themes);
console.log(marks);
console.log(divideOnPairs(students));
console.log (getProjectforPairs(Pairs, themes));
console.log(getMarksForStudent(students, marks));
console.log(randomMarksForProject(studentsWithProjects));
