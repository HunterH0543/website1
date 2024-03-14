open = document.querySelectorAll('.link')

open.forEach(link => {
    link.addEventListener('mouseover', () => {
        removeActiveClasses()
        link.classList.add('active')
    })
})
