const buttonOpenModal = document.getElementById('openModal');

const divModalWrapper = document.querySelector('.modal-wrapper');

const removeClassOpen = (()=>{
    divModalWrapper.classList.remove('invisible');
})

buttonOpenModal.addEventListener('click', removeClassOpen)

document.addEventListener('keydown', ((event)=>{
    const isEscKey = event.key === 'Escape';
    if(isEscKey){
        divModalWrapper.classList.add('invisible')
    }
}))