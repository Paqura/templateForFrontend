class Tooltip {
    constructor(id, text) {
        this.id = id;
        this.text = text;
    }
    show() {
        let tooltip = document.querySelector(`.${this.id}`);
        tooltip.textContent = this.text;
        tooltip.classList.add('is-active');
    }
    hide() {
        let tooltip = document.querySelector(`.${this.id}`);
        tooltip.classList.remove("is-active");
    }
}

let tooltipElement = document.querySelector(".tooltip__img"),
    attr,
    id,
    tool;

if (tooltipElement !== null) {
    tooltipElement.addEventListener("mouseover", event => {
        attr = event.target.closest(".tooltip").getAttribute("data-tooltip");
        id = event.target.closest(".tooltip").querySelector('.tooltip__inner').className;

        tool = new Tooltip(id, attr);
        tool.show();
    });

    tooltipElement.addEventListener("mouseleave", event => {
        tool.hide();
    });
}