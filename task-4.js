
const students = ["Олександр", "Ігор", "Олена", "Іра", "Олексій",
"Світлана"];
const themes = ["Диференційне рівняння", "Теорія автоматів",
"Алгоритми структури даних"];
const marks = [4, 5, 5, 3, 4, 5];
 
// 1.Розділіть студентів на пари(хлопець + дівчина) для роботи над проектом.
let divideOnPairs = function (Array=students) {
    const pairs=[];
    const female=[];
    const male=[];
    for (let i=0; i < Array.length; i++) {
           if (Array[i].at(-1)==="а") {
              female.push(Array[i]);
            }
            else {
            male.push(Array[i]);
           }
    }

        for (let i=0; i< female.length; i++) {
            pairs.push([female[i], male[i]]);
          }
          return pairs;
    
}
//console.log(divideOnPairs());


// 2. Зіставте пари з попереднього завдання та теми проектів, над якими студенти будуть працювати.
const Pairs=[...divideOnPairs()];
//const Pairs=[['Олена', 'Олександр'],['Іра', 'Ігор'],['Світлана', 'Олексій']];

let getProjectforPairs= function (studentsPairsArray=Pairs) {
      const projectForPairs=[];
      for (let i=0; i< studentsPairsArray.length; i++) {
        projectForPairs[i]=studentsPairsArray[i];
        projectForPairs[i][0]=projectForPairs[i][0] + " " + projectForPairs[i][1];
        projectForPairs[i].splice(1,1);
        projectForPairs[i][1]=themes[i];
      }
    return projectForPairs;
}

//console.log (getProjectforPairs());

// 3.Зіставте оцінки(marks) зі студентом(students): [["Саша", 4], [...], [...]]
let getMarksForStudent= function (ArrayOfStudents=students) {
const ArrayOfStudentsWithMarks=[];
for (let i=0; i< ArrayOfStudents.length; i++) {
   ArrayOfStudentsWithMarks[i]=[students[i]];
   ArrayOfStudentsWithMarks[i][1]=marks[i];
}
return ArrayOfStudentsWithMarks;
}
//console.log(getMarksForStudent());

//4. Поставте кожній парі випадкову оцінку(від 1 до 5) за проєкт (тут функція буде не чистою, але не повинна мутувати массив): [["Олександр Олена", "Теорія автоматів", 5], [...], [...]]
// const studentsWithProjects= [...getProjectforPairs()];
// let randomMarksForProject= function(ArrayOfStudents=studentsWithProjects) {
// for (let i=0; i< ArrayOfStudents.length; i++) {
//   let randomMark=Math.floor(Math.random()*5);
//   if (randomMark>0) {
//   ArrayOfStudents[i][2]=randomMark;
//   }
// }
// return ArrayOfStudents;
//  }
//console.log(randomMarksForProject);

//5. Вивести початковий масив та результати виконання кожної функції в консоль.
console.log(students);
console.log(themes);
console.log(marks);
console.log(divideOnPairs());
console.log(getProjectforPairs());
console.log(getMarksForStudent());
console.log(randomMarksForProject());
