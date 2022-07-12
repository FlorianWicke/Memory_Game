let counter = 0;

let tier1 = "";
let id1 = "";
let tier2 = "";
let id2 = "";

function umdrehen(id){
    if (counter === 0){
        document.getElementById(id).classList.add("umgedreht");
        tier1 = document.getElementById(id).alt;
        id1 = document.getElementById(id).id;
        console.log(tier1);
        console.log(id1);
    counter++} else{
        document.getElementById(id).classList.add("umgedreht");
        id2 = document.getElementById(id).id;
        console.log(id2);
        tier2 = document.getElementById(id).alt;
        console.log(tier2);
        counter++;
        console.log(counter)
        if(counter===2){       
            match(tier1,tier2,id1,id2)
            counter = 0;
        }
    }


}

function match(tier1, tier2, id1, id2){
    if(tier1 === tier2){
        korrekt(id1,id2)
    } else { 
        setTimeout(loeschen(),10000,id1,id2);
        fehler(id1,id2);
    }
}

function korrekt(id1, id2,){
    console.log("Richtig - Nächster Zug")
    document.getElementById(id1).classList.remove("umgedreht");
    document.getElementById(id2).classList.remove("umgedreht");
    document.getElementById(id1).classList.add("korrekt")
    document.getElementById(id2).classList.add("korrekt")
}

function fehler(id1,id2){

    document.getElementById(id1).classList.remove("umgedreht");
    document.getElementById(id2).classList.remove("umgedreht");
    document.getElementById(id1).classList.add("fehler");
    document.getElementById(id2).classList.add("fehler");
}

function loeschen(id1,id2){
    document.getElementById(id1).classList.remove("fehler");
    document.getElementById(id2).classList.remove("fehler");
    console.log("Von vorne starten")
}