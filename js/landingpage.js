toggle = docuemnt.getElementById('toggle')


toggle.addEvenetListner('click', () => {
    document.body.classList.toggle('show-nav')
})