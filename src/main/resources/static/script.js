//oppgave 1
function trykket(){
    document.write("Hallo verden");
}
//oppgave 2
function alertTrykk(){
    alert("fy faen din luring");
}

//oppgave 3

function returnerVerdi(verdi){
    document.write(verdi);
}
//oppgave 4 + 5
function returnerVerdiAlert (verdien){
    alert(verdien);
    console.log(verdien);
}
//oppgave 6
function trykketendretfarge(){
    let ut="hallo verden";
    ut=ut.fontcolor("green");
    document.write(ut);
}
//oppgave 7
function upperCaseAlert(){
    let ut = "fy faen din luring";
    ut = ut.toUpperCase();
    alert(ut);
}
//oppgave 8
const en=1;
function talltilLogg(){
    console.log(en);
}
//oppgave 9

let teller=0;
function tellerFunk(){

       teller++;
        console.log(teller);
}

//oppgave 10

function Antalltrokk(){

    teller++;
    console.log("Du har trykket på knappen " + teller + " ganger!");
}