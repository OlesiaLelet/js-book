const getRandomChinese = async function (length) {
    console.log("...");
    let i=0;
    let chinese = 0;
    let str= "" ;
    while (i<length) {
      const promise = await new Promise((resolve) => {
         setTimeout( () => {

            let lastFives = Date.now() % 100000;
            chinese = String.fromCharCode(lastFives);
            i++;
            
            resolve(chinese);
        }, 50);
   
      });
     str+= promise;
    }
    return str;
}
const func = async() => console.log( await getRandomChinese(5));
func();
