console.clear();

function deleteSomethings(){
   let value = confirm("do you want to delete it?");
    if(value){
        console.log("deleted");
    }
    else{
        console.log("not deleted");
    }
}

deleteSomethings();










function welcomeMessage(){
    var h1 = document.createElement("h1");
    
    var text;

    var name = prompt("enter your name: ");
    if(name == null || name == ""){
        text= "no name found";
    }else{
        text = "welcome "+name;
    }

    var textNode = document.createTextNode(text);
    h1.appendChild(textNode);
    document.body.appendChild(h1);
}

welcomeMessage();