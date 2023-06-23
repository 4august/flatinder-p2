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
                alert("preencha os campos corretamente");
            }else{
                let joinedInterests =  this.interests.join(", ")
                localStorage.setItem("interests", JSON.stringify(joinedInterests));
                
                let form = {
                    image_profile: localStorage.getItem("profile_image"),
                    first_name : localStorage.getItem("first_name"),
                    last_name : localStorage.getItem("last_name"),
                    date_birth : localStorage.getItem("date_birth"),
                    sex : localStorage.getItem("sex"),
                    interests : localStorage.getItem("interests")
                }
                console.log(form)
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