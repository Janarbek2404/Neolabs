// Получение общих элементов
const orders = document.querySelector('.orders')
const cart = document.querySelector('.cart-items')
const deleteAllBtn = document.querySelector('#delete-all-btn')
const buyBtn = document.querySelector('#but-btn')

const sortByNameBtn = document.querySelector('.sort-by-name')



// Константа, пишется большими буквами snake_case, редко меняется в течение проекта
const API_URL = 'https://629b451acf163ceb8d16f330.mockapi.io/api/ecommerce-js-course/'

// Массив товаров интернет магазина
let ordersArr = []
let cartArr = []

// Методы запроса
// GET - Получение данных / Чтение
// POST - Создание, отправка данных
// PUT - Обновление данных (id)
// DELETE - Удаление данных (id)

// Статусы коды Запроса
// 200 успешно и тд


let isAscSorting=false
sortByNameBtn.addEventListener('click',() =>{
  const arrowImg = sortByNameBtn.querySelector('img')
  if(isAscSorting){
    ordersArr.sort((a, b)=> {
      if (a.name > b.name) return 1
      if (a.name < b.name) return -1
      return 0;
      // console.log("sort +");
    })
    arrowImg.style.transform = 'rotate(0deg)'
  }
  else{
    ordersArr.sort((a, b)=>{
      if (a.name < b.name) return 1
      if (a.name > b.name) return -1
      return 0;
      // console.log("sort -");
    })
    arrowImg.style.transform = 'rotate(180deg)'
  }
  isAscSorting = !isAscSorting
  // console.log("sort");

  renderOrders(ordersArr)
})





let count = 0
const renderOrders = (fetchedOrders) => {
  // Рисование верстки
  let ordersLayout = ''
  for(let i = 0; i < fetchedOrders.length; i++) {
    ordersLayout += `
    <div class="order" data-orderId='${fetchedOrders[i].id}'>
      <img src="${fetchedOrders[i].img}" alt="" class="order-img">
      <h3 class="order-title">${fetchedOrders[i].name}</h3>
      <button class="button order-btn">В корзину</button>
    </div>
    `
  }
  orders.innerHTML = ordersLayout
    
  //Функционал для кнопок 

  // Массив кнопок добавить в корзину
  const addToCartBtns = document.querySelectorAll('.order-btn')

  // Обращаемся к каждой кнопке и добавляем в корзину при нажатии
  addToCartBtns.forEach(btn => {
    btn.addEventListener('click', (e) => handleClickAddToCart(fetchedOrders, e))
  })
}

const renderCart = (fetchedCart) => {
  if(cart) {
    // Рисование верстки

    let cartLayout = ''
    for(let i = 0; i < fetchedCart.length; i++) {
      cartLayout += `
      <div class="cart-item" data-orderId='${fetchedCart[i].id}'>
        <h3 class="cart-item-title">${fetchedCart[i].name}</h3>
        <div class="cart-actions">
          <button class="button cart-action-btn minus-btn">-</button>
          <p class="cart-item-count">${fetchedCart[i].count}</p>
          <button class="button cart-action-btn plus-btn">+</button>
        </div>
        <button class="button delete-cart-btn">Удалить</button>
      </div>
      `
    }
  
    cart.innerHTML = cartLayout

    // Функционал для кнопок (+, -)
    const cartItems = document.querySelectorAll('.cart-item')

    cartItems.forEach(item => {
      const plusBtn = item.querySelector('.plus-btn')
      const minusBtn = item.querySelector('.minus-btn')
      const deleteBtn = item.querySelector('.delete-cart-btn')

      const countItem = item.querySelector('.cart-item-count')
      const orderId = item.getAttribute('data-orderId')

      plusBtn.addEventListener('click', () => {
        updateCartItem(orderId, countItem.innerHTML, true)
          .then(() => {
            renderCart(cartArr)
          })
      })
      
      minusBtn.addEventListener('click', () => {
        updateCartItem(orderId, countItem.innerHTML, false)
          .then(() => {
            renderCart(cartArr)
          })
      })

      deleteBtn.addEventListener('click',()=>{
        updateCartItem(orderId, countItem.innerHTML, false)
          .then(()=>{
            renderCart(cartArr)
          })
      })
    })
  }
}


// Получение данных смотря какой параметр fetchName мы передали(параметры = order | cart)
// и его рисование в верстке
function fetchItems(fetchName) {
  return fetch(API_URL + fetchName)
    .then((res) => res.json())
    .then((data) => { // Массив данных в data
      if(fetchName === 'orders') {
        renderOrders(data)
        ordersArr = data
      } else if(fetchName === 'cart') {
        renderCart(data)
        cartArr = data
      }
    })
}

// Добавление нового товара в корзину
// вызов этой асинхронной функции возвращает объект нового товара { id, name, count, img }
function addOrderToCart(selectedOrder) {
  return fetch(
    `${API_URL}cart/`, 
    {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify({ ...selectedOrder, count: 1, orderId: selectedOrder.id })
    }
  )
    .then(res => res.json())
    .then(data => {
      console.log('Товар добавлен в корзину')
      fetchItems('cart')

      return data
    })
}

// Обновление товара, увеличение/уменьшение количества товара в корзине
function updateCartItem(id, count, isIncrementing) {
  if(isIncrementing) {
    count++
  } else {
    count--
  }

  // Запрос на изменение товара в корзине
  return fetch(`${API_URL}cart/${id}`, {
    method: 'PUT',
    headers: {
      'Content-type': 'application/json',
    },
    body: JSON.stringify({ count: count })
  })
    .then(res => res.json())
    .then(() => {
      fetchItems('cart')
    })
}

// Функция которая вызывается при нажатии на "В корзину"
function handleClickAddToCart(fetchedOrders, e) {
    count++
    // Поиск нажатых элементов и объектов
    let orderId = e.target.parentElement.getAttribute('data-orderId')
    let selectedOrder = fetchedOrders.find(item => +item.id === +orderId)
    let cartOrderIndex = cartArr.findIndex(item => +item.orderId === +orderId)

    // Добавление если товара нет в корзине
    // Увеличение кол-ва товара если он уже есть в корзине
    if(cartOrderIndex === -1) {
        addOrderToCart(selectedOrder)
    } else {
      updateCartItem(
        cartArr[cartOrderIndex].orderId, 
        cartArr[cartOrderIndex].count, 
        true
      )
    }
}

function deleteCartItem() {
  return fetch(`${API_URL}cart/${id}`, {
    method: "DELETE"
  })
    .then(res => res.json())
    .then(()=> fetchItems('cart'))
}


// Получение данных корзины(на любой странице) 
// и каталога товаров(если мы на странице товаров)
if(orders) {
  fetchItems('orders')
}
fetchItems('cart')



// ==============
// ======



// function array(arr) {    
//     let arr1=arr[0]
//     let arr2=arr[1]
//     let arr3=arr[2]
//     let arr4=arr[3]
//     // [ 0.19, -0.07, 0.38, -0.21, -0.81],
//     // [-0.22,  0.08, 0.11,  0.33, -0.64],
//     // [ 0.51, -0.07, 0.09, -0.11,  1.71],
//     // [ 0.33, -0.41, 0,     0,     -1.21]
//     for (let i = 0; i < 4; i++) {
//         arr1[i]=arr1[i]*100
//         arr2[i]=arr2[i]*100
//         arr3[i]=arr3[i]*100
//         arr4[i]=arr4[i]*100

//         arr1[i]=(arr1[i]/arr1[0])
//         arr2[i]=arr2[i]-arr1[i]*(-22)
//         arr3[i]=arr3[i]-arr1[i]*(51)
//         arr4[i]=arr4[i]-arr1[i]*(33)

//         arr2[i]=arr2[i]/arr2[1]    
//         arr3[i]=arr3[i]-arr2[i]*350.00000000000006
//         arr4[i]=arr4[i]-arr2[i]*190.00000000000003
        
//         arr3[i]=arr3[i]/arr3[2]
//         arr4[i]=arr4[i]-arr3[i]*-162184.00000000003
        
//         arr4[i]=arr4[i]/24523924843.000008
//         arr4[4]=24523924843.000008
//     }
//     for (let j = 0; j < 4; j++) {
//         arr1[j]=Math.round(arr1[j]+arr2[j]*7.99999)

//         arr1[j]=arr1[j]-arr3[j]*5968
//         arr1[j]=Math.round(arr1[j]-arr4[j]*-902273095)
//         arr1[4]=-902273095

//         arr2[j]=arr2[j]-arr3[j]
//         arr3[j]=arr3[j]-arr4[j]*151210.00000000003
//         arr3[4]=151210.00000000003
//         arr1[j]=arr1[j]-arr2[j]
//         arr2[j]=arr2[j]-arr3[j]*846
//         arr2[j]=arr2[j]-arr4[j]*-151639.00000000003
//         arr2[4]=-151639.00000000003


//         arr1[4]=Math.round(arr1[4]/100)
//         arr2[4]=Math.round(arr2[4]/100)
//         arr3[4]=Math.round(arr3[4]/100)
//         arr4[4]=Math.round(arr4[4]/100)
//     }
//     console.log(arr);
// }

// let letArr = [
//     [ 0.19, -0.07, 0.38, -0.21, -0.81],
//     [-0.22,  0.08, 0.11,  0.33, -0.64],
//     [ 0.51, -0.07, 0.09, -0.11,  1.71],
//     [ 0.33, -0.41, 0,     0,     -1.21]

// ];
// array(letArr);


