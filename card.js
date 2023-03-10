const product  = ()  =>{
    const productField  = document.getElementById('productName');
    const productQuatity  = document.getElementById('productQuentity');
    const productF  = productField.value;
    const productQ  = productQuatity.value;
    console.log(productF, productQ)
    addToCart(productF, productQ)
    saveProductLocalStorage(productF, productQ)
    
}
// product()

const addToCart  = (productF, productQ)  =>{
    const ul  = document.getElementById('product-container');
    const li  = document.createElement('li');
    li.innerText  = `${productF}:${productQ}`
    ul.appendChild(li);
}

const getStoredShoppingCart = () => {
    const storeCart = localStorage.getItem('cart');
    let cart ={};
    if(storeCart){
        cart = JSON.parse(storeCart);
    }
    return cart

}


const saveProductLocalStorage = (productF, productQ) =>{
    const cart =  getStoredShoppingCart();
    cart[productF] = productQ;
    const cartStringified =  JSON.stringify(cart);
    localStorage.setItem('cart', cartStringified)

}

const displayProductsFromLocalStorage =  () =>{
    const  savedCart =  getStoredShoppingCart();
    console.log(savedCart);
    for(const productF in savedCart){
        const productQ = savedCart[productF];
        console.log(productQ)
        console.log(productF);
        addToCart(productF, productQ)
    }
}
displayProductsFromLocalStorage ()