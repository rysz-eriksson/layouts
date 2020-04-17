// mark the current section viewed in the navigation

const observer = new IntersectionObserver((entries) => {
    for (let entry of entries) {
        let selector = `a[href="#${entry.target.id}"]`
        let link = document.querySelector(selector)
        if (entry.isIntersecting) {
            link.classList.add('active')
        } else {
            link.classList.remove('active')
        }
    }
}, {threshold: [0.5]} )

document.querySelectorAll('section').forEach((item) => {
    observer.observe(document.querySelector(`#${item.id}`))
})
