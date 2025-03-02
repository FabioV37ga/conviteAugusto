// https://docs.google.com/spreadsheets/d/1uRevqsAMCLDQTv2iP-IbilNk1Df4AiVwk9b9qyh8sdY/edit?gid=0#gid=0
const scriptURL = 'https://script.google.com/macros/s/AKfycbwKjIxaLBHF2QZc8yVdzVbUWiU6n4YoPYmUmmO9GBNaZ_qyVS0HxAyX-oj6Jw-OH-qMLg/exec'

const form = document.forms['sheetForm'];

// Captura o botão de envio e o campo de texto
var submitButton = document.querySelector(".form-confirm")

var cooldown = false;
// Adiciona um listener de clique no botão
submitButton.addEventListener('click', () => {
    // consol
    console.log(cooldown)
    if (cooldown == false) {
        cooldown = true;
        // setInterval(() => {
        //     cooldown = false;
        // }, 3000);

        var textField = document.querySelectorAll(".presenca-append-form-item")
        // Pega o valor do campo de texto

        var confirmacoes = []


        var index = 0;
        // console.log(textField)
        for (let i = 0; i <= textField.length - 1; i++) {
            if (textField[i].value && textField[i].value.toString().replaceAll(' ', '') != '') {
                confirmacoes[index] = textField[i].value
                index++
            }
        }

        // if (confirmacoes.length)
        if (confirmacoes.length > 0) {
            fetch(scriptURL, {
                method: 'POST',
                // mode: 'no-cors',
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded' // Envia como formulário
                },
                body: new URLSearchParams({
                    'convidados': confirmacoes // O campo 'textField' deve ser o mesmo usado no Google Apps Script
                    // "textField" : confirmacoes[0]
                })
            })
                .then(response => response.text())
                .then(result => {
                    // SUCESSO
                    console.log('Sucesso:', result); // Mensagem de sucesso
                    mostrarJanelaSucesso()
                    cooldown = false;
                })
                .catch(error => {
                    // ERRO
                    console.log('Erro', result)
                });
        }
    }

    function mostrarJanelaSucesso() {
        // console.log("mjs")
        var overlay = document.querySelector(".presenca-append-overlay")
        function handleAnimationEnd() {

            limparCampos()
            overlay.removeEventListener("animationend", handleAnimationEnd)

            function handleAnimationEndOut() {
                overlay.classList.remove("out")
                overlay.style.display = 'none'
                overlay.removeEventListener("animationend", handleAnimationEndOut)
            }
            overlay.addEventListener("animationend", handleAnimationEndOut)
            overlay.classList.add("out")
        }
        overlay.addEventListener("animationend", handleAnimationEnd)
        overlay.style.display = 'flex'
    }

    function limparCampos() {
        textField[0].value = ""
        var camposAdicionais = document.querySelectorAll(".aditional-item")
        for (let i = 0; i <= camposAdicionais.length - 1; i++) {
            camposAdicionais[i].remove()
        }
    }
});