
const generateBoxes = function () {
   const root = document.getElementById("root");
   // root.style.setProperty("background-image", "url(./images/background.jpg)");
   // root.style.setProperty("background-size", "cover");
   const arr = []; 
   const arrOfText = [];
   const arrOfSpanText = [];
   let newBox = 0;
   let letter = 0;
   let sound = 0;
   const musicA= new Audio ('./sounds/BellTree.mp3');
   const musicS= new Audio ('./sounds/CatMeowing.mp3');
   const musicD= new Audio ('./sounds/Gong.mp3');
   const musicF= new Audio ('./sounds/Guitar.mp3');
   const musicG= new Audio ('./sounds/Harp.mp3');
   const musicH= new Audio ('./sounds/HitMetal.mp3');
   const musicJ= new Audio ('./sounds/OrganCircus.mp3');
   const musicK= new Audio ('./sounds/Trumpet.mp3');
   const musicL= new Audio ('./sounds/Xylophone.mp3');
  const arrOFMusic = [ musicA, musicS, musicD, musicF, musicG, musicH, musicJ, musicK, musicL];
//     const obj = {
//     "A": "BellTree",
//     "S": "CatMeowing",
//     "D": "Gong",
//     "F": "Guitar",
//     "G": "Harp",
//     "H": "HitMetal",
//     "J": "OrganCircus",
//     "K": "Trumpet",
//     "L": "Xylophone"
//   }
   const ArrOfNames = ["BellTree", "CatMeow", "Gong", "Guitar", "Harp", "HitMetal", "Organ", "Trumpet", "Xylophone"];
   const arrOfKey = ["A", "S", "D", "F", "G", "H", "J", "K", "L" ];
       const obj = {
        "A": musicA,
        "S": musicS,
        "D": musicD,
        "F": musicF,
        "G": musicG,
        "H": musicH,
        "J": musicJ,
        "K": musicK,
        "L": musicL,
  }
   for (let i=0; i < arrOFMusic.length ; i++) {
    newBox = document.createElement("div");
    arr.push(newBox);
    newBox.classList.add("square");
    root.appendChild(newBox);
    newBox.id = `S${i}`;
     newBox.style.width = "100%";
     newBox.style.MaxWidth = "100px";
     newBox.style.height = "60px";

   

   }
   root.style.display = "flex";
   root.style.setProperty("justify-content", "space-between");
   root.style.setProperty("align-items", "center");

     arr.forEach ((item) => {
       letter = document.createElement("div");
       item.appendChild(letter);
       arrOfText.push(letter);
       letter.classList.add("key");
       letter.id = "A";
       //sound = document.createElement("span");
       sound = document.createElement("div");
       item.appendChild(sound);
       arrOfSpanText.push(sound);
       sound.classList.add("sound");
       sound.id = "A";
    })
    for (let i=0; i < arrOfText.length ; i++) {
      arrOfText[i].id = i;
      arrOfSpanText[i].id = `A${i}`;
      let div = document.getElementById(i).innerHTML = arrOfKey[i];
      let span = document.getElementById(`A${i}`).innerHTML = ArrOfNames[i];
    }
    document.addEventListener("keydown", (event) => {
     switch (event.key) {
      case "a" :
        musicA.play();
        const a = document.getElementById(`S0`);
        a.click();
        break;
      case "s" :
          musicS.play();
          const s = document.getElementById(`S1`);
          s.click();
          break;
      case "d" :
          musicD.play();
          const d = document.getElementById(`S2`);
          d.click();
          break;
      case "f" :
          musicF.play();
          const f = document.getElementById(`S3`);
          f.click();
          break;
      case "g" :
          musicG.play();
          const g = document.getElementById(`S4`);
          g.click();
          break;
      case "h" :
          musicH.play();
          const h = document.getElementById(`S5`);
          h.click();
          break;
      case "j" :
          musicJ.play();
          const j = document.getElementById(`S6`);
          j.click();
          break;
      case "k" :
         musicK.play();
         const k = document.getElementById(`S7`);
         k.click();
          break;
      case "l" :
          musicA.play();
          const l = document.getElementById(`S8`);
          l.click();
          break;
     }
    })

    for (let i=0; i < arr.length ; i++) {
     arr[i].onclick = () => {
      arrOFMusic[i].play();
      for (let h=0; h < arr.length ; h++) {
        let s = document.getElementById(`S${h}`);
        s.classList.remove("orange");
      }
      let s = document.getElementById(`S${i}`);
      s.classList.add("orange");
   }

    };




   
}
generateBoxes();
