//!1. Створити функцю getMaxDigit(number) – яка отримує будь-яке число та виводить найбльшу цифру в цьому числа.

function getMaxDigit(number) {
    
    let Array=String(number).split("");   
    let maxDigit=Math.max(...Array);
    return maxDigit;
}
//getMaxDigit(95584);
//AБО

function getMaxDigit(number) {
    let Array=String(number).split("");   
    let MaxDigit=Array[0];
    for (let i=0; i< Array.length; i++) {
        if (Array[i]>MaxDigit) {
            MaxDigit=Array[i];
        }
    }
    return MaxDigit;
};

// getMaxDigit(3221183);



//2. Створити функцію, яка визначає ступінь числа. Не використовуючи Math.pow та **. Використовуйте цикл
function knowStepOfNumber (number, raisingOfto) {
         let stepOfNumber=0;
         for (let i=0; i<number; i++) {
                if (raisingOfto/number>number) {
                stepOfNumber+=1;
                }
         };
         return stepOfNumber
         //або 
         function knowStepOfNumber (number, raisingOfto) {
            let stepOfNumber=0;
            let changeNumber; 
             for (let i=0; i < ; i++) {
                 changeNumber=number*number;
                    if (changeNumber<raisingOfto) {
                    stepOfNumber+=1;
                    }
             };
             return stepOfNumber;
    }
    knowStepOfNumber (3, 243);
}

//!3. Створити функцію, яка форматує ім'я, роблячи першу букву великою. ("влад" -> "Влад", "вЛАД" -> "Влад" так далі)
function FirstLetterIsBig (Name) {
    let lowerCase = Name.toLowerCase();
    let correctWriting = lowerCase[0].toUpperCase() + lowerCase.slice(1);
     return correctWriting;
 };
FirstLetterIsBig("LeSia");

//!4. Створити функцю, яка вираховує суму, що залишається псля оплати податку вд зарабтньої плати. (Податок = 18% + 1.5% -> 19.5%).
function SalaryAfterTaxes (salary) {
   let taxes = 0.195*salary;
   let salaryMinusTaxes = salary - taxes;
   return salaryMinusTaxes;
};
SalaryAfterTaxes(1000);

//!5. Створити функцію, яка повертає випадкове ціле число в діапазоні від N до M.
 function getRandomNumber (N, M) {
    let randomNumber=Math.floor(Math.random()*(M-N));
    return randomNumber;
 }
 getRandomNumber(5,85);

//!6. Створити функцію, яка рахує скільки разів певна буква повторюється в слові 
function countLetter (letter, word) {
    let numberOfLetter=0;
    for(let i=0; i < word.length; i++) {
        if (word[i]===letter) {
            numberOfLetter+=1;
        }
        numberOfLetter;
    }
    return numberOfLetter;
};
countLetter("а", "Асталавста");

//!7. Створіть функцію, яка конвертує долари в гривн та навпаки в залежності від наявності символа $ або UAH в рядку.
//!8.Врахуйте, інші валюти не конвертуються, потрібно виводитиbпомилку, також регістр uah не має значення.
    

        function convertCurrency (sumaWithSign) {
        let suma;
        let indexOfSuma;
        let sumaNumber;
        let dollar=sumaWithSign.includes("$");
        let grivna= sumaWithSign.includes("UAH")||sumaWithSign.includes("uah");
        let convertedCurrency=0;
            if (dollar) {
                suma=sumaWithSign.slice(0,-1);
                sumaNumber= + suma;
                convertedCurrency=sumaNumber*38.07;
            }
            if (grivna) {
                indexOfSuma=sumaWithSign.indexOf("U");
                suma=sumaWithSign.slice(0,-3);
                sumaNumber= + suma;
                convertedCurrency=sumaNumber/38.07;
             }
             else {
                alert ("Помилка, введіть суму в доларах чи гривнях!");
             }
            console.log (convertedCurrency);
        };
        convertCurrency("1000UAH");

     // !9. Створіть функцю генерацї випадкового паролю (тільки числа),довжина встановлюється користувачем 
     //або по замовчуванню = 8 символам.
      function getRandomPassword (passwordLength=8) {
        let randomNumber;
        let randomPassword=[];
        for (let i=0; i<passwordLength; i++) {
            randomNumber=Math.floor(Math.random()*10);
            randomPassword+=randomNumber;
        }
        return randomPassword;
      }
      //getRandomPassword();

      //! 10. Створіть функцію, яка видаляє всі букви з речення.
      function deleteLetters (letter, string) {
        let newString=string.replaceAll(letter, "");
         return newString;
       };
    //    deleteLetters("a", "abahamalaha");

    //12. Створіть функцію, яка видалить з речення букви, як зустрчаються більше 1 разу."

function deleteLetters (string="Бісквіт був дуже ніжним") {
        let newString=[];
         for (let i=0; i< string.length; i++) {
            newString+= string[i];
            if (newString.includes(string[i]))
            
         }


       
         let newS=string.replaceAll(letter, "");
         return newString;
       };


       const string="Бісквіт був дуже ніжним";
let newString=;
let newS;
for (let i=0; i< string.length; i++) {
            newString+= string[i];
            if (newString.includes(string[i])) {
            newS=newString.replaceAll(string[i], "");
            }
            
         }
newS;
