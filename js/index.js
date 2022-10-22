AOS.init();
const modalButton = document.querySelector('.modal_btn')
const modalWindow = document.querySelector('#modal-1')
const phoneBtn = document.querySelector('.phone-button')
const teamCards = document.querySelector('.team')
const teamBtn = document.querySelector('.team_btn')

teamBtn.addEventListener('click', function(){
    teamCards.classList.toggle('active')
    console.log(teamCards)
})
modalButton.addEventListener('click', function(){
    modalWindow.classList.remove('hidden')
    phoneBtn.classList.add('hidden')
})
modalWindow.addEventListener('click', function(){
    modalWindow.classList.add('hidden')
    phoneBtn.classList.remove('hidden')
})

const regBox = document.querySelector('#regBox').addEventListener('click', function(event){
    event.stopPropagation();
})
