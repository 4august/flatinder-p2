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
            alert("cliquei pra ir pra lista de matches");
            this.goToMatchesList.innerHTML = new Router().goToMatches();
            new NavigationController();
        });
        
        this.goToMain.addEventListener("click", ()=>{
            alert("cliquei pra ir pra main buscar uma crush");
            this.goToMain.innerHTML = new Router().goToMain();
            new NavigationController();
        });

        this.goToProfile.addEventListener("click", ()=>{
            alert("cliquei pra visualizar meu perfil");
            this.goToProfile.innerHTML = new Router().goToProfile();
            new NavigationController();
        })
    }
}
let navigation = new NavigationController();