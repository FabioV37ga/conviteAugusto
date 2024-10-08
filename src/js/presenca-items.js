class PresencaItem {
    static elementoItem = `<div class="form-item-container aditional-item">
    <input type="text" class="presenca-append-form-item"
    placeholder="Nome - Documento (RG/CPF)">
    <a href="#" class="item-remove">
    <i class="fa fa-trash" aria-hidden="true"></i>
    </a>
    </div>`

    elemento;
    id;

    constructor() {
        this.id = document.querySelectorAll(".form-item-container").length - 1
        this.create()
    }

    create() {
        $(PresencaItem.elementoItem).insertBefore(".add-container");
        this.elemento = document.querySelectorAll(".aditional-item")[this.id];
        this.setClickEvent()
    }

    setClickEvent() {
        this.elemento.children[1].addEventListener("click", () => {
            this.remove()
        })
    }

    remove() {
        this.elemento.remove();
    }
}