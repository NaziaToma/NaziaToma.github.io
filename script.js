document.querySelectorAll('.card').forEach(card => {
    card.querySelector('.btn').addEventListener('click', function (event) {
        event.stopPropagation(); // Prevents the card click event when button is clicked
        let collapseElement = this.getAttribute('href');
        let collapseContent = document.querySelector(collapseElement);
        let isShown = bootstrap.Collapse.getInstance(collapseContent) ? bootstrap.Collapse.getInstance(collapseContent).._isShown() : false;
        if (!isShown) {
            new bootstrap.Collapse(collapseContent, {
                toggle: true
            });
        }
    });

    card.addEventListener('click', function () {
        let collapseElement = this.querySelector('.collapse');
        let isShown = bootstrap.Collapse.getInstance(collapseElement) ? bootstrap.Collapse.getInstance(collapseElement)._isShown() : false;
        if (!isShown) {
            new bootstrap.Collapse(collapseElement, {
                toggle: true
            });
        } else {
            bootstrap.Collapse.getInstance(collapseElement).hide();
        }
    });
});
