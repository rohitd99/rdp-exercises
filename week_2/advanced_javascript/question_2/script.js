const accordionItems = document.querySelectorAll(".accordion__item");


accordionItems.forEach((item) =>{
    item.addEventListener("click",() =>{
        const question = item.children[0];
        const answer = item.children[1];

        const span = question.children[0].children[1].children[0];
        if(answer.classList.contains("accordion__answer__inactive"))
        {
            answer.classList.remove("accordion__answer__inactive");
            answer.classList.add("accordion__answer__active");
            span.classList.remove("fa-chevron-down");
            span.classList.add("fa-chevron-up");
        }else{
            answer.classList.remove("accordion__answer__active");
            answer.classList.add("accordion__answer__inactive");
            span.classList.remove("fa-chevron-up");
            span.classList.add("fa-chevron-down");
        }

    })
})


