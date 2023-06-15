class MatchesView{
    constructor(){
        this.template();
    }

    template(){
        return `
        <div class="col-4 device matches">

            <div class="d-flex justify-content-between align-items-center">
                <h1>Matches</h1>
                <img class="icon-title" src="imagens/sort-two.svg" alt="">
            </div>

            <h5>This is a list of people who have liked you and your matches.</h5>

            <div class="row match-list">
                <div class="col-12 col-md-6 match">
                    <div class="info" style="background-image: url(imagens/match-1.png);">

                        <h5>Leilani, 19</h5>
                        <div class="undo-match">
                            <img src="imagens/close-small.svg" alt="">
                        </div>
                    </div>
                </div>
                <div class="col-12 col-md-6 match">
                    <div class="info" style="background-image: url(imagens/match-1.png);">
                        <h5>Leilani, 19</h5>

                        <img class="undo-match" src="imagens/close-small.svg" alt="">
                    </div>
                </div>
                <div class="col-12 col-md-6 match">
                    <div class="info" style="background-image: url(imagens/match-1.png);">

                        <h5>Leilani, 19</h5>
                        <img class="undo-match" src="imagens/close-small.svg" alt="">
                    </div>
                </div>
                <div class="col-12 col-md-6 match">
                    <div class="info" style="background-image: url(imagens/match-1.png);">

                        <h5>Leilani, 19</h5>
                        <img class="undo-match" src="imagens/close-small.svg" alt="">
                    </div>
                </div>
                <div class="col-12 col-md-6 match">
                    <div class="info" style="background-image: url(imagens/match-1.png);">

                        <h5>Leilani, 19</h5>
                        <div class="undo-match">
                            <img src="imagens/close-small.svg" alt="">
                        </div>
                    </div>
                </div>
                <div class="col-12 col-md-6 match">
                    <div class="info" style="background-image: url(imagens/match-1.png);">
                        <h5>Leilani, 19</h5>

                        <img class="undo-match" src="imagens/close-small.svg" alt="">
                    </div>
                </div>
                <div class="col-12 col-md-6 match">
                    <div class="info" style="background-image: url(imagens/match-1.png);">

                        <h5>Leilani, 19</h5>
                        <img class="undo-match" src="imagens/close-small.svg" alt="">
                    </div>
                </div>
                <div class="col-12 col-md-6 match">
                    <div class="info" style="background-image: url(imagens/match-1.png);">

                        <h5>Leilani, 19</h5>
                        <img class="undo-match" src="imagens/close-small.svg" alt="">
                    </div>
                </div>
            </div>

            <div class="navigation d-flex justify-content-between">
                <img src="imagens/cards.svg" alt="">
                <img src="imagens/indicator.svg" alt="">
                <img src="imagens/people.svg" alt="">
            </div>
        </div>
        `
    }
}