toggle = docuemnt.getElementById('toggle')
open = document.getElementById('open')
modal = document.getElementById('modal')
close = document.getElementById('close')


toggle.addEvenetListner('click', () => {
    document.body.classList.toggle('show-nav')
})

open.addEventListener('click', () => {
    modal.classList.add('show-modal')
})

close.addEventListener('click', () => {
    modal.classList.remove('show-modal')
})

window.addEventListener('click', (e) => {
    if (e.target == modal) {
        model.classList.remove('show-modal')
    }
})