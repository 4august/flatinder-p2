class AlertErrorView{
    constructor(){
        this.template();
    }
    template(){
        return `
        
        <div class="d-grid alert-error">
            <span>X</span>
            <h5>Preencha o(s) campo(s) corretamente</h5>
        </div>
        
        `
    }
}