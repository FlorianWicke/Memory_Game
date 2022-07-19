let counter = 0;
let countwinner = 0;

const cards = [
    {
        id : "1",
        src : "https://cdn.pixabay.com/photo/2022/06/25/16/21/humboldt-penguin-7283765_960_720.jpg",
        alt : "pinguin"
    },
    {
        id : "2",
        src : "https://cdn.pixabay.com/photo/2022/05/31/06/24/bird-7232808_960_720.jpg",
        alt : "vogel"
    },
    {
        id : "3",
        src : "https://cdn.pixabay.com/photo/2022/06/25/16/21/humboldt-penguin-7283765_960_720.jpg",
        alt : "pinguin"
    },
    {
        id : "4",
        src : "https://cdn.pixabay.com/photo/2022/05/31/06/24/bird-7232808_960_720.jpg",
        alt : "vogel"
    }
    
]

let tier1 = "";
let id1 = "";
let tier2 = "";
let id2 = "";

function start(cards){
    console.log("START")
    if (document.getElementById("1") === null){
        console.log("looooss")
    for (let i = 0; i < cards.length; i++) {
        console.log(cards[i].id);
        const el = document.createElement("div")
        el.setAttribute("class", "card")
        const image = document.createElement("img")
        image.setAttribute("id", cards[i].id)
        image.setAttribute("alt", cards[i].alt)
        image.setAttribute("src", cards[i].src)
        image.onclick = function(){
            umdrehen(cards[i].id)
        }
        const divElement = document.getElementById("0");
        divElement.appendChild(el);
        el.appendChild(image)
    }} else{
        spielfeldLoeschen();
    }

}

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
        setTimeout(loeschen,1000,id1,id2);
        fehler(id1,id2);
    }
}

function korrekt(id1, id2,){
    console.log("Richtig - Nächster Zug")
    document.getElementById(id1).classList.remove("umgedreht");
    document.getElementById(id2).classList.remove("umgedreht");
    document.getElementById(id1).classList.add("korrekt")
    document.getElementById(id2).classList.add("korrekt")
    setTimeout(gewonnen,1500);
}

function fehler(id1,id2){
    document.getElementById(id1).classList.remove("umgedreht");
    document.getElementById(id2).classList.remove("umgedreht");
    document.getElementById(id1).classList.add("fehler");
    document.getElementById(id2).classList.add("fehler");
}

function loeschen(id1,id2){
    console.log("Löschen output");
    console.log(document.getElementById(id1).classList);
    document.getElementById(id1).classList.remove("fehler");
    document.getElementById(id2).classList.remove("fehler");
    console.log("Von vorne starten")
}

function gewonnen(){
    for (let index = 0; index < cards.length; index++) {
        if (document.getElementById(cards[index].id).classList == "korrekt"){
            countwinner = countwinner +1 
        }
        if (countwinner === cards.length){
            alert("Du hast gewonnen")
        };
    }
}

function spielfeldLoeschen(){
    for (let index = 0; index < cards.length; index++) {
        document.getElementById(cards[index].id).classList.remove("korrekt");
    }
    
}