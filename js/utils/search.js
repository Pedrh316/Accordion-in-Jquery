
const getSuggests = (text) => suggestsData.filter(suggest => {
    return suggest.toLowerCase().includes(text.toLowerCase());
});

const appendSuggests = (suggests) => {
    const dropdown = $('.search-dropdown');
    dropdown.html('');
    dropdown.append(...suggests.map(suggest => SuggestNode(suggest)));
    $('#main-search .suggest').on('click ', (e) => {
        $('.search-input').val($(e.currentTarget).find('.suggest-text').text());
        removeShow($('.search-dropdown'));
    })
}

const formatSuggest = (suggest, inputValue) => {
    return suggest.replace(new RegExp(inputValue, 'gi'), (str, i) => `<b>${str}</b>`);
}

const updateSuggests = (e) => {
    const inputValue = $(e.target).val();
    const suggests = getSuggests(inputValue);
    return suggests.map(suggest => formatSuggest(suggest, inputValue));
}