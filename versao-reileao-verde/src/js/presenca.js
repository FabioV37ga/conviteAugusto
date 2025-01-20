
document.querySelector(".presenca-close").addEventListener("click", () => {
    togglePresencaWindow()
})

document.querySelectorAll(".button")[0].children[0].addEventListener("click", () => {
    togglePresencaWindow()
})

var presencaWindow = document.querySelector(".presenca-append")
function togglePresencaWindow() {
    mapWindow.style.display = 'none'
    giftWindow.style.display = 'none'
    presencaWindow.style.display = presencaWindow.style.display == "none" ? 'initial' : 'none';
}

var elementoAdd = document.querySelector(".form-add");
elementoAdd.onclick = ()=>{var a = new PresencaItem}