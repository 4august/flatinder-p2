class ProfileController {
    constructor(){
        this.init();
    }

    init(){
        this.container = document.querySelector(".container .row");
        this.container.innerHTML = new ProfileView().template();
    }
}
let profile = new ProfileController();