class InterestsController {
    constructor() {
        this.init();
    }
    init() {
        this.container = document.querySelector(".container .row");
        this.container.innerHTML = new InterestsView().template();

        this.goToWhoAmI = document.querySelector("#whoAmI");
        this.testeee= document.querySelector("[name= 'ingredientes[]']")
        this.checkBoxes = document.querySelectorAll("[name='interests[]']");
        this.sentFormulary = document.querySelector(".form button");
        this.formInterests = [];
        let formmm = {}
        this.bind();
    }
    bind() {
        this.goToWhoAmI.addEventListener("click", ()=>{
            new Router().goToWhoAmI();    
            console.log("ir pra etapa 2")      
        });
        
        this.checkBoxes.forEach((checkbox, i) => {
            checkbox.addEventListener("click", () => {
                if (checkbox.checked) {
                    checkbox.classList.add("selected");
                    this.formInterests.push(checkbox.value)
                } else {
                    checkbox.classList.remove("selected");
                    delete this.formInterests[checkbox.value];
                }
            })

        })
        
        this.sentFormulary.addEventListener("click", e => {
            e.preventDefault();

            let obj = {
                interests : this.formInterests.join(', ')
            }

            if (Object.keys(this.formInterests).length === 0) {
                console.log(this.formInterests)
                alert("po irmao preenche o bagulho");
            }else{
                fetch("http://localhost:3000/cadaster/interests", {
                    method: "POST",
                    headers: {"Content-Type": "application/json"},
                    body: JSON.stringify(obj)
                });
                console.log("informação enviada", obj)
            }
        });
    }
}

let interests = new InterestsController();