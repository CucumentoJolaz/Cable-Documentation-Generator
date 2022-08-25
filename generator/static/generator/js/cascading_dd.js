var subjectObject = {
     "МВВнг(А)-LS": {
       "2х0,5": ["Links", "Images", "Tables", "Lists"],
       "3х0,5": ["Borders", "Margins", "Backgrounds", "Float"],
       "4х0,5": ["Variables", "Operators", "Functions", "Conditions"],
       "5х0,5": ["Links", "Images", "Tables", "Lists"],
       "6х0,5": ["Borders", "Margins", "Backgrounds", "Float"],
       "7х0,5": ["Variables", "Operators", "Functions", "Conditions"],
       "8х0,5": ["Links", "Images", "Tables", "Lists"],
       "9х0,5": ["Borders", "Margins", "Backgrounds", "Float"],
       "10х0,5": ["Variables", "Operators", "Functions", "Conditions"], 
     },
     "МПсЭфКВЭфнг(А)-FRLS": {
       "2х(2х1,0)": ["Variables", "Strings", "Arrays"],
       "3х(2х1,0)": ["SELECT", "UPDATE", "DELETE"],
       "4х(2х1,0)": ["Variables", "Strings", "Arrays"],
       "5х(2х1,0)": ["SELECT", "UPDATE", "DELETE"],
     }
   }

window.onload=function() {
     var cbl_type=document.getElementById("cable_type")
     var cbl_scheme=document.getElementById("cabling_scheme")
     var cbl_length=document.getElementById("length")
     for (var x in subjectObject) {
          cbl_type.options[cbl_type.options.length]=new Option(x,x)
     }
     cbl_type.onchange=function() {
          cbl_scheme.length=1
          //correct values
          for (var y in subjectObject[this.value]) {
               cbl_scheme.options[cbl_scheme.options.length]=new Option(y,y)
          }
     }
}