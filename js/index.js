open = document.querySelectorAll('link')

open.forEach(link => {
    link.addEventListener('click', () => {
        window.open('https://hunterh0543.github.io/website1/search.html', '_blank');
        window.open('https://hunterh0543.github.io/website1/navigation.html', '_blank');
        window.open('https://hunterh0543.github.io/website1/loading.html', '_blank');
        window.open('https://hunterh0543.github.io/website1/gallery.html', '_blank');
        window.open('https://hunterh0543.github.io/website1/landingpage.html', '_blank');
        window.open('https://hunterh0543.github.io/website1/sound.html', '_blank');
    })
})