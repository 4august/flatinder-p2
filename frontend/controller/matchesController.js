class MatchesController{
    constructor(){
        this.init();
    }
    init(){
        this.container = document.querySelector(".container .row");
        this.container.innerHTML = new MatchesView().template();
    }
}
let matches = new MatchesController();