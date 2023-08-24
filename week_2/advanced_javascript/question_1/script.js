const saveBtn = document.querySelector(".save__btn");


saveBtn.addEventListener("click",() =>{
    if(saveBtn.classList.contains("save__btn--red"))
    {
        saveBtn.classList.remove("save__btn--red");
        saveBtn.classList.add("save__btn--black");
        saveBtn.innerHTML = "Saved";
    }else{
        saveBtn.classList.remove("save__btn--black");
        saveBtn.classList.add("save__btn--red");
        saveBtn.innerHTML = "Save";
    }
});
