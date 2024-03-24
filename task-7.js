"use strict"
const fruits = ["Orange", "Apple", "Mango", "Apple", "Banana", "Apple"];
// push
 const a = ["а", "б", "в", "j"];
 const function_push = function (arr, ...newElement) {
     let num= arr.length;
     for (let i=0; i< newElement.length; i++) {

         arr[num]= newElement[i];
        num++;
     } 
return a.length;
 }
// console.log(function_push(a, "3", "k"));
// console.log(a);

// join 
const function_join = function (arr, separator) {
let str= "";
for (let i=0; i< arr.length; i++) {
    if(separator) {
        if (arr[i+1]) {
        str+= arr[i] + separator;
        }
        else {
            str+= arr[i];
        }
    }
    else {
        if (arr[i+1]) {
            str+= arr[i] + ",";
            }
            else {
                str+= arr[i];
            }
    }
}
return str;
}
//console.log(function_join(a, " " ));
//console.log(a.join(" "));

//pop
const function_pop = function (arr) {
    if(arr.length===0)
    return undefined;
    const num= arr[arr.length-1];
    arr.length=arr.length-1; 
        
    
    return num; 
}
//const A=[];
//console.log(a.pop());
//console.log(function_pop(a)); 
// console.log(a);


//unshift. The unshift() method adds new elements to the beginning of an array and overwrites the original array.
 const function_unshift = function (arr, ...newElement) {
    arr.length= arr.length + newElement.length;
    const newArr=[];
    for (let i=0; i< arr.length; i++) {
       newArr[i]=newElement[i]||arr[i-newElement.length];
    }
    arr.length=newArr.length;
    for (let i=0; i< arr.length; i++) {
        arr[i]=newArr[i]
    }
    return arr.length;
 }
 //console.log(function_unshift(a, "p", "9"));
//console.log(a.unshift("p", "9"));
//console.log(a); 

//.shift() - видаляє перший елемент з масиву і повертає його значення. 
// Цей метод змінює довжину масиву.Якщо властивість length масиву дорівнює 0, поверне undefined.
const function_shift = function (arr) {
    if(arr.length===0)
    return undefined;
    const newArr=[];
    for (let i=1; i< arr.length; i++) {
        newArr[i-1]=arr[i];
    }
    const returnedValue=arr[0];
    arr.length=newArr.length;
    for (let i=0; i< arr.length; i++) {
        arr[i]=newArr[i];
    }
    
    return returnedValue;
}
//console.log(function_shift(a));

// .indexOf(item, from) – шукає item, починаючи з індексу from, і повертає індекс,
// на якому був знайдений шуканий елемент, в іншому випадку -1.
 const function_indexOf = function (arr, element, from ) {
    let notFound= -1;
    let found = 0;
    if(from) {
    let index= from;
    while (index <= arr.length) {
        if (arr[index]===element) {
            found+=index;
            notFound+=1;
            break;
        }
        index++;
    }
}
    else {
    for (let i=0; i < arr.length; i++) {
      if (arr[i]===element) {
         found+=i;
         notFound+=1;
         break;
      }
      
 }
}
 if(notFound===0) {
    return found;
 } else {
    return notFound;
 }

}
//console.log(function_indexOf(fruits, "Apple"));
//console.log(fruits.indexOf("Apple"));

//.includes(item, from) – шукає item, починаючи з індексу from, і повертає true,
// якщо пошук успішний.
 const function_includes = function (arr, element, from) {
    let found = 0;
    if(from) {
        let index= from;
        while (index <= arr.length) {
            if (arr[index]===element) {
            found+=1;
            break;
        }
        index++;
    }
}
    else {
        for (let i=0; i < arr.length; i++) {
            if (arr[i]===element) {
            found+=1;
            break;
        }
    }
}
    return Boolean(found);
}
console.log(a);
console.log(function_includes(fruits, "Appl"));
console.log(fruits.includes("Appl"));

//reverse() метод об'єкта Array який змінює порядок проходження елементів масиву навпаки. 
//Перший елемент масиву стає останнім, а останній - першим.
const function_reverse = function (arr) {
    const newArr=[];
    let index=0;
    for (let i=arr.length-1; i >= 0; i--) {
        newArr[index]=arr[i];
        index++;
    }
    for (let i=0; i<arr.length; i++) {
        arr[i]= newArr[i];
    }
    return arr;
}
//console.log(function_reverse(a));
//console.log(a.reverse());


//slice()
const function_slice = function (arr, from, to) {
   const newArr=[];
   let index=0;
   if (arguments.length===3) {
   for (let i = from; i < to; i++) {
       newArr[index]=arr [i];
       index++;
   }
}  
   else if (arguments.length==2) {
    for (let i = from; i < arr.length; i++) {
        newArr[index]=arr [i];
        index++;
    }
   }
   else if (arguments.length==1) {
    for (let i = 0; i < arr.length; i++) {
        newArr[i]=arr [i];
    }
   }
   return newArr;

}
// console.log(function_slice(a));
// console.log(a.slice());

//lastIndexOf()
//const fruits = ["Orange", "Apple", "Mango", "Apple", "Banana", "Apple"];
const function_lastIndexOf = function (arr, element, from) {
    let notFound= -1;
    let found = 0;
    let index= from;
    debugger
    if(arguments.length===3) {
        if (from<0) {
            for (let i=arr.length+from; i >= 0; i--) {
                if (arr[i]===element) {
                    found+=i;
                    notFound+= 1;
                    break;
            }
        }
        while (index >=0) {
            if (arr[index]===element) {
            found+=index;
            notFound+= 1;
            break;
        }
        index--;
    }
    }
    }  else {
        for (let i=arr.length-1; i >= 0; i--) {
            if (arr[i]===element) {
                found+=i;
                notFound+= 1;
                break;
             }
        }
    }
    if (notFound=== 0) {
    return found;
    } else {
        return notFound;
    }
}
//console.log(function_lastIndexOf(fruits, "Appl"));
//console.log(fruits.lastIndexOf("Appe"));
