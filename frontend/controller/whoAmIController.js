class WhoAmIController {
    constructor() {
        this.init();
    }
    init() {
        this.container = document.querySelector(".container .row");
        this.container.innerHTML = new WhoAmIView().template();

        this.device = document.querySelector(".device");
        this.alertError = document.querySelector(".alert-error")

        this.goToProfileDetails = document.querySelector("#profileDetails");
        this.goToInterests = document.querySelector("#interests")

        this.checkBoxes = document.getElementsByName("sex");
        this.form = document.querySelector("form");
        this.sentFormulary = document.querySelector(".form button");

        this.sex = {};

        this.bind();
    }
    bind() {
        this.goToProfileDetails.addEventListener("click", () => {
            new Router().goToProfileDetails();
        })

        this.goToInterests.addEventListener("click", () => {
            new Router().goToInterests();
        });

        this.checkBoxes.forEach((checkbox, i) => {
            checkbox.addEventListener("click", () => {
                if (!checkbox.checked) {
                    delete this.sex[checkbox.value];
                } else {
                    this.sex = checkbox.value;
                }
                console.log(checkbox.value, checkbox.checked)
                console.log(this.checkBoxes)
            })
        });
        this.sentFormulary.addEventListener("click", e => {
            e.preventDefault();
            if (Object.keys(this.sex).length === 0) {
                alert("po irmao preenche o bagulho");
            } else {
               localStorage.setItem("sex", this.sex);
               new Router().goToInterests();
                console.log("informação enviada", this.sex)
            }
        });
    }
}
let whoAmI = new WhoAmIController();