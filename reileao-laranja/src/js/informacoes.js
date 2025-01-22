var endereco = document.querySelector(".endereco")
var copyStatus = document.querySelector(".copyStatus")
endereco.addEventListener("click", ()=>{
    // console.log(endereco.textContent)
    navigator.clipboard.writeText("Buffet Planeta Kids AV. Eng Caetano Álvares, 4070  Vila Romero, São Paulo")
    copyStatus.style.display = 'initial';
    var timeout = setTimeout(() => {
        copyStatus.style.display = 'none';
    }, 1000);
})