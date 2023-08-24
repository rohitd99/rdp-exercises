const button = document.querySelector(".dropdown__btn");
const items = document.querySelectorAll(".dropdown__option");
const option = document.querySelector(".dropdown__options");


button.addEventListener("click",() =>{
    
    option.classList.toggle("dropdown__options--active");
    option.classList.toggle("dropdown__options--hidden");
    
});