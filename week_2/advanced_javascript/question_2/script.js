const accordionItems = document.querySelectorAll(".accordion__item");


accordionItems.forEach((item) =>{
    item.addEventListener("click",() =>{
        const question = item.children[0];
        const answer = item.children[1];
        const span = question.children[0].children[1].children[0];

        answer.classList.toggle("accordion__answer__inactive");
        answer.classList.toggle("accordion__answer__active");
        span.classList.toggle("fa-chevron-up");
        span.classList.toggle("fa-chevron-down");
    })
})

