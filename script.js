const scrollTopBtn = document.querySelector('.scroll-top-btn')
const togglePassword = document.querySelector('#toggle-pass')
const passwordInput = document.querySelector('#pass-input')
const confirmPasswordInput = document.querySelector('#cpass-input')
const cartContainer = document.querySelector('.cart-wrapper')
const cartItemsContainer = document.querySelector('.cart-items-wrapper')
const orderSummaryContainer = document.querySelector('.cart-summary-wrapper')

scrollTopBtn.addEventListener('click', () => {
    window.scrollTo(0,0)
})

if(window.innerWidth <= 500) {
    cartContainer.classList.add('flex-column')
    cartContainer.classList.add('flex-vertical-center')
    cartItemsContainer.classList.remove('cart-items-wrapper')
    cartItemsContainer.style.width = '30rem'
    orderSummaryContainer.classList.add('flex-order-start')
} else {
    cartContainer.classList.remove('flex-column')
    cartContainer.classList.remove('flex-vertical-center')
    cartItemsContainer.style.width = null
    cartItemsContainer.classList.add('cart-items-wrapper')
    orderSummaryContainer.classList.remove('flex-order-start')
}

window.addEventListener('resize', () => {
    if(window.innerWidth <= 500) {
        cartContainer.classList.add('flex-column')
        cartContainer.classList.add('flex-vertical-center')
        cartItemsContainer.classList.remove('cart-items-wrapper')
        cartItemsContainer.style.width = '30rem'
        orderSummaryContainer.classList.add('flex-order-start')
    } else {
        cartContainer.classList.remove('flex-column')
        cartContainer.classList.remove('flex-vertical-center')
        cartItemsContainer.style.width = null
        cartItemsContainer.classList.add('cart-items-wrapper')
        orderSummaryContainer.classList.remove('flex-order-start')
    }   
})

togglePassword.addEventListener('change', () => {
    if(passwordInput.type === 'password') {
        passwordInput.type = 'text'
        confirmPasswordInput.type = 'text' 
    } else {
        passwordInput.type = 'password'
        confirmPasswordInput.type = 'password' 
    }
})