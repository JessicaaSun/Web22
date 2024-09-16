"use strict"

let image = document.querySelector("#image");
let text = document.querySelector("#text");
let btnYes = document.querySelector("#btnYes");
let btnNo = document.querySelector("#btnNo");
let happyCat = new Audio("./assets/happy-happy-happy-cat.mp3")
let sadCat = new Audio("./assets/crying-cat.mp3");

btnYes.addEventListener('click', ()=>{
    image.src = "https://media.tenor.com/lCKwsD2OW1kAAAAi/happy-cat-happy-happy-cat.gif"
    text.innerHTML = "Aww I love you too ❤️";
    sadCat.pause()
    happyCat.play();
    happyCat.loop= true;
})
let btnYesScale = 1;
let btnNoScale = 1;

btnNo.addEventListener('click',()=> {
    image.src = "https://media.tenor.com/u8M7kk5ZXmwAAAAM/banana-cat-crying.gif";
    text.innerHTML = "Oh no, please click yes"
    happyCat.pause()
    sadCat.play()
    sadCat.loop = true;
    btnYesScale += 0.1;
    btnNoScale -= 0.1;
    btnNo.style.transform = `scale(${btnNoScale})`
    btnYes.style.transform = `scale(${btnYesScale})`
})
