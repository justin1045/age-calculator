const button = document.getElementById("btn");

const input = document.getElementById("date-input");
const today = new Date();

const agePlace = document.getElementById("age-place");

button.addEventListener("click", (e)=>{
    if(!input.value){
        alert("Enter a valid date of birth !")
    }
   const birth = Number(input.value.split("-")[0]);
    let age = Number(today.getFullYear()) - birth;
    if(age < 0){
        alert("past me kya karne aya bhai? Future me maja nhi aaa raha kya....?")
    }
    agePlace.textContent = age;
 
})