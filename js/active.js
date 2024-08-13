// fun1 bring products id and using source
// fun2 put product into the card
// fun3 remove product from the card 
// fun4 put product into heart bar
// fun5 remove one element form heart bar
// fun6 remove all products from heart bar
// fun7 show element as a popup when click it
// fun8 go to more element page when click banner show more button and replace the product color and number of products of it   


let cart = document.querySelector('.cart');
let searchActive = document.querySelector('.searchActive');
let bxSearch = document.querySelector('.other_icons .fa-search');
let searchInput = document.querySelector('.search');
let heartIcon = document.querySelector('.other_icons .fa-heart');
let hearting = document.querySelector('.hearting');
let heartingContent = document.querySelector('.hearting .heart-content');


let count_item =document.querySelector('.count-item'); 
let price_cart_head = document.querySelector('.price_cart_head');
let count_item_cart = document.querySelector('.count_item_cart');
let price_cart_total = document.querySelector(".price_cart_total");



// Show search filed
bxSearch.onclick = ()=>{
    searchInput.classList.toggle('searchActive');
    hearting.classList.remove('searchActive');
}
// Show heart bar
heartIcon.onclick = ()=>{
    hearting.classList.toggle('searchActive');
    searchInput.classList.remove('searchActive');
}

// open & close cart bar
function open_cart(){
    cart.classList.add('active');
}
function close_cart(){
    cart.classList.remove('active');
}

// heart bar
let Hearting = document.querySelector(".hearting ");
let closeHeart = document.querySelector(".hearting i");
closeHeart.onclick = ()=>{
    Hearting.classList.remove("searchActive")
}




// add items in cord
var all_products_json;   // the data

var items_in_cart = document.querySelector('.item_in_cart'); 
var product_cart = [];


// fun1 products data
function addToCart(id , btn){
    product_cart.push(all_products_json[id]);
    btn.classList.add('active');
    getCartItem();
}

// to put cart at side bar
function getCartItem(){
    let total_price = 0;
    let item_c = '' ;
    for(i=0 ; i < product_cart.length; i++){
        item_c += `
        <div class="item_cart">

            <img src="${product_cart[i].img}" alt=""'>

            <div class="content">

                <h4>${product_cart[i].name}</h4>
                <div class="price_cart">$${product_cart[i].price}</div>

            </div>

            <button onclick='remove_from_cart(${i})' class="delete_item"><i class="fa-solid fa-trash"></i></button>
        </div>
        `
        total_price += product_cart[i].price
    }
    items_in_cart.innerHTML = item_c ; 

    price_cart_head.innerHTML = total_price;
    count_item.innerHTML = product_cart.length ;

    count_item_cart.innerHTML =`${product_cart.length} Item in cart`;
    price_cart_total.innerHTML = "$" + total_price;
}



// remove item from side bar
function remove_from_cart(index){
    product_cart.splice(index , 1);
    getCartItem();

    let addToCartButtons = document.querySelectorAll(".fa-cart-plus");

    for(let i = 0; i < addToCartButtons.length ; i++){

        addToCartButtons[i].classList.remove('active');

        product_cart.forEach(product => {

            if(product.id == i){
                addToCartButtons[i].classList.add('active');
            }
        })
    }    
}


// scroll from bottom to top
let back_to_top = document.querySelector(".back_to_top");
back_to_top.addEventListener('click' , ()=>{
    window.scroll({
        top:0,
        behavior: 'smooth'
    })
})























