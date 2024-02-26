const AccordionNode = ({ title, description }, step) => `
<article class="accordion">
    <div class="trigger">
        <div class="ball">
            <p>${step}</p>
        </div>
        <div class="content">
            <h3 class="title">${title}</h3>
            <div class="chevron"></div>
        </div>
    </div>
    <div class="content">
        <p>${description}</p>
    </div>
</article>
`