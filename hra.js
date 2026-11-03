let miny = 3;
let velikost = 5;
let konec = false;
let pole_s_minou = [];



const pole = document.getElementById("pole")
const infotext = document.getElementById("info")



for (let i = 0; i < velikost * velikost; i++){
    const jedno_pole = document.createElement("button");
    jedno_pole.className = "jedno_pole"
    pole.appendChild(jedno_pole);
}
//pokladame miny 0_0 #bosnia


for (let i = 0; i < velikost * velikost; i++){
    pole_s_minou.push(false);
}

let polozeny_miny = 0;
 while (polozeny_miny < miny){
        const random = Math.floor(Math.random() *velikost*velikost)

     if( pole_s_minou[random]=== false){
         pole_s_minou[random] = true;
         polozeny_miny++;

         }
     }

/*
jedno_pole.onclick = function (){
     if (konec === true){
         return;
     }

     //vyhra
    volnapole = (velikost * velikost) - miny

    volnapole--;
    if(volnapole === 0){
        konec = true;
        infotext.textContent = "Konec hry, dokocil jsi lehkou uroven 5x5 ted des na tezsi 10x10."
    }

    //prohra
    if (pole_s_minou[jedno_pole] === true){
        konec = true
        infotext.textContent = "Konec hry, prohral jsi, zkus to znova."
    }
*/
