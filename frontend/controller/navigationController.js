class NavigationController{
    constructor(){
        this.init();
    }
    init(){
        this.navigationContainer = document.querySelector(".navigation");
        this.navigationContainer.innerHTML = new NavigationView().template();

        this.goToMatchesList = document.querySelector("#matchesList");
        this.goToMain = document.querySelector("#main");
        this.goToProfile = document.querySelector("#profile");
        this.bind();
    }
    bind(){
        this.goToMatchesList.addEventListener("click", ()=>{
            new Router().goToMatches();
            new NavigationController();
        });
        
        this.goToMain.addEventListener("click", ()=>{
            new Router().goToMain();          
            new NavigationController();
        });

        this.goToProfile.addEventListener("click", ()=>{
            new Router().goToProfile();            
            new NavigationController();
        });

    }
}
let navigation = new NavigationController();