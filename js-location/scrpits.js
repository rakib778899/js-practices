console.clear();
console.log(location.href);

//protocol
console.log(location.protocol);
//hostname
console.log(location.hostname);
//port
console.log(location.port);

//pathname
console.log(location.pathname);




var locationDiv = document.querySelector(".location-div");

var p1 = locationDiv.children[0];
p1.textContent = location.href;


var p2 = locationDiv.children[1];
p2.textContent = location.hostname;

var p3 = locationDiv.children[2];
p3.textContent = location.port;

var p4 = locationDiv.children[3];
p4.textContent = location.pathname;


const visitButton = document.getElementById("visit-button");

visitButton.addEventListener("click" , function(){
  location.assign("https://www.google.com/search?q=multiplication+symbol&oq=&gs_lcrp=EgZjaHJvbWUqCQgBECMYJxjqAjIJCAAQIxgnGOoCMgkIARAjGCcY6gIyCQgCECMYJxjqAjIJCAMQRRg7GMIDMgkIBBBFGDsYwgMyCQgFEEUYOxjCAzIJCAYQRRg7GMIDMgkIBxBFGDsYwgPSAQkyNzA4ajBqMTWoAgiwAgE&sourceid=chrome&ie=UTF-8");
});


var visitsButton = document.querySelector("#visit-mybutton");

visitsButton.addEventListener("click", function(){
  location.assign("https://www.google.com/search?q=multiplication+symbol&oq=&gs_lcrp=EgZjaHJvbWUqCQgBECMYJxjqAjIJCAAQIxgnGOoCMgkIARAjGCcY6gIyCQgCECMYJxjqAjIJCAMQRRg7GMIDMgkIBBBFGDsYwgMyCQgFEEUYOxjCAzIJCAYQRRg7GMIDMgkIBxBFGDsYwgPSAQkyNzA4ajBqMTWoAgiwAgE&sourceid=chrome&ie=UTF-8")
});

