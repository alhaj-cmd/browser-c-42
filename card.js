const product  = ()  =>{
    const productField  = document.getElementById('productName');
    const productQuatity  = document.getElementById('productQuentity');
    const productF  = productField.value;
    const productQ  = productQuatity.value;
    console.log(productF, productQ)
    addToCart(productF, productQ)
    
}
// product()

const addToCart  = (productF, productQ)  =>{
    const ul  = document.getElementById('product-container');
    const li  = document.createElement('li');
    li.innerText  = `${productF}:${productQ}`
    ul.appendChild(li);
}