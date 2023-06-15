class MainController{
    constructor(){
        this.init();
    }
    init(){
        this.container_main = document.querySelector(".container-main");

        this.viewMatchesList = MatchesView();
        this.viewMain = mainView();
        this.viewMatch = MatchView();
    }
}

let main = new MainController();