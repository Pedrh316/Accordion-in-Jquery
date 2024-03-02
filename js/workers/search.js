$(() => {
    
    const search = $("#main-search");
    const mainInput = $("#main-search-input");
    const mainSearchDropdown = $("#main-search #search-suggests");
    const resetInputBtn = $('#reset-main-search-input');
   
    $(mainSearchDropdown).on({
        "keyup":(e) => {
            if(e.key == 'ArrowDown') $(e.target.closest('.suggest')).next().focus();
            if(e.key == 'ArrowUp') $(e.target.closest('.suggest')).prev().focus();
        }
    })

    search.on({
        'focus click keyup': (e) => {
            if (mainInput.val().length == 0) {
                removeWithExpandElement(mainInput, mainSearchDropdown)
                resetInputBtn.removeClass('show');
                return;
            };
            resetInputBtn.addClass('show');
            openWithExpandElement(mainInput, mainSearchDropdown);
            loadMainSearchDropdown();
        },
    }, '.search-input');

    resetInputBtn.on("click", () => {
        mainInput.val('');
        mainInput.trigger('focus');
    })

})