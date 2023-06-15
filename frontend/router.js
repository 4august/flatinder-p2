class Router{
    constructor(){
        this.routes ={
            main: {
                path: "/main",
                controller: "MainController",
            },
            matches: {
                path: "/matches",
                controller: "MatchesController",
            },
            profile: {
                path: "/profile",
                controller: "ProfileController"
            }
        }
    }
    goToMain(){
        this.goTo(this.routes.main)
    }
    goToMatches(){
        this.goTo(this.routes.matches)
    }
    goToProfile(){
        this.goTo(this.routes.profile)
    }
    goTo(rota){
        eval(`new ${rota.controller}();`)
    }
}