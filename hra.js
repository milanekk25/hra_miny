let miny = 5;
let velikost = 5;
let konec = false;
let pole_s_minou = [];
let tlacitka = [];
let volnapole = 0;
let prvni_klik = true;

const pole = document.getElementById("pole")
const infotext = document.getElementById("info")
function odekryt(i){


    if(tlacitka[i].disabled === true){
        return;
    }

    tlacitka[i].disabled = true;
    volnapole--;

    const radek =  Math.floor(i / velikost)
    const sloupec = i % velikost
    let miny_kolem = 0;

    for( let r = -1; r <= 1; r++ ){
        for( let s = -1; s <= 1; s++ ){
            const   novy_radek = r + radek;
            const   novy_sloupec = s + sloupec;

            if(novy_radek >= 0 && novy_radek < velikost && novy_sloupec >= 0 && novy_sloupec <velikost){
                const vedlejsi = novy_radek * velikost + novy_sloupec;
                if (pole_s_minou[vedlejsi] === true){
                    miny_kolem++;
                }
            }
        }
    }

    tlacitka[i].textContent = miny_kolem;

    if(miny_kolem === 0){
        for( let r = -1; r <= 1; r++ ){
            for( let s = -1; s <= 1; s++ ){
                const   novy_radek = r + radek;
                const   novy_sloupec = s + sloupec;

                if(novy_radek >= 0 && novy_radek < velikost && novy_sloupec >= 0 && novy_sloupec <velikost){
                    odekryt(novy_radek * velikost + novy_sloupec);
                }
            }
        }
    }
}
function mapa(){
    volnapole = (velikost * velikost) - miny;
    pole.innerHTML = "";
    pole.className = "velikost" + velikost;
    konec = false;
    pole_s_minou = [];
    tlacitka = [];
    prvni_klik = true;

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
    jedno_pole.className = "jedno_pole";
    tlacitka.push(jedno_pole);

jedno_pole.onclick = function (){
     //vyhra / prohra / opatreni

    if (konec === true){
        return;
    }

    if(prvni_klik === true){
        prvni_klik = false;
        if(pole_s_minou[i] === true){
            pole_s_minou[i] = false;

            let presunout_minu = false;
            while (presunout_minu === false){
                const random = Math.floor(Math.random() * velikost * velikost);
                if (pole_s_minou[random] === false && random !== i){
                    pole_s_minou[random] = true;
                    presunout_minu = true;
                }
            }
        }
    }


    if (pole_s_minou[i] === true){
        jedno_pole.classList.add("mina")
        jedno_pole.textContent = "x";
        konec = true;
        infotext.textContent = "Konec hry, prohral jsi, zkus to znova."
        setTimeout(mapa, 1200);


        } else {

        odekryt(i);

        if (volnapole === 0 ){
            konec = true;

            if(velikost === 5){
                velikost = 7;
                miny = 10;
                infotext.textContent = "Vyhral jsi! Postupujes na tezsi mapu 7x7. (obtiznost STREDNI)"
                setTimeout(mapa,2000);

                } else if(velikost === 7) {
                    velikost = 10;
                    miny = 20;
                    infotext.textContent = "Vyhral jsi! Postupujes na tezsi mapu 10x10. (obtiznost TEZKA)"
                    setTimeout(mapa,2000);

                } else {
                infotext.textContent = "Vyhral jsi VSECHNY obtiznosti!!!"
                    }
                }
            }
        }
    pole.appendChild(jedno_pole);
    }
}
mapa();