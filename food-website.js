const openBtn =document.querySelector('.nav-alt');
const nav = document.querySelector('.nav');
const closeBtn = document.querySelector('.close-nav');
const profileBtn =document.querySelector('.user');
const profile =document.querySelector('.profile');
const closeProfile =document.querySelector('#close-profile');

const walletBtn = document.querySelector('.purse');
const wallet =document.querySelector('.wallet')
const closeWallet =document.querySelector('#close-wallet')


const cartBtn =document.querySelector('.open-cart');
const cart =document.querySelector('.cart')
const closeCart =document.querySelector('#close-cart');


openBtn.onclick =()=>{
    nav.style.display = 'block';

}
closeBtn.onclick =() =>{
    nav.style.display = 'none';
}
profileBtn.onclick=()=>{
    profile.style.display = 'block';
}
closeProfile.onclick =() =>{
    profile.style.display = 'none';
}
cartBtn.onclick =() =>{
    cart.style.display = 'block';
}
closeCart.onclick =() =>{
    cart.style.display = 'none';
}
walletBtn.onclick =() =>{
    wallet.style.display = 'block'
}
closeWallet.onclick =() =>{
    wallet.style.display = 'none'
}