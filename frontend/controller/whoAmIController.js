class WhoAmIController{
    constructor(){
        this.init();
    }
    init(){
        this.container = document.querySelector(".container .row");
        this.container.innerHTML = new WhoAmIView().template();

        this.device = document.querySelector(".device");
        this.alertError = document.querySelector(".alert-error")

        this.goToProfileDetails = document.querySelector("#profileDetails");
        this.goToInterests = document.querySelector("#interests")
        
        this.checkBoxes = document.getElementsByName("sex");
        this.form = document.querySelector("form");
        this.sentFormulary = document.querySelector(".form button");
    
        this.formSex = {};

        this.bind();
    }
    bind(){
        this.goToProfileDetails.addEventListener("click", ()=>{
            new Router().goToProfileDetails();
            console.log("cliquei nessa merda")
        })

        this.goToInterests.addEventListener("click", ()=>{
            new Router().goToInterests();     
            console.log("ir pra etapa 3")           
        });

        this.checkBoxes.forEach((checkbox, i) => {
            checkbox.addEventListener("click", ()=> {
                if (!checkbox.checked) {
                    delete this.formSex[checkbox.value];
                } else {
                    this.formSex[checkbox.value] = checkbox.checked;
                    
                }
                console.log(checkbox.value, checkbox.checked)
                console.log(this.checkBoxes)
            })
        });
        this.sentFormulary.addEventListener("click", e => {
            e.preventDefault();
            if (Object.keys(this.formSex).length === 0) {
                alert("po irmao preenche o bagulho");
                this.device.innerHTML += new AlertErrorView().template()
                
                document.querySelector(".alert-error span").addEventListener("click", ()=>{
                    this.alertError.classList.remove("d-grid");
                    this.alertError.classList.add("d-none");
                })
            }
        });
    }
}
let whoAmI = new WhoAmIController();