function calc () {
   var a = parseInt(document.querySelector("#value1").value);
   var b = parseInt(document.querySelector("#value2").value);
   var calculate = (a * 703) / (b * b) ;

   document.querySelector("#result").innerHTML = calculate;
 }
