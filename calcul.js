var myRez = document.getElementById('rez');
var myNumbers = document.getElementsByClassName('numss');
var myEq = document.getElementById('eq');
var i;
var clearr = document.getElementById('num');
var nul =  document.getElementById('nul');
 
 
 
for(i = 0; i < myNumbers.length; i++){
  myNumbers[i].onclick = function (){
    myRez.value += this.value;
   
  };
};
 
myEq.onclick = function (){
  myRez.value = eval(rez.value);
 
};
 
clearr.onclick = function clear(){
  myRez.value = ' ';
};
 
nul.addEventListener('click', mines);
function mines(e){
  e.preventDefault();
  myRez.value = '-' + myRez.value;
};