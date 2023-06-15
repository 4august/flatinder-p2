class MatchView{
    constructor(){
        this.template();
    }

    template(){
        return `
        <div class="col-4 device match-notification">
            <div class="person-two" style="background-image: url(imagens/match-6.png);">
                <img src="imagens/liked.svg" alt="">
            </div>
            <div class="person-one" style="background-image: url(imagens/match-5.png);">
                <img src="imagens/liked.svg" alt="">
            </div>

            <h1>It's a match, Jake</h1>
            <h6>Start a conversation now with each other</h6>

            <button class="go-chat">Say hello</button>
            <button class="keep-swiping">Keep swiping</button>
        </div>
        `
    }
}