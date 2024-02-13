 let N = prompt("Введіть число:", " ");
 let NumN=Number(N);
 if (Number.isInteger(NumN)) {
    let fitN=NumN;
  } else {
    alert("Введіть число!");
  }
 let M = prompt("Введіть друге число:", " ");
 let NumM=Number(M);
 if (Number.isInteger(NumM)) {
    let fitM=NumM;
  } else {
alert("Введіть число!");
  }
  const Bulli = confirm(`Чи потрібно пропускати парні числа? Натисніть "Ok", якщо true або "скасувати", якщо false`);
  
   let suma=0;
   if(!Bulli){
      for (;fitN<=fitM;fitN++) {
         suma=suma+fitN;
      } 
      suma;
   } else(Bulli) {
      for (;fitN<=fitM;fitN++) {
         if(N%2==0)continue;
         console.log(fitN);
         suma=suma+fitN;
   
      }
       suma
   }
  

  

//const Bulli = confirm(`Чи потрібно пропускати парні числа? Натисніть "Ok", якщо true або "скасувати", якщо false`);
//N=1;
//M=10;
// let suma=0;
// if(!Bulli){
// for (;N<=M;N++) {
//    suma=suma+N;
//    } 
//    suma;
// } else(Bulli); {
//    for (;N<=M;N++) {
//    if(N%2==0)continue;
//    console.log(N);
//    suma=suma+N;
//  }
//suma
// }

