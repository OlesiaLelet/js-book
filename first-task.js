let Validol=15.678;
let Durex=123.965;
let Barboval=90.2345;
let maximus=Math.max(Validol, Durex, Barboval);
let minimum=Math.min(Validol, Durex, Barboval);
let suma= Validol + Durex + Barboval;
console.log(suma);
Math.floor(Validol);
Math.floor(Durex);
Math.floor(Barboval);
let sumaInteger= Math.floor(Validol) + Math.floor(Durex) + Math.floor(Barboval); 
console.log(sumaInteger);
Math.ceil(sumaInteger);
console.log(sumaInteger);

let roundedSuma= Math.round(sumaInteger/100)*100; //Виведіть суму товарів округлену до сотень 
console.log(roundedSuma);

let pairOrNot=sumaInteger % 2==0; //Виведіть булеве значення: чи є сума всіх товарів (округлення в меншу сторону) парним чи непарним числом?
console.log(pairOrNot);

let change=500-suma; //Виведіть суму решти, при оплаті всіх товарів (без округлення), якщо клієнт платить 500 грн.
console.log(change);

var mediumValue=((Validol+Durex+Barboval)/3).toFixed(2);  //Виведіть середнє значення цін, округлене до другого знаку після коми
console.log(mediumValue);

// більш складне
let sale=Math.floor(Math.random()*100);
console.log(sale);

let clientCalculation=(suma-sale).toFixed(2);
console.log(clientCalculation);

let netIncome=suma-(suma/2)-(suma*(0.01*sale)); //Виведіть чистий прибуток, якщо клієнт заплатив зі знижкою та собівартість товарів рівно в два рази нижче їх ціни?
console.log(netIncome);
 
// Advanced
 let s =`Максимальна ціна: ${maximus} Мінімальна ціна: ${minimum} Вартість всіх товарів: ${suma} Вартість всіх товарів без копійок: ${sumaInteger} Вартість всіх товарів заокруглена до сотень ${roundedSuma} Чи є вартість парним числом? ${pairOrNot} Решта з 500 грн ${change} Середнє значення цін: ${mediumValue} Сума зі знижкою: ${clientCalculation} Чистий прибуток: ${netIncome}`
 console.log(s);

