
document.querySelector(".map-close").addEventListener("click", () => {
    toggleMapWindow()
})

document.querySelectorAll(".button")[1].children[0].addEventListener("click", () => {
    toggleMapWindow()
})

var mapWindow = document.querySelector(".map-append")
function toggleMapWindow() {
    presencaWindow.style.display = 'none'
    giftWindow.style.display = 'none'
    mapWindow.style.display = mapWindow.style.display == "none" ? 'initial' : 'none';
}