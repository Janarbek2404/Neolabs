// poluchene obshih elementov
const orders=document.querySelector(".product")
const cart=document.querySelector(".cart-item")
const delAllBtn=document.querySelector("#clear-btn")
const buyBtn=document.querySelector("#but-buy")


// GET poluchenie dannuh/chtenie
// POST cozdanie/otpravka dannyh
// PUT obnovlenie dannuh -(id)
// DELETE   udalenie dannuh - (id)

function fetchItems(fetchName) {
    return fetch('https://629b451acf163ceb8d16f330.mockapi.io/api/ecommerce-js-course/'+ fetchName)
        .then((res)=>res.json())
        .then((data)=>{
        // console.log(data) proverka
        if (fetchName === 'orders') {
            renderOrders(data)
        }
        else if(fetchName === 'orders'){
            renderCart(data)
        }
    })
}


function addOrderToCart(selectedGood) {
    return fetch('https://629b451acf163ceb8d16f330.mockapi.io/api/ecommerce-js-course/cart/', 
    {
        method: 'POST',
        headers: {
            'Content-type': 'application/json',
        },
        body: JSON.stringify({...selectedGood, count: 1 }),

    }
    )
        .then(()=> console.log('tovar dobavlen v korzinu'))

}

function hendleClickAddToCart(fechedOrders, e) {
    count++
    let orderId = e.target.parentElement.parentElement.getAttribute("data-orderId")
    let selectedGood = fechedOrders.find(item=> +item.id === +orderId)
    let cartOrderIndex = fechedOrders.findIndex(item=> +item.id === +orderId)

    if (cartOrderIndex === -1) {
        addOrderToCart(selectedGood)
    }
    else{
        cartArr[cartOrderIndex].count++
    }
}


let count=0

const renderOrders = (fechedOrders) =>{
    let ordersLayout=''
    for (let i = 0; i < fechedOrders.length; i++) {
        ordersLayout +=`
        <div class="product-first" data-orderId="${fechedOrders[i].id}">
            <div class="product-img">
                <img src="${fechedOrders[i].img}" alt="">
            </div>
            <div class="product-title">
                ${fechedOrders[i].name}
            </div>
            <div class="product-basket">
                <button id="but-buy">Buy</button> 
            </div>
        </div>
        `
    }
    orders.innerHTML = ordersLayout

    // Arr knopka ADD
    const addToCartBtns =  document.querySelectorAll('#but-buy')

    // obrashenie kajdoi BUTTON
    addToCartBtns.forEach(btn => {
        btn.addEventListener('click',(e)=> hendleClickAddToCart(fechedOrders, e))
    });
}



const renderCart = (fechedCart) =>{
    let cartLayout= ''
    for (let i = 0; i < fechedCart.length; i++) {
    cartLayout += `
            <div class="product-amount">
                <div class="title"> ${fechedCart[i].name} </div>
                <div class="amount">
                    <button class="minus">-</button>
                    <div class="num">${fechedCart[i].count}</div>
                    <button class="plus">+</button>
                </div>
                <div class="btn">
                    <button class="delete">
                        Delete
                    </button>
                </div>
            </div>
        `
    }
    cart.innerHTML = cartLayout
}




// localStorage

localStorage.setItem

// Arr tovar intepnet magazin
let ordersArr=[]
let cartArr=[]


// console.log(cart); proverka


if(orders) {
   fetchItems('orders')
}
if(cart) {
   fetchItems('cart')
}