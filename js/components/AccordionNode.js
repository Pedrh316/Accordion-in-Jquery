const AccordionNode = ({ title, description }, step) => `
<article class="accordion">
    <div class="trigger" aria-expanded="false" aria-controls="step-content-${step}">
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
    <div class="content-wrapper" id="step-content-${step}">
        <div class="content">
            <p>${description}</p>
        </div>
    </div>
</article>
`