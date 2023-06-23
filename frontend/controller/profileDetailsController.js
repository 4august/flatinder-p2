class ProfileDetailsController {
    constructor() {
        this.init();
    }
    init() {
        this.container = document.querySelector(".container .row");
        this.container.innerHTML = new ProfileDetailsView().template();

        this.goToWhoAmI = document.querySelector("#whoAmI");

        this.avatarPreview = document.querySelector(".profile-image img");
        this.imgString;
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
        this.chooseImage.addEventListener("change", () => {
            alert("vou escolher uma imagem pra por");
            const newImage = new FileReader();

             newImage.addEventListener("load", ()=>{
                console.log(newImage.result);
                this.imgString = newImage.result
                
            })
            newImage.readAsDataURL(this.chooseImage.files[0])
            this.showPreviewImage();

        });
        this.sendFormulary.addEventListener("click", (e) => {
            e.preventDefault();
            this.createUser();
            new Router().goToWhoAmI();

        });
    }
    convertImgToURL(){
        
    }
    createUser() {
        this.obj = {
            "first_name": this.firstName.value,
            "last_name": this.lastName.value,
            "birthday_date": this.birthDayDate.value
        }
        this.objIMg = {
            "img": this.imgString
        }

        localStorage.setItem("profile_image",this.imgString)
        localStorage.setItem("first_name", this.firstName.value);
        localStorage.setItem("last_name", this.lastName.value);
        localStorage.setItem("date_birth", this.birthDayDate.value)


        console.log(this.obj, this.objIMg);
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