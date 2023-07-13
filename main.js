const menuEmail = document.querySelector ('.navbar-email');
const desktopMenu = document.querySelector ('.desktop-menu');

const BurgerMenu = document.querySelector ('.menu');
const mobileMenu = document.querySelector ('.mobile-menu');

const menuCarrito = document.querySelector ('.navbar-shopping-cart');
const productMenu = document.querySelector ('.product-detail');
const cardsContainer = document.querySelector ('.cards-container');

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

const productList = [];
productList.push({
    name: 'Bike',
    price: '120',
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
});
productList.push({
    name: 'Computer',
    price: '980',
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
});
productList.push({
    name: 'Keyboard',
    price: '80',
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
});

/* <section class="main-container">
    <div class="cards-container">

      <div class="product-card">
        <img src="https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="">
        <div class="product-info">
          <div>
            <p>$120,00</p>
            <p>Bike</p>
          </div>
          <figure>
            <img src="./icons/bt_add_to_cart.svg" alt="">
          </figure>
        </div>
      </div>
  </section> */

for (product of productList) {
    const productCard = document.createElement ('div');
    productCard.classList.add('product-card');

        const productImg = document.createElement('img');
    productImg.setAttribute('src', product.image);

    const productInfo = document.createElement ('div');
    productInfo.classList.add('product-info');

    const productInfoDiv = document.createElement ('div');

    const productPrice = document.createElement ('p');
    productPrice.innerText = '$' + product.price;

    const productName = document.createElement ('p');
    productName.innerText = product.name;

    productInfoDiv.appendChild(productPrice);
    productInfoDiv.appendChild(productName);

    const productInfoFigure = document.createElement ('figure');
    const productImgCart = document.createElement('img');
    productImgCart.setAttribute('src', './icons/bt_add_to_cart.svg');

    productInfoFigure.appendChild(productImgCart);

    productInfo.appendChild(productInfoDiv);
    productInfo.appendChild(productInfoFigure);

    productCard.appendChild(productImg);
    productCard.appendChild(productInfo);

    cardsContainer.appendChild(productCard);

}