let N = prompt("Введіть число:", " ");
 let NumN=Number(N);
 let fitN;
 let fitM;
 if (Number.isInteger(NumN)) {
    fitN=NumN;
  } else {
    alert("Введіть число!");
  }
 let M = prompt("Введіть друге число:", " ");
 let NumM=Number(M);
 if (Number.isInteger(NumM)) {
    fitM=NumM;
  } else {
alert("Введіть число!");
  }
  const Bulli = confirm(`Чи потрібно пропускати парні числа? Натисніть "Ok", якщо true або "скасувати", якщо false`);
  
   let suma=0;

   if(!Bulli){
      while (fitN<=fitM) {
         suma=suma+fitN;
         fitN++;
      } 
      suma;
   } else(Bulli)
      while (fitN<=fitM) {
         if(fitN%2==0){
         fitN++;
         continue;
         }
         suma=suma+fitN;
         fitN++;
      }
      console.log(suma);
   // if(!Bulli){
   //       while(fitN<=fitM){
   //          suma=suma+fitN;
   //          fitN++;
   //       }
   // }  else(Bulli){
   //    while(fitN<=fitM) {
   //       if (fitN%2==0) continue;
   //       suma=suma+fitN;
   //    }
   // };
   // console.log(suma);


   
   
  

  

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

