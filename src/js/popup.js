document.querySelector(".popup-close").addEventListener("click", ()=>{
    document.querySelector(".popup").remove()
    document.querySelector("header").style.filter = 'none'
    document.querySelector("main").style.filter = 'none'
    document.querySelector("footer").style.filter = 'none'

})