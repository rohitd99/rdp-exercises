const button = document.querySelector(".dropdown__btn");
const items = document.querySelectorAll(".dropdown__option");
const option = document.querySelector(".dropdown__options");
// console.log(button);
console.log(option);

button.addEventListener("click",() =>{
    
    if(option.classList.contains("dropdown__options__active"))
    {
        option.classList.remove("dropdown__options__active");
        option.classList.add("dropdown__options__hidden");
    }else{
        option.classList.remove("dropdown__options__hidden");
        option.classList.add("dropdown__options__active");
    }
});