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



//!2. Створити функцію, яка визначає ступінь числа. Не використовуючи Math.pow та **. Використовуйте цикл
function getStepOfNumber (number, stepOfNumber) {
    let raisingOfto=1;
    for (let i=1; i<=stepOfNumber; i++) {
       raisingOfto=raisingOfto*number;
    };
    return raisingOfto;
};
//getStepOfNumber (9, 3);

//!3. Створити функцію, яка форматує ім'я, роблячи першу букву великою. ("влад" -> "Влад", "вЛАД" -> "Влад" так далі)
function FirstLetterIsBig (Name) {
    let lowerCase = Name.toLowerCase();
    let correctWriting = lowerCase[0].toUpperCase() + lowerCase.slice(1);
     return correctWriting;
 };
//FirstLetterIsBig("LeSia");

//!4. Створити функцю, яка вираховує суму, що залишається псля оплати податку вд зарабтньої плати. (Податок = 18% + 1.5% -> 19.5%).
function SalaryAfterTaxes (salary) {
   let taxes = 0.195*salary;
   let salaryMinusTaxes = salary - taxes;
   return salaryMinusTaxes;
};
//SalaryAfterTaxes(1000);

//!5. Створити функцію, яка повертає випадкове ціле число в діапазоні від N до M.
 function getRandomNumber (N, M) {
    let randomNumber=Math.floor(Math.random()*(M-N));
    return randomNumber;
 }
// getRandomNumber(5,85);

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
//countLetter("а", "Асталавста");

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
       // convertCurrency("1000UAH");

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

 // !11. Створіть функцію, яка перевіряє, чи є слово паліндромом
 function isPalyndrom (string) {
    let reverseArr=[];
    let result=true; 
    let stringWithoutSpace;
    if (string.includes(" ")) {
        stringWithoutSpace=string.replaceAll(" ", ""); 
    }
     else {
         stringWithoutSpace=string;
     }
      for (let i=0; i < stringWithoutSpace.length; i++) {
         reverseArr.unshift(stringWithoutSpace[i]);
        };  
     const reverseWord=reverseArr.join("");
     if (reverseWord===stringWithoutSpace) {
         return result;
     }
     else {
         return !result;
     }
 }
//isPalyndrom ("я несу гусеня");

    //12. Створіть функцію, яка видалить з речення букви, як зустрічаються більше 1 разу."

 function deleteLetters (_string) {
    string= _string.toLowerCase().replaceAll(" ", "");
    arrayOfNotness=[];
    let strN="";
    for(let i=0; i<string.length; i++) {
        if (string.indexOf(string[i], i+1!==-1)) {
            arrayOfNotness.push(string[i]);
        }
    }
    for(let i=0; i<string.length; i++) {
        if (!arrayOfNotness.includes(string[i])) {
            strN+=string[i];
        }
    }
    return strN;
    } 
    console.log (deleteLetters ("Бісквіт був дуже ніжним"));

//aбо


function deleteLetters(string = "Бісквіт був дуже ніжним") {
    const counter={};
    let resS = "";
   const  str= string.toLowerCase().replaceAll(" ", "");
    for (let i=0; i<str.length; i++) {
        if (counter[str[i]]) {
            counter[str[i]]++;
        } else {
            counter[str[i]]=1;
        }
    }
    for (let i=0; i<str.length; i++)  {
        if (counter[str[i]]<=1) {
            resS+=str[i];
        }
    }

        return resS;
    }
    console.log (deleteLetters());
