const contents = document.querySelectorAll('.program-line__content');

contents.forEach((elem) => {
    const title = elem.querySelector('.program-line__title')
    const description = elem.querySelector('.program-line__descr')

    title.addEventListener('click', () => {

        contents.forEach((otherElem) => {
        const otherDescription = otherElem.querySelector('.program-line__descr');
        if (otherDescription !== description) {
            otherDescription.classList.remove('active');
        }
        });


        description.classList.toggle('active'); 
    })

})