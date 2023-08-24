const categories = [...document.querySelector("header nav ul").children];
const cards = [...document.querySelectorAll(".card")];


categories.forEach(category => {
    category.addEventListener("click",() =>{
        if(!category.classList.contains("category__selected"))
        {   
            category.classList.add("category__selected");
            category.classList.remove("category__hover");
            
            const categoryType = category.classList[1];
            const cardType = "card__" + categoryType.split("__")[1];

            categories.forEach((category) =>{
                if(!category.classList.contains(categoryType))
                {
                    category.classList.remove("category__selected");
                    category.classList.add("category__hover");
                }
            })
            cards.forEach((card) =>{
                if(card.classList.contains(cardType))
                {
                    card.classList.remove("card__hidden");
                }else{
                    card.classList.add("card__hidden");
                }
            });
            
        }
    })
});
