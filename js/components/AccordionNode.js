const AccordionNode = ({ title, description }, step) => `
<article class="accordion" tabindex="0">
    <div class="trigger">
        <div class="ball">
            <p>${step}</p>
        </div>
        <div class="separator" style="flex-grow:1; align-items:center">
            <div class="content">
                <h3 class="title">${title}</h3>
            </div>
            <div class="right">
                <div class="icon-wrapper rotatable">
                    <i class="fa-solid fa-chevron-right"></i>
                </div>
            </div>
        </div>
    </div>
    <div class="content-wrapper">
        <div class="content">
            <p>${description}</p>
        </div>
    </div>
</article>
`