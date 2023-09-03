let btn = document.querySelector("button");


btn.addEventListener("click", function() {
     let h2 =document.querySelector("h2");
     let randomcolor = getrandomcolor();
     h2.innerText = randomcolor;

     let div = document.querySelector("div");
     div.style.backgroundColor = randomcolor;

     console.log("color updated");
})

function getrandomcolor(){
    let red = Math.floor(Math.random()*255);
    let green = Math.floor(Math.random()*255);
    let blue = Math.floor(Math.random()*255);

    let color = `rgb( ${red}, ${green}, ${blue} )`;

    return color;
    
}

let p = document.querySelector("p");

p.addEventListener( "click", function(){
    console.log("you clicked Parah.");
})

let box = document.querySelector(".box");
box.addEventListener("mouseenter", function(){
    console.log("you hover on box.");
})