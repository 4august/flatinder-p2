class mainView{
    constructor(){
        this.template()
    }

    template(){
        return `
        <div class="col-12 col-md-4 device main">

            <!-- <div class="d-flex">
                <img class="icon-title" src="imagens/arrow-left.svg" alt="">
                <h1 class="text-center">Discover</h1>
            </div> -->

            <h1 class="text-center">Discover</h1>

            <div class="person-profile" style="background-image: url(imagens/main-photo.png);">
                <h3>Jessica Parker, 23</h3>
            </div>

            <div class="d-flex justify-content-between align-items-center pt-4 options">
                <div class="next">
                    <img src="imagens/close-small-yellow.svg" alt="">
                </div>
                <div class="like">
                    <img  src="imagens/like.svg" alt="">
                </div>
                <div class="super-like">
                    <img src="imagens/star.svg" alt="">
                </div>
            </div>

            <div class="navigation">
            </div>
        </div>
        `
    }
}