open = document.querySelectorAll('.link')

open.forEach(link => {
    link.addEventListener('click', (url) => {
        openInNewTab('http://127.0.0.1:5500/website1/search.html')
        openInNewTab('http://127.0.0.1:5500/website1/gallery.html')
        openInNewTab('http://127.0.0.1:5500/website1/sound.html')
        openInNewTab('http://127.0.0.1:5500/website1/loading.html')
        openInNewTab('http://127.0.0.1:5500/website1/navigation.html')
        openInNewTab('http://127.0.0.1:5500/website1/landingpage.html')
    })
})

function openInNewTab(url) {
    window.open(url, '_blank').focus();
}