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
        this.formData.append("profile_image", this.chooseImage.files[0])
        this.formData.append("first_name", this.firstName.value)
        this.formData.append("last_name", this.lastName.value)
        this.formData.append("birthday_date", this.birthDayDate.value)

        localStorage.setItem("user", JSON.stringify(this.obj));
        this.objIMg = {
            "img": this.imgString
        }
        localStorage.setItem("profile_image", JSON.stringify(this.objIMg ))

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