class OnboardingView{
    constructor(){
        this.template()
    }

    template(){
        return `
        <div class="col-4 device onboarding">
            <div class="info-carrossel" >
                
                <div>
                    <img src="imagens/carrossel-girl-1.png" alt="">
                    <h3>Algorithm</h3>
                    <h6>Users going through a vetting process to ensure you never match with bots.</h6>
                </div>
                <div>

                    <img src="imagens/carrossel-girl-2.png" alt="">
                    <h3>Matches</h3>
                    <h6>We match you with people that have a large array of similar interests.</h6>

                </div>
                <div>

                    <img src="imagens/carrosel-girl-3.png" alt="">
                    <h3>Premium</h3>
                    <h6>Sign up today and enjoy the first month of premium benefits on us.</h6>

                </div>
                
            </div>
            <div class="footer">
                <button class="go-cadaster">Create an account</button>
                <h6>Already have an account? <a href="#">Sign In</a></h6>
            </div>
        </div>
        `
    }
}