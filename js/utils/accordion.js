const appendAccordions = (data) => {
    const accordions = data.map((el, i) => AccordionNode(el, i + 1));
    $("#accordion-wrapper").append(...accordions);
}

const setAccordionToggleSlide = () => {
    const accordionWrapper = $('#accordion-wrapper');
    accordionWrapper.on("click", ".trigger", event => {
        const accordion = $(event.target).parents('.accordion');
        accordion.toggleClass('show');
        accordion.siblings('.accordion').removeClass('show');
    })
}