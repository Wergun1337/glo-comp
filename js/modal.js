const modalBtn = document.querySelector('.modal__button')
const modal = document.querySelector('.modal')

modalBtn.addEventListener('click', () => {
    modal.style.display = 'flex'
})

modal.addEventListener('click', (event) => {
    const modalContnet = event.target.closest('.modal__inner')
    if(!modalContnet){
        modal.style.display = 'none';
    }
})