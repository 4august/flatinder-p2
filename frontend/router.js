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
            },
            profileDetails: {
                path: "/cadaster/profileDetails",
                controller: "ProfileDetailsController"
            },
            whoAmI: {
                path: "/cadaster/whoAmI",
                controller: "WhoAmIController"
            },
            interests: {
                path: "/cadaster/interests",
                controller: "InterestsController"
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
    goToProfileDetails(){
        this.goTo(this.routes.profileDetails)
    }
    goToWhoAmI(){
        this.goTo(this.routes.whoAmI)
    }
    goToInterests(){
        this.goTo(this.routes.interests)
    }
    goTo(rota){
        eval(`new ${rota.controller}();`)
    }
}