class ProfileDetailsView{
    constructor(){
        this.template();
    }

    template(){
        return `
        <div class="col-12 col-md-4 device profile-details" >
            <div class="botao-sair">
                <span id="whoAmI">Skip</span>
            </div>
            <h1>Profile details</h1>
            <form class="form" action="">
                <div class="profile-image">
                    <input class="d-none" type="file" name="photo" id="image">
                    <label for="image">
                        <img src="imagens/photo.png" alt="" class="imagem-usuario">
                        <img src="" alt="" class="d-none avatarString">
                    </label>
                </div>
                <input type="text" name="first-name" id="first-name" class="form-control" placeholder="First name">
                <input type="text" name="last-name" id="last-name" class="form-control" placeholder="Last name">
                <input type="date" name="birthday-date" id="birthday-date" class="form-control"
                    placeholder="Last name">

                <button type="submit" class="botao-padrao">Confirm</button>

            </form>
        </div>
        `
    }
}