
const getSuggests = async (text) => {
    const data = await new Promise((resolve, reject) => { resolve(suggestsData) }); // simulation
    return data.filter(suggest => {
        return suggest.toLowerCase().includes(text.toLowerCase());
    });
}

const appendSuggests = (suggests) => {
    const dropdown = $('.search-dropdown');
    dropdown.html('<ul></ul>');
    dropdown.find('ul').append(...suggests.map(suggest => SuggestNode(suggest)));
    $('#main-search .suggest').on('click keyup', (e) => {
        if(e.type == "keyup" && e.key != "Enter") return;
        $('.search-input').val($(e.currentTarget).find('.suggest-text').text());
        removeShow(dropdown);
    })
}

const formatSuggest = (suggest, inputValue) => {
    return suggest.replace(new RegExp(inputValue, 'gi'), (str, i) => `<b>${str}</b>`);
}

const updateSuggests = async (inputValue) => {
    return getSuggests(inputValue).then((suggests) => suggests.map(suggest => formatSuggest(suggest, inputValue)));
}

const loadMainSearchDropdown = () => {
    const mainSearchDropdown = $("#main-search #search-suggests");
    mainSearchDropdown.html(Loading);
    mainSearchDropdown.attr('aria-busy', true);
    (async () => {
        const suggests = await updateSuggests(mainInput.val());
    (suggests.length == 0) ?
    mainSearchDropdown.html('<div class="item"><p class="container">Dado não encontrado...</p></div>')
    : appendSuggests(suggests);
    mainSearchDropdown.find('.loading').remove();
    mainSearchDropdown.attr('aria-busy', false);
    })()
}