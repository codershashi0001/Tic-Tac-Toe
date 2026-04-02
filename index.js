let reset = document.querySelector("#reset")
let game = document.querySelectorAll(".game")
let btn = document.querySelectorAll(".button")

// game.forEach ((e) => {
// e.children[2].textContent = " X "
// }
// ) 

reset.addEventListener("click", () =>{
    location.reload()
})