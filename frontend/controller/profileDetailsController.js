class ProfileDetailsController {
    constructor() {
        this.init();
    }
    init() {
        this.container = document.querySelector(".container .row");
        this.container.innerHTML = new ProfileDetailsView().template();

        this.goToWhoAmI = document.querySelector("#whoAmI");

        this.avatarPreview = document.querySelector(".profile-image img");
        this.avatarString = document.querySelector(".avatarString")
        this.chooseImage = document.querySelector("#image");

        this.firstName = document.querySelector("#first-name");
        this.lastName = document.querySelector("#last-name");
        this.birthDayDate = document.querySelector("#birthday-date");

        this.obj = {};
        this.formData = new FormData();

        this.sendFormulary = document.querySelector(".form button");

        this.bind();
    }
    bind() {
        this.goToWhoAmI.addEventListener("click", () => {
            new Router().goToWhoAmI();
            console.log("ir pra etapa 2")
        });
        console.log(this.chooseImage)
        this.chooseImage.addEventListener("click", () => {
            alert("vou escolher uma imagem pra por");
            this.showPreviewImage();

        });
        this.sendFormulary.addEventListener("click", (e) => {
            e.preventDefault();
            this.createUser();
        });
    }
    toDataURL(src){
        var image = new Image();
        image.crossOrigin = 'Anonymous';
        image.onload = function(){
           var canvas = document.createElement('canvas');
           var context = canvas.getContext('2d');
           canvas.height = this.naturalHeight;
           canvas.width = this.naturalWidth;
           context.drawImage(this, 0, 0);           
        };
        image.src = src;
     }
    createUser() {
        let renderImage = new FileReader();
        renderImage.onload = (e) =>  {
            this.avatarString.src = this.chooseImage.files[0];
        }
        this.obj = {
            "profile_image": this.avatarString.src,
            "first_name": this.firstName.value,
            "last_name": this.lastName.value,
            "birthday_date": this.birthDayDate.value
        }
        this.formData.append("profile_image", this.chooseImage.files[0])
        this.formData.append("first_name", this.firstName.value)
        this.formData.append("last_name", this.lastName.value)
        this.formData.append("birthday_date", this.birthDayDate.value)

        sessionStorage.setItem("user", JSON.stringify(this.obj));
        console.log(this.obj);
    }
    showPreviewImage() {
        if (this.chooseImage.files && this.chooseImage.files[0]) {
            let renderImage = new FileReader();
            renderImage.onload = (e) => {
                this.avatarPreview.src = e.target.result;
            };
            renderImage.readAsDataURL(this.chooseImage.files[0])
        }
    }
}
let profileDetail = new ProfileDetailsController();