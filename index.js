let reset = document.querySelector("#reset")
let re = document.querySelector("#re")
let game = document.querySelectorAll(".game")
let btn = document.querySelectorAll(".box")
let msg = document.querySelector(".win-msg")
let nee = document.querySelector(".new")
let main = document.querySelector("main")

let v = prompt("what you want to choose 'x', 'o'");


let turn ; // true = x / false = O

if (v === "X" || v === "x"){
    turn = true;
}
else {
    turn = false;
}

const winn = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8],
]

function disablebtn(){
btn.forEach((b)=> {
b.disabled = true

})}

//if (e.target.id == w[])


// btn.forEach((b)=> {
//  b.addEventListener("click",(e)=> {
// console.log(e.target.id)
//  })})

//  winn.forEach((w)=>{
//     console.log(w)
//  })


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
checkwinner()
})
}
)


re.addEventListener("click", () =>{
    location.reload()
})
reset.addEventListener("click", () =>{
    location.reload()
})

// if(winn[0] === "x" && winn [1] === "x" || winn[2] === "x"){
// console.log("hiii")
// }

function checkwinner (){
    // console.log(btn[patterns[0]].innerText ,btn[patterns[1]].innerText, btn[patterns[2]].innerText)

for (let patterns of winn){
    let p1=btn[patterns[0]].innerText;
    let p2=btn[patterns[1]].innerText;
    let p3=btn[patterns[2]].innerText;

    if (p1 != "" && p2 != "" && p3 != "" ){
         if (p1 === p2 && p2 === p3 && p3 === p1){
            console.log("hiiiiii" , p1)
            showWInner(p1);
                
                   

         }
    }
}

}

function showWInner(p){
msg.innerText = `Congratulation 🎉🎊, ${p}  You won The Game🥳`;
 nee.classList.remove("hide");
  main.classList.add("hide");
                 disablebtn();
}










// game.forEach ((e) => {
// // e.children[2].textContent = " X "


// e.addEventListener("click",(w)=>{
//     // console.log(w)     
//     // console.log(w.target.id.value)     
//     // w.target.id.textContent = "x"
// })

// }
// ) 