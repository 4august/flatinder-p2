class InterestsView{
    constructor(){
        this.template();
    }
    template(){
        return `
        <div class="col-4 device interests">

            <div class="navbar d-flex justify-content-space-between">
                <img src="imagens/right.svg" alt="">
                <span>Skip</span>
            </div>

            <h1>Your interests</h1>

            <h6>
                Select a few of your interests and let everyone know what you’re h6assionate about.
            </h6>

            <form class="form" action="">
                <div class="row">
                    <div class="col-12 col-lg-6 interest">
                        <input class="d-none option-checkbox" type="checkbox" name="interests[]" value="photography" id="photography">
                        <label class="option" for="photography">
                            <img src="imagens/camera.svg" alt="">
                            Photography
                        </label>
                    </div>
                    <div class="col-12 col-lg-6 interest">
                        <input class="d-none option-checkbox" type="checkbox" name="interests[]" value="shopping" id="shopping">
                        <label class="option" for="shopping">
                            <img src="imagens/weixin-market.svg" alt="">
                            Shopping
                    </div>
                    <div class="col-12 col-lg-6 interest">
                        <input class="d-none option-checkbox" type="checkbox" name="interests[]" value="karaoke" id="karaoke">
                        <label class="option" for="karaoke">
                            <img src="imagens/voice.svg" alt="">
                            Karaoke
                    </div>
                    <div class="col-12 col-lg-6 interest">
                        <input class="d-none option-checkbox" type="checkbox" name="interests[]" value="yoga" id="yoga">
                        <label class="option" for="yoga">
                            <img src="imagens/viencharts.svg" alt="">
                            Yoga
                    </div>
                    <div class="col-12 col-lg-6 interest">
                        <input class="d-none option-checkbox" type="checkbox" name="interests[]" value="cooking" id="cooking">

                        <label class="option" for="cooking">
                            <img src="imagens/noodles.svg" alt="">
                            Cooking
                    </div>
                    <div class="col-12 col-lg-6 interest">
                        <input class="d-none option-checkbox" type="checkbox" name="interests[]" value="tennis" id="tennis">

                        <label class="option" for="tennis">
                            <img src="imagens/tennis.svg" alt="">
                            Tennis
                    </div>
                    <div class="col-12 col-lg-6 interest">
                        <input class="d-none option-checkbox" type="checkbox" name="interests[]" value="run" id="run">
                        <label class="option" for="run">
                            <img src="imagens/sport.svg" alt="">
                            Run
                    </div>
                    <div class="col-12 col-lg-6 interest">
                        <input class="d-none option-checkbox" type="checkbox" name="interests[]" value="swimming" id="swimming">
                        <label class="option" for="swimming">
                            <img src="imagens/ripple.svg" alt="">
                            Swimming
                    </div>
                    <div class="col-12 col-lg-6 interest">
                        <input class="d-none option-checkbox" type="checkbox" name="interests[]" value="art" id="art">
                        <label class="option" for="art">
                            <img src="imagens/platte.svg" alt="">
                            Art
                    </div>
                    <div class="col-12 col-lg-6 interest">
                        <input class="d-none option-checkbox" type="checkbox" name="interests[]" value="traveling" id="traveling">
                        <label class="option" for="traveling">
                            <img src="imagens/outdoor.svg" alt="">
                            Traveling
                    </div>
                    <div class="col-12 col-lg-6 interest">
                        <input class="d-none option-checkbox" type="checkbox" name="interests[]" value="extreme" id="extreme">
                        <label class="option" for="extreme">
                            <img src="imagens/parachute.svg" alt="">
                            Extreme
                    </div>
                    <div class="col-12 col-lg-6 interest">
                        <input class="d-none option-checkbox" type="checkbox" name="interests[]" value="music" id="music">
                        <label class="option" for="music">
                            <img src="imagens/music.svg" alt="">
                            Music
                    </div>
                    <div class="col-12 col-lg-6 interest">
                        <input class="d-none option-checkbox" type="checkbox" name="interests[]" value="drink" id="drink">
                        <label class="option" for="drink">
                            <img src="imagens/goblet-full.svg" alt="">
                            Drink
                    </div>
                    <div class="col-12 col-lg-6 interest">
                        <input class="d-none option-checkbox" type="checkbox" name="interests[]" value="video-games" id="video-games">
                        <label class="option" for="video-games">
                            <img src="imagens/game-handle.svg" alt="">
                            Video Games
                    </div>
                    <button>Continue</button>
                </div>
            </form>
        </div>
        `
    }
}