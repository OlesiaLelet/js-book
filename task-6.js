const students = [{
    name: "Tanya",
    course: 3,
    subjects: {
    math: [4, 4, 3, 4],
    algorithms: [3, 3, 3, 4, 4, 4],
    data_science: [5, 5, 3, 4]
    }
    },
    {
    name: "Victor",
    course: 4,
    subjects: {
    physics: [5, 5, 5, 3],
    economics: [2, 3, 3, 3, 3, 5],
    geometry: [5, 5, 2, 3, 5]
    }
    },
    {
    name: "Anton",
    course: 2,
    subjects: {
    statistics: [4, 5, 5, 5, 5, 3, 4, 3, 4, 5],
    english: [5, 3],
    cosmology: [5, 5, 5, 5]
    }
    }];
 
//!1. Створіть функцію getSubjects(students[0] --> ["Math", "Algorithms", "Data science"] - яка повертає список 
//предметів для конкретного студента. Звернть увагу – назву предмету необхідно повертати з великої літери, а _ –замінити на пробіл 

const getSubjects = function (student) {
    const subjectsS= student.subjects;
    const subjectsForOne= Object.keys(subjectsS);
    const correctW= [];
    subjectsForOne.forEach ((subject) => { 
        subject=subject.replaceAll("_", " ");
        
        correctW.push(subject.slice(0,1).toUpperCase() + subject.slice(1));
        
    })

    return correctW;
    }
    //console.log(getSubjects(students[0]));

// !2. Створіть функцію getAverageMark(students[0]) --> 3.79 – яка поверне середню оцінку по всім предметам 
// для переданого студента НЕ МАСИВА СТУДЕНТІВ. Оцінку округліть до 2ого знаку. Можна використовувати функцї,
// написані у попередніх домашніх завданнях
 let getAverageMark = function (student) {
    let {course, name, subjects}= student;
    const arrMarks = Object.values(subjects);
   const allMarks = arrMarks[0].concat(arrMarks[1], arrMarks[2]);
   const summ = allMarks.reduce ((accum, current) => { return accum + current })
   const averageMark = Math.round ((summ/allMarks.length*100))/100;
   return averageMark;
 }
//console.log(getAverageMark(students[0]));


//!3. Створити функцію getStudentInfo(students[0]) --> { "course": 3, "name": "Tanya", "averageMark": 3.79} – 
//яка повертає інформацію загального виду по переданому студенту (вам знадобиться функція з попереднього 
//завдання). Повинна бути виведена інформація: курс, ім'я, середня оцінка.

const getStudentInfo = function (student) {
let {course, name, subjects}= student;
 const obj = {
    course,
    name,
    averageMark: getAverageMark((student))
}
return obj;
}
console.log(getStudentInfo(students[1]));


//!4.Створіть функцію getStudents Names(students) --> ["Anton", "Tanya, "Victor"] – яка повертає імена 
//студентів у алфавітному порядку
const getStudentNames = function (arr) {
const student= arr.map((item) => item.name);
const sorted = student.sort();
return sorted;
};
//console.log(getStudentNames(students));

// !5. Створіть функцію getBestStudent(students) --> "Anton" – яка повертає кращого студента з списку по 
//показнику середньої оцінки.
 const getBestStudent = function (arr) {
const averMarks = arr.map ((item) => {
    return getAverageMark(item.subjects) }); 
const copy = JSON.parse(JSON.stringify(arr));

for (let i = 0; i < copy.length; i++) {
      copy[i].averageM = averMarks[i];   
     };

const max = Math.max(...averMarks);
const returnValue = copy.find ((item) => item.averageM === max);
 if (returnValue) {
    return returnValue.name;
 }
 else {
     return string= "Щось пішло не так, студента не знайдено";
 }
 }
 //console.log(getBestStudent(students));

// !6. Створіть функцію calculateWordLetters("тест") --> { "т": 2, "е": 1, "с": 1 } – яка
// повертає обє'кт, в якому ключ це букви у слові, а значення – кільксть їх
// повторень.
const calculateWordLetters = function (string) {
const obj = {};
const str = string.toLowerCase().replaceAll(" ", "");
for (let i=0; i<str.length; i++) {
    if (obj[str[i]]) {
        obj[str[i]]++;
    } else {
        obj[str[i]]=1;
    }
}
return obj;
}
//console.log(calculateWordLetters("тест"));
//console.log (students);
