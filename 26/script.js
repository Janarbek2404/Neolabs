// Burger menu

const burgerBtn=document.querySelector("#burger-btn")
const burgerNav=document.querySelector("#burger-nav")

burgerBtn.addEventListener("click",()=>{
    if(burgerNav.classList.contains("opened")){
        burgerNav.classList.remove("opened")
    } else {
        burgerNav.classList.add("opened")
    }
})


// Typing Text

const typingText=document.querySelector('#typing-text')

const text="LFBHERVKSDBJLACSKDLLK;NSJKBVSBKJDSLVNLKD"
let index=0
const typeText=()=>{
    typingText.innerHTML=text.slice(0, index)

    index++
    if(index>text.length){
        index=0
    }

}

setInterval(typeText,200)
////model-btn

const openModalBtn=document.querySelector('#modal-btn')
const clouseModalBtn=document.querySelector('#close-modal-btn')
const modal=document.querySelector('.modal-overview')

openModalBtn.addEventListener('click',()=>{
    modal.style.display='flex'
})


clouseModalBtn.addEventListener('click',()=>{
    modal.style.display='none'
})


//     <!-- TOASTER -->

const toasterBtn=document.querySelector('#toaster-btn')
const toasterContent=document.querySelector('.toaster-content')

toasterBtn.addEventListener('click',()=>{
    const toasterMag=document.createElement('div')
    toasterMag.classList.add('toaster-msg')
    toasterMag.innerHTML='zapros uspeshno otpravlen!'
    toasterContent.append(toasterMag)


    setTimeout(()=>{
        toasterMag.remove()
    },2000)
})

// img slider============

const slider=document.querySelector('.slider-imgs')
const imgs=document.querySelectorAll('.slider img')
const prev=document.querySelector('#slider-prev-btn')
const next=document.querySelector('#slider-next-btn')



let index3=1
slider.style.transform=`translateX(${-index3 * 200}px)`;

const slideImage=(direction=1)=>{
    if(direction===1){
        slider.style.transition='all 0.3s linear'
        index3++
        // console.log("right")
    }
    else{
        slider.style.transition='all 0.3s linear'
        index3--
        // console.log("left")
    }
    
    slider.style.transform=`translateX(${-index3 * 200}px)`;
    
}

prev.addEventListener('click',()=>{
    slideImage(0)
})

next.addEventListener('click',()=>{
    slideImage(1)
})

slider.addEventListener('transitionend',()=>{
    if(index3>imgs.length-2){
        slider.style.transition='none'
        index3=1
        slider.style.transform=`translateX(${-index3 * 200}px)`;
    }
    else if(index3<1){
        slider.style.transition='none'
        index3=imgs.length-2
        slider.style.transform=`translateX(${-index3 * 200}px)`;
    }
})

// setInterval(slideImage,2000)



// cart

const goodsAll=[
    {
        id: 1,
        name: 'Парты',
    },
    {
        id:2,
        name: 'Стулья',
    },
    {
        id:3,
        name: 'Ноутбук',
    },
    {
        id:4,
        name: 'Окна',
    },
]


const goods =document.querySelector('#goods')
const cart =document.querySelector('#cart')

goodsAll.forEach(item=>{
    const goodLayout =`
        <div class='good-item'> 
            <p>${item.name}</p>
            <button id='add-cart-btn' data-good='${item.id}'>
                Add
            </button>
        </div>
    `
    goods.innerHTML += goodLayout
})

const addCartBtns= document.querySelectorAll('#add-cart-btn')

const clearBtn = document.querySelector('.clear-btn')

let cartArr=[]

let cartItemIndex =0

const renderCart = ()=>{
    const cartsLayout= cartArr.map((item, index) =>{
        return `
        <div class='cart-item' data-cartItemId='${item.id}'>
            <button class='decrement-cart-item-btn'>-</button>
            <p> ${item.name} ${item.count}x</p>
            <button class='delete-cart-btn' data-cart='${item.cartItemIndex}'>Del</button>
        </div>
        `
    })
    cart.innerHTML = cartsLayout.join('')

    const deleteCartItemBtns = document.querySelectorAll('.delete-cart-btn')

    deleteCartItemBtns.forEach(item=>{
        item.addEventListener('click',()=>{
            let cartItemId=item.getAttribute('data-cart')
            // console.log(cartItemId)
            cartArr = cartArr.filter(cartItem => {
                return Number(cartItem.cartItemIndex) !==Number(cartItemId)
            })
            // console.log(cartArr)
            renderCart()
        })
    })

    const decrementCartItemBtns = document.querySelectorAll('.decrement-cart-item-btn')
    decrementCartItemBtns.forEach(btn=>{
        btn.addEventListener('click',(event)=>{
            let cartItemId = event.target.parentElement.getAttribute('data-cartItemId')
            let cartGoodIndex = cartArr.findIndex(g=>+g.id=== +cartItemId)
            
            if(cartArr[cartGoodIndex].count>1){
                cartArr[cartGoodIndex].count--
                
            }
            renderCart()
        })
    })

}


addCartBtns.forEach(item=>{
    item.addEventListener('click', ()=>{
        cartItemIndex++
        let goodId=item.getAttribute('data-good')
        let selectedGood = goodsAll.find(g=>+g.id===+goodId)
        let cartGoodIndex = cartArr.findIndex(g=>+g.id===+goodId)
        // console.log(cartGoodIndex)
        if(cartGoodIndex === -1){
            cartArr.push({...selectedGood, cartItemIndex: cartItemIndex, count: 1})
        }else{
            cartArr[cartGoodIndex].count++
        }

        renderCart()
        
    })
})

// сделать кнопку "Удалить всё"
// cartArr


clearBtn.addEventListener('click',()=>{
    cartArr = []
    renderCart()
})
    




















