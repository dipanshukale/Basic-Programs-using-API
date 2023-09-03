// let hello = document.querySelector("button");




// hello.addEventListener("click", async () => {
//     let fact = await  getfact();
//     let p = document.querySelector("#result");
//     p.innerText = fact;
// } );

// let url ="https://catfact.ninja/fact";

// async function getfact() {
//    try {
//     let res = await axios.get(url);
//     return res.data.fact; // in this data is promise.
//    } catch(err) {
//     console.log(" Error was occur ",err);
//     return " No fact found - Error";
//    }
// }


let hello = document.querySelector("button");

let url2 ="https://dog.ceo/api/breeds/image/random";


hello.addEventListener("click", async () => {
    let link = await  getimage();
    let img = document.querySelector("#result");
    img.setAttribute("src", link );
} );



async function getimage() {
   try {
    let res = await axios.get(url2);
    return res.data.message;// in this data is promise.
   } catch(err) {
    console.log(" Error was occur ",err);
    return " No image found - Error";
   }
}