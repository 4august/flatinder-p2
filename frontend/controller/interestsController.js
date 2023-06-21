class InterestsController {
    constructor() {
        this.init();
    }
    init() {
        this.container = document.querySelector(".container .row");
        this.container.innerHTML = new InterestsView().template();

        this.goToWhoAmI = document.querySelector("#whoAmI");

        this.checkBoxes = document.querySelectorAll("[name='interests[]']");
        this.sentFormulary = document.querySelector(".form button");
        this.interests = [];

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
                    this.interests.push(checkbox.value)
                } else {
                    checkbox.classList.remove("selected");
                    delete this.interests[checkbox.value];
                }
            })

        })
        
        this.sentFormulary.addEventListener("click", e => {
            e.preventDefault();

            /*let obj = {
                interests : this.interests.join(', ')
            }*/

            if (Object.keys(this.interests).length === 0) {
                console.log(this.interests)
                alert("po irmao preenche o bagulho");
            }else{
                /*
                
                */
                sessionStorage.setItem("interests", this.interests);

                let form = {
                    sex : sessionStorage.getItem("sex"),
                    interests : sessionStorage.getItem("interests")
                }
                console.log(form);

                fetch("http://localhost:3000/cadaster", {
                    method: "POST",
                    headers: {"Content-Type": "application/json"},
                    body: JSON.stringify(form)
                });

                //new Router().goToMain()
                console.log("informação enviada", this.interests)
            }
        });
    }
}

let interests = new InterestsController();