const appendAccordions = (data) => {
    const accordions = data.map((el, i) => AccordionNode(el, i + 1));
    $("#accordion-wrapper").append(...accordions);
}

const addAccordionHandler = () => {
    const accordionWrapper = $('#accordion-wrapper');
    accordionWrapper.on({
        "click": (e) => {
            const target = $(e.target);
            const accordion = $(target.parents('.accordion'));
            const trigger = $(accordion.find('.trigger'));
            accordion.hasClass('show') ? removeWithExpandElement(trigger, accordion) : openWithExpandElement(trigger, accordion);
            const accordionSiblings = $(accordion.siblings('.accordion'));
            removeWithExpandElement($(accordionSiblings.find('.trigger')), accordionSiblings);
        }
    })
}
