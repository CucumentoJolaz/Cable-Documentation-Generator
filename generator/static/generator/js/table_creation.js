function createTable()
{
//Checking if all values has been input

var cable=document.getElementById("cable_type").value;
var scheme=document.getElementById("cabling_scheme").value;
var cbl_length=document.getElementById("cable_length").value;
var n=0 //counter

if (cable=="") {
   alert("Введите марку кабеля");
   n=n+1
}
if (scheme=="") {
   alert("Укажите схему скрутки");
   n=n+1
}
if (cbl_length=="") {
   alert("Укажите длину кабеля")
   n=n+1
}

//number of inserted row calculation
var rows_number=document.getElementById("myTable").rows.length+1;

//if there is no alerts then add row (n>0)



if (n==0) {
   var x=document.getElementById('myTable').insertRow(-1);
   var y=  x.insertCell(0);
   var z1=document.createElement("input");
   z1.setAttribute("name", "type" + "_" + rows_number);
   z1.setAttribute("value", cable);
   z1.setAttribute("readonly",true);
   y.appendChild(z1);
   //y.innerHTML=cable; 
   y=x.insertCell(1);
   var z2=document.createElement("input");
   z2.setAttribute("name", "scheme" + "_" + rows_number);
   z2.setAttribute("value", scheme);
   z2.setAttribute("readonly",true);
   y.appendChild(z2);
   //y.innerHTML=scheme;
   y=x.insertCell(2);
   var z3=document.createElement("input");
   z3.setAttribute("name", "length" + "_" + rows_number);
   z3.setAttribute("value", cbl_length);
   z3.setAttribute("readonly",true);
   y.appendChild(z3);
   //y.innerHTML=cbl_length;
}

}

function onlyNumbers(e) {
   var k=e.keyCode;
   return (k ==46 || k == 8   || (k >= 48 && k <= 57));
}