let passOneEl = document.getElementById("password-one")
let passTwoEl = document.getElementById("password-two")
let generateBtn = document.getElementById("generate-btn")
let passLength = document.getElementById("length-input")

const characters = ["A","B","C","D","E","F","G","H",
    "I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z",
    "a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z",
     "0", "1", "2", "3", "4", "5", "6", "7", "8", "9",
     "~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

generateBtn.addEventListener("click",function(){
    reset(passOneEl)
    reset(passTwoEl)
    randomPassword(passOneEl)
    randomPassword(passTwoEl)

})


function randomPassword(passNum){

    let length = passLength.value

    for (let i = 0; i < length; i ++){
        let randomNum = Math.floor(Math.random()*characters.length)
        passNum.textContent+= characters[randomNum]
    }

}


function reset(passNum){
    passNum.textContent=""

}
