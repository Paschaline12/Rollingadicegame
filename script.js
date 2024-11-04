const myButton = document.getElementById("myButton");
const myLabel= document.getElementById("myLabel");
const a = 1;
const b = 6; 
let randomNum;
myButton.onclick = function(){
randomNum = Math.floor(Math.random()*b)+a;
myLabel.textContent = randomNum;
}

const myButton2 = document.getElementById("myButton2");
const myLabel1= document.getElementById("myLabel1");
const myLabe12= document.getElementById("myLabel2");
const myLabel3= document.getElementById("myLabel3")
const min = 1;
const max = 6; 

let randomNum1;
let randonNum2;
let randomNum3;

myButton2.onclick = function(){
randomNum1 = Math.floor(Math.random()*max)+min;
randomNum2 = Math.floor(Math.random()*max)+min;
randomNum3 = Math.floor(Math.random()*max)+min;

myLabel1.textContent = randomNum1;
myLabel2.textContent = randomNum2;
myLabel3.textContent = randomNum3;

}