toggle = docuemnt.getElementById('toggle')
open = document.getElementById('open')
modal = document.getElementById('modal')


toggle.addEvenetListner('click', () => {
    document.body.classList.toggle('show-nav')
})

open.addEventListener('click', () => {
    modal.classList.add('show-modal')
})