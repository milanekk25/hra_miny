let miny = 0;
let velikost = 5;
let konec = false;
let pole_s_minou = [];

const pole = document.getElementById("pole")
const infotext = document.getElementById("info")

function mapa(){
    volnapole = (velikost * velikost) - miny;
    pole.innerHTML = "";
    pole.className = "velikost" + velikost;
    konec = false;
    pole_s_minou = [];



//pokladame miny 0_0 #bosnia

for (let i = 0; i < velikost * velikost; i++){
    pole_s_minou.push(false);
}

let polozeny_miny = 0;
 while (polozeny_miny < miny){

        const random = Math.floor(Math.random() * velikost * velikost)

     if( pole_s_minou[random] === false){
         pole_s_minou[random] = true;
         polozeny_miny++;

         }
     }

for (let i = 0; i < velikost * velikost; i++){
    const jedno_pole = document.createElement("button");
    jedno_pole.className = "jedno_pole"


jedno_pole.onclick = function (){
     //vyhra / prohra

    if (konec === true){
        return;
    }

    if (pole_s_minou[i] === true){
        jedno_pole.textContent = "x";
        konec = true;
        infotext.textContent = "Konec hry, prohral jsi, zkus to znova."
        setTimeout(mapa, 2000);

        } else {

        jedno_pole.textContent = "0";
        volnapole--;

        if (volnapole === 0 ){
            konec = true;

            if(velikost === 5){
                velikost = 10;
                miny = 0;
                infotext.textContent = "Vyhral jsi! Postupujes na tezsi mapu 10x10."
                setTimeout(mapa,2000);

                } else {
                infotext.textContent = "Vyhral jsi, VSECHNY obtiznosti!!!"

                    }
                }
            }
        }
    pole.appendChild(jedno_pole);
    }
}
mapa();