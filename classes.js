class Student {
    constructor (university, course, fullName) {
        this.university= university;
        this.course = course;
        this.fullName = fullName;
    }
        getInfo () {
        return `Студент ${this.course}го курсу ${this.university}, ${this.fullName}`;
    }
     
    // 3. Створіть геттер оцінок marks, який повертає масив оцінок студента [5, 4, 4, 5].
    // 4. Створіть сеттер оцінок marks = 5, який дозволяє поставити оцінку студенту. Після того, як оцінка поставлена, геттер повинен
    // повернути масив marks -> [5, 4, 4, 5, 5]
    
set setMarks (marksOfStudent) {
    if (!this.dismiss) {
        if (!this.arrOfMarks) {
            this.arrOfMarks = [];
        }
        if (Array.isArray(marksOfStudent)) {
            this.arrOfMarks.push (...marksOfStudent);
            return this.arrOfMarks;
        } else {
            this.arrOfMarks.push(marksOfStudent);
            return this.arrOfMarks;
        };

        }
    } 
    get getArrOfMarks () {
        if (!this.dismiss) {
        return this.arrOfMarks;
        }
        else {
            return null;
        }
    }


 //   5. Створіть метод отримання середнього балу getAverageMark() -> 4.6
    getAverageMark () {
        if (!this.dismiss) {
        const summ = this.arrOfMarks.reduce ((accum, current) => { 
           return accum + current;
           })
           this.averageMark = summ/ this.arrOfMarks.length;
        return this.averageMark;
        }
        else {
            return null;
        }
    }

// 6. Створть метод dismiss, який "виключить" студента. Після виклику цього методу – ставити студенту оцінки та 
// отримувати їх більше не можна. (Ніяких помилок не повинно бути, просто повертається завжди null замість масиву оцінок)

    dismissSt () {
           
       this.dismiss = true;
    
       }
    
// 7. Створіть метод recover, який дозволить поновити студента.

       recoverSt () {
        this.dismiss = false;
        
       }

        
}

const student1 = new Student ("Вищої Школи Психотерапї м.Одеса", 1, "Остап Родоманський Бендер")
//console.log(student1.getInfo());
// // 4. Створіть сеттер оцінок marks = 5, який дозволяє поставити оцінку студенту.
// student1.setNewMark = 5;
// student1.setMarks = [3, 4, 3, 2];
// student1.setMarks = 2;
// console.log(student1.getArrOfMarks);
// //   5. Створіть метод отримання середнього балу getAverageMark() -> 4.6
//  console.log(student1.getAverageMark());

// // 6. Створть метод dismiss, який "виключить" студента. Після виклику цього методу – ставити студенту оцінки та 
// // отримувати їх більше не можна. (Ніяких помилок не повинно бути, просто повертається завжди null замість масиву оцінок)
    
    //console.log(student1.dismissSt());

// //7. Створіть метод recover, який дозволить поновити студента
    
    //console.log(student1.recoverSt());








// 1.Створть новий клас BudgetStudent, який повністю наслідує клас Student.
// 2. Бюджетний студент може отримати стипендію за допомогою методу getScholarship. Отримання стипендї супроводжується
// виведенням інформацї в консоль: ʼВи отримали 1400 грн. стипендїʼ.
//3. Метод отримання стипендї автоматично викликається кожні 30 секунд після створення об'єкту. Підказка: 
//викликайте його в constructor.

class BudgetStudent extends Student {
    constructor (university, course, fullName, ) {
        super (university, course, fullName);
        setInterval(() => this.getScholarship(), 30000);


    }
    getScholarship () {
        this.getAverageMark();
        if (!this.dismiss && this.averageMark >= 4 ) {
                this.scholarShip = 1400;
                console.log ("Ви отримали 1400 грн стипендії");
            }
        };
}
const student2 = new BudgetStudent ("Вищої Школи Психотерапї м.Одеса", 2, "Остап Родоманський Бендер");
console.log(student2.getInfo());
student2.setMarks = [4, 4, 5];
  console.log(student2.getAverageMark())

console.log(student2.getScholarship());
student2.setMarks = [2, 2, 2];

//console.log(student2.getAverageMark());
 //console.log(student2.getScholarship());