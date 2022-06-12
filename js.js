const buyBtns = document.querySelectorAll('.js-buy-ticket')
const model = document.querySelector('.js-model')
const modelContainer = document.querySelector('.js-model-container')
const modelClose = model.querySelector('.js-model-close')

function showBuyTickets(){
    model.classList.add('open')
}

function hideBuyTickets(){
    model.classList.remove('open')
}

for (const buyBtn of buyBtns) {
    buyBtn.addEventListener('click', showBuyTickets)
}
modelClose.addEventListener('click', hideBuyTickets)
model.addEventListener('click', hideBuyTickets)
modelContainer.addEventListener('click', function(e){
    e.stopPropagation();
})