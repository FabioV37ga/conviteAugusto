
document.querySelector(".gift-close").addEventListener("click", () => {
    toggleGiftWindow()
})

document.querySelectorAll(".button")[2].children[0].addEventListener("click", () => {
    toggleGiftWindow()
})

var giftWindow = document.querySelector(".gift-append")
function toggleGiftWindow() {
    presencaWindow.style.display = 'none'
    mapWindow.style.display = 'none'
    giftWindow.style.display = giftWindow.style.display == "none" ? 'initial' : 'none';

}

var pix = document.querySelector(".pix")
pix.addEventListener("click", ()=>{
    console.log(pix.textContent)
    navigator.clipboard.writeText(pix.textContent.replaceAll(" ", "").trim())
})