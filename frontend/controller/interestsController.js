class Interests{
    constructor(){
        this.interests = document.querySelectorAll(".option");
        this.checkBoxes = document.querySelectorAll(".option-checkbox");
        this.sentFormulary = document.querySelector(".form button");
        this.bind();
    }
    bind(){
        this.interests.forEach((option, i) => {
            option.addEventListener("click", () =>{
                if(this.checkBoxes[i].checked == true){
                    option.classList.add("selected");
                    return this.checkBoxes[i].checked = true
                }
                else
                option.classList.remove("selected")
            })
        });
        this.sentFormulary.addEventListener("click", e =>{ 
            e.preventDefault();



        });
        
        // this.checkBoxes.forEach(checkbox => {
        //     checkbox.addEventListener("click", ()=>{
        //         console.log(checkbox.checked)

        //     })
        // })
    }
}

let interests = new Interests();