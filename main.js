const menuEmail = document.querySelector ('.navbar-email');
const desktopMenu = document.querySelector ('.desktop-menu');

const BurgerMenu = document.querySelector ('.menu');
const mobileMenu = document.querySelector ('.mobile-menu');

const menuCarrito = document.querySelector ('.navbar-shopping-cart');
const productMenu = document.querySelector ('.product-detail');

menuEmail.addEventListener ('click', toggleDesktopMenu);
BurgerMenu.addEventListener ('click', toggleMobileMenu);
menuCarrito.addEventListener ('click', toggleProductDetail);

function toggleDesktopMenu () {
    const isProductMenuClosed = productMenu.classList.contains('inactive');

    if (!isProductMenuClosed){
        productMenu.classList.add('inactive');

    }
    desktopMenu.classList.toggle('inactive');
}

function toggleMobileMenu () {
    const isProductMenuClosed = productMenu.classList.contains('inactive');

    if (!isProductMenuClosed){
        productMenu.classList.add('inactive');

    }

    mobileMenu.classList.toggle('inactive');
}

function toggleProductDetail () {
    const isMobileMenuClosed = mobileMenu.classList.contains('inactive');
    const isDesktopMenuClosed = desktopMenu.classList.contains('inactive');

    if (!isMobileMenuClosed){
        mobileMenu.classList.add('inactive');

    }

    if (!isDesktopMenuClosed){
        desktopMenu.classList.add('inactive');

    }
    productMenu.classList.toggle('inactive');
}