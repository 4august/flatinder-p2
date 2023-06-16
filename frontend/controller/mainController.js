class MainController{
    constructor(){
        this.init();
    }
    init(){
        this.container_main = document.querySelector(".container-main .row");
        this.container_main.innerHTML = new mainView().template();


        // this.viewMatchesList = new MatchesView();
        // this.viewMain = new mainView();
        // this.viewMatch = new MatchView();

    }
}

let main = new MainController();