const Div=class{
    constructor(id,className){
        this.element=document.createElement('div');
        this.element.id=id;
        this.element.className=className;
    }

    adicionarElementFilho(child){
        this.element.appendChild(child)
    }
}