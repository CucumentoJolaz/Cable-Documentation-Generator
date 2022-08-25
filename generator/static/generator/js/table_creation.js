function createTable()
{
//Checking if all values has been input

var cable=document.getElementById("cable_type").value;
var scheme=document.getElementById("cabling_scheme").value;
var cbl_length=document.getElementById("cable_length").value;
var n=0 //counter

if (cable=="") {
   alert("Введите марку кабеля");
   n=n=1
}
if (scheme=="") {
   alert("Укажите схему скрутки");
   n=n+1
}
if (cbl_length=="") {
   alert("Укажите длину кабеля")
   n=n+1
}

//if there is no alerts then add row (n>0)

if (n==0) {
   var x=document.getElementById('myTable').insertRow(0);
   var y=  x.insertCell(0);
   y.innerHTML=cable; 
   y=x.insertCell(1);
   y.innerHTML=scheme;
   y=x.insertCell(2);
   y.innerHTML=cbl_length;
}
}

function onlyNumbers(e) {
   var k=e.keyCode;
   return (k ==46 || k == 8   || (k >= 48 && k <= 57));
}