const accordionWrapper = $("#accordion-wrapper")
accordionWrapper.html(Loading);
$.get("https://api.adviceslip.com/advice", (data, status) => {
    resetElement(accordionWrapper);
    accordionData[4].description = JSON.parse(data).slip.advice;
    appendAccordions(accordionData);
    $(".accordion:first").addClass('show');
    addAccordionHandler();
    accordionWrapper.attr('aria-busy', false);
})