const resetElement = (element) => element.html('');

const removeShow = (element) => element.removeClass('show');

const openWithExpandElement = (trigger, element) => {
    trigger.attr('aria-expanded', true);
    element.addClass('show');
}

const removeWithExpandElement = (trigger, element) => {
    trigger.attr('aria-expanded', false);
    element.removeClass('show');
}
