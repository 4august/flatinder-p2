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
            if (Object.keys(this.interests).length === 0) {
                console.log(this.interests)
                alert("preencha os campos corretamente");
            }else{
                sessionStorage.setItem("interests", this.interests);

                let form = {
                    sex : sessionStorage.getItem("sex"),
                    interests : sessionStorage.getItem("interests")
                }

                fetch("http://localhost:3000/cadaster", {
                    method: "POST",
                    headers: {"Content-Type": "application/json"},
                    body: JSON.stringify(form)
                });

                new Router().goToMain()
            }
        });
    }
}

let interests = new InterestsController();