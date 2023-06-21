class WhoAmIView{
    constructor(){
        this.template();
    }
    template(){
        return `
        <div class="col-4 device whoAmI">

            <div class="navbar d-flex justify-content-space-between">
                <img id="profileDetails" src="imagens/right.svg" alt="">
                <span id="interests">Skip</span>
            </div>

            <h1 class="">Who am I</h1>

            <form id="form" class="form" action="">
                <div class="row">
                    <div class="col-12 sex-option">
                        <input type="radio" name="sex" value="woman" id="woman">
                        <label for="woman">Woman</label>
                    </div>
                    <div class="col-12 sex-option">
                        <input type="radio" name="sex" value="man" id="man">
                        <label for="man">Man</label>
                    </div>
                    <div class="col-12 sex-option">
                        <input type="radio" name="sex" value="other" id="Other">
                        <label for="Other">Other</label>
                    </div>
                    <button>Continue</button>
                </div>
            </form>
        </div>
        `
    }
}