let btn = document.querySelector("button");

btn.addEventListener("click", async () => {
    let fact = await getFacts();
    let p = document.querySelector("#result");

    // Reset animation to replay on every fact
    p.classList.remove("show");
    void p.offsetWidth; // force reflow
    p.innerText = fact;
    p.classList.add("show");
});

let url = "https://catfact.ninja/fact";

async function getFacts() {
    try {
        let res = await axios.get(url);
        return res.data.fact;
    } catch (e) {
        console.log("Error fetching cat fact:", e);
        return "😿 No fact found. Try again!";
    }
}


// ...................




// let btn= document.querySelector("button");

// btn.addEventListener("click", async()=>{
//     let fact = await getFacts();
//     console.log(fact);
//     let p = document.querySelector("#result");
//     p.innerText = fact;
// });



// let url= "https://catfact.ninja/fact";
//   async function getFacts() {
//     try{
//         let res = await axios.get(url);
//         return res.data.fact ;
//     } catch(e){
//         console.log("error -", e);
//         return " no fact found"
//     }
    
//   }