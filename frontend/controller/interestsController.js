class InterestsController {
    constructor() {
        this.init();
    }
    init() {
        this.container = document.querySelector(".container .row");
        this.container.innerHTML = new InterestsView().template();

        this.goToWhoAmI = document.querySelector("#whoAmI");

        this.checkBoxes = document.querySelectorAll(".option-checkbox");
        this.sentFormulary = document.querySelector(".form button");
        this.formInterests = {};
        this.bind();
    }
    bind() {
        this.goToWhoAmI.addEventListener("click", ()=>{
            new Router().goToWhoAmI();    
            console.log("ir pra etapa 2")      
        });
        
        this.checkBoxes.forEach((checkbox) => {
            checkbox.addEventListener("click", () => {
                if (checkbox.checked) {
                    checkbox.classList.add("selected");
                    this.formInterests[checkbox.value] = checkbox.checked;
                } else {
                    checkbox.classList.remove("selected");
                    delete this.formInterests[checkbox.value];
                }
            })

        })
        this.sentFormulary.addEventListener("click", e => {
            e.preventDefault();
        });
    }
}

let interests = new InterestsController();