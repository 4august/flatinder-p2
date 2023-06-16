class NavigationView{
    constructor(){
        this.template();
    }

    template(){
        return `
        <div class=" d-flex justify-content-between">
            <img id="main" src="imagens/cards.svg" alt="">
            <img id="matchesList" src="imagens/indicator.svg" alt="">
            <img id="profile" src="imagens/people.svg" alt="">
        </div>
        `
    }
}
