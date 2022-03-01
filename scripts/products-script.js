const toggleFiltersBtn = document.querySelector('#btn-filters')
const asideFilters = document.querySelector('.aside-filters')
const mainProducts = document.querySelector('#main-prdlist')
const priceFilter = document.querySelector('#filter-price')
const priceFilterVal = document.querySelector('#filter-priceval')
const starIcons = document.querySelectorAll('#star-icon')

toggleFiltersBtn.addEventListener('click', () => {
    asideFilters.classList.remove('dis-hidden')
    toggleFiltersBtn.classList.add('dis-hidden')
})

mainProducts.addEventListener('click', () => {
    asideFilters.classList.add('dis-hidden')
    toggleFiltersBtn.classList.remove('dis-hidden')
})

priceFilter.addEventListener('input', (e) => {
    priceFilterVal.innerText = e.target.value
})

starIcons.forEach(starIcon => {
    starIcon.addEventListener('click', (e) => {
        const maxRating = e.target.dataset.value
        starIcons.forEach(star => {
            if(star.dataset.value <= maxRating) {
                star.classList.add('txt-warn')  
            } else {
                star.classList.remove('txt-warn')
                star.classList.add('txt-off-secondary')  
            }
        })
    })
})
