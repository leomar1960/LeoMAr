class Tooltip{
    constructor(element){
        this.element = element;
        this.message = element.getAttribute('data-message');
    }
    init(){
        const tip = document.createElement('div');
        tip.classList.add('tip');
        tip.textContent = this.message;
        this.element.appendChild(tip);
    }
}


export {Tooltip as default}