function deleteLetters (string="Бісквіт був дуже ніжним") {
    let newString;
    let newS;
     for (let i=0; i< string.length; i++) {
        newString+= string[i];
        if (newString.includes(string[i])) {
            newS=string.replaceAll(letter, ""); 
        }
        
     }
     return newString;
   };