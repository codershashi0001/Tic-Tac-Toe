let reset = document.querySelector("#reset")
let game = document.querySelectorAll(".game")
let btn = document.querySelectorAll("button")

let turn = true ; // true = x / false = O

 function change (){
    if (turn === true){
        return "X"
        turn = false
    }
    else{
        return "O"
        turn = true
    }
}
 

btn.forEach((b)=> {
    b.addEventListener("click",(e)=> {
if (turn === true){
        b.innerText = "X"
        turn = false
    }
    else{
       b.innerText = "O"
        turn = true
    }
    b.disabled = true 
})
}
)
reset.addEventListener("click", () =>{
    location.reload()
})


// game.forEach ((e) => {
// // e.children[2].textContent = " X "


// e.addEventListener("click",(w)=>{
//     // console.log(w)     
//     // console.log(w.target.id.value)     
//     // w.target.id.textContent = "x"
// })

// }
// ) 