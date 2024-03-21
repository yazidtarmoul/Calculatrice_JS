function forclear() {
    document.getElementById("output").innerHTML = "0";
}
function removezero(){
    var value = document.getElementById("output").innerHTML;
    if (value =="0" ){
        value = ""
        document.getElementById("output").innerHTML= value;
    }
}
function perc(){
    removezero()
    var value = document.getElementById("output").innerHTML;
    value = value/100
    document.getElementById("output").innerHTML=value;
}
function fordisplay(myvalue){
    removezero()
    document.getElementById("output").innerHTML+=myvalue;
}
function calcul(){
    removezero()
    var equation = document.getElementById("output").innerHTML;
    var calculer = eval(equation);
    document.getElementById("output").innerHTML = calculer
}