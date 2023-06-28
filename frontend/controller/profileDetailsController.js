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
        this.dateBirth = document.querySelector("#birthday-date");

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
        this.chooseImage.addEventListener("change", () => {
            this.convertImgToBase64();
            this.showPreviewImage();

        });
        this.sendFormulary.addEventListener("click", (e) => {
            e.preventDefault();
            this.validate();
        });
    }
    convertImgToBase64() {
        const newImage = new FileReader();

        newImage.addEventListener("load", () => {
            console.log(newImage.result);
            this.imgString = newImage.result;
        })
        newImage.readAsDataURL(this.chooseImage.files[0])
    }
    storageUser() {
        localStorage.setItem("profile_image", this.imgString)
        localStorage.setItem("first_name", this.firstName.value);
        localStorage.setItem("last_name", this.lastName.value);
        localStorage.setItem("date_birth", this.dateBirth.value)
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
    validate() {
        if (this.chooseImage.files[0] == undefined ||
            this.firstName.value == "" ||
            /\s/g.test(this.lastName.value) ||
            this.lastName.value == "" ||
            /\s/g.test(this.lastName.value) ||
            this.dateBirth.value == ''
        ) {
            alert("preencha corretamente os campos")
            return false
        }
        this.storageUser();
        new Router().goToWhoAmI();
        return true
    }
}
let profileDetail = new ProfileDetailsController();