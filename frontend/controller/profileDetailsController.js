class ProfileDetailsController {
    constructor() {
        this.init();
    }
    init() {
        this.container = document.querySelector(".container .row");
        this.container.innerHTML = new ProfileDetailsView().template();



        this.goToWhoAmI = document.querySelector("#whoAmI");

        this.bind();
    }
    bind(){
        this.goToWhoAmI.addEventListener("click", ()=>{
            new Router().goToWhoAmI();    
            console.log("ir pra etapa 2")      
        });
    }
}
let profileDetail = new ProfileDetailsController();