const generateBlocks = function (amount) {
    const lengthOfBox= Math.sqrt(amount);
    const root = document.getElementById("root");
    let notExpendend = true;
    let box=0;
    const arr = [];

    const generateRandomColor = function () {
        const generateRandomNum = (maxNum) => { return Math.floor(Math.random()*maxNum)
      };
        const hue = generateRandomNum(360);
        const sat = generateRandomNum(100);
        const light = generateRandomNum(100);
        
        return `hsl(${hue}deg, ${sat}%, ${light}%)`;
    }
    //const getRandomC = () => { style.backgroundColor = generateRandomColor()};
    for (let i=0; i< amount; i++) {
        box = document.createElement("div");
        arr.push (box);
        box.classList.add('box');
        root.appendChild(box); 

    }


    const getRandomC = (array) => { 
        box.style.transition = "ease";
        for (let i=0; i< array.length; i++) {
            //array[i].style.transition = "ease";
            array[i].style.backgroundColor = generateRandomColor();
        }
        
    } 
        getRandomC(arr);
    root.style.display = "grid";
    root.style.setProperty("grid-template-columns", `repeat(${lengthOfBox}, 50px)`);
    root.style.setProperty("grid-gap", "2px" )

    const generateBlocksInterval = function (interval) {
        const changeColor = setInterval (() => {getRandomC(arr);}, 1000)
   }
    generateBlocksInterval(1000);

    arr.forEach ((item) => {
        item.onclick  = () => {
            if (notExpendend) {
                notExpendend = false;
                item.style.setProperty ("height", "80px");
            } else  {
                notExpendend = true;
                item.style.setProperty ("height", "50px");
            }
        }
       })
    
    return arr;
}

console.log(generateBlocks(25));