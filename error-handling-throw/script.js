document.querySelector("#checkbtn").addEventListener("click",function(){
    var num = document.querySelector("#numText").Value;
  
try {
    
    if(num < 5)
    {
        throw "input is too low"
    }else if(num > 10){
        throw "input is too high"
    }
} catch (error) {
    console.log(error);
}

})