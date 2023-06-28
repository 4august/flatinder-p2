class onboardingController{
    constructor(){
        this.init();
    }
    init(){
        this.container = document.querySelector(".container .row");
        this.container.innerHTML = new OnboardingView().template();


        this.bind();
    }
    bind(){

    }
    
}
let onboarding = new onboardingController();