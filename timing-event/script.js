


//setTimeout(display , 2000);

//function display(){
   // console.log("display function");
//};




//const saveButtons = document.querySelector(".save-btn");
//const messages = document.querySelector(".message");

//saveButtons.addEventListener = ('click' , saveUser);
//function saveUser(){
//messages.textContent = "user registration successful";

//setTimeout(() => {
 //   messages.textContent= "";
//}, 2000);
//}



const saveButtons = document.querySelector(".save-btn");
const messages = document.querySelector(".message");


saveButtons.addEventListener("click", startClock);
function startClock(){
    let date = new Date();
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let Seconds = date.getSeconds();
    let time = hours + ":"+ minutes +":"+ Seconds;

    messages.textContent = time;

    setInterval(startClock,1000);

}