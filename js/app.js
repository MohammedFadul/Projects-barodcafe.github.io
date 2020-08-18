const btn1 = document.querySelector('.btn1')
const btn2 = document.querySelector('.btn2')
const btn3 = document.querySelector('.btn3')
const btn4 = document.querySelector('.btn4')
const btn5 = document.querySelector('.btn5')
const btn6 = document.querySelector('.btn6')


btn1.addEventListener('click' , ()=>{
    window.document.location.href = './order.html?img=images/moca.jpg' + '&drinkname=موكا' + '&price=150SG';
})

btn2.addEventListener('click' , ()=>{
    window.document.location.href = './order.html?img=images/cappuccino.jpg' + '&drinkname=كابتشينو' + '&price=150SG';
})

btn3.addEventListener('click' , ()=>{
    window.document.location.href = './order.html?img=images/express.jpg' + '&drinkname=اكسبريسو' + '&price=170SG';
})

btn4.addEventListener('click' , ()=>{
    window.document.location.href = './order.html?img=images/lati.jpg' + '&drinkname=لاتيه' + '&price=160SG';
})

btn5.addEventListener('click' , ()=>{
    window.document.location.href = './order.html?img=images/turky.jpg' + '&drinkname=تركية' + '&price=120SG';
})

btn6.addEventListener('click' , ()=>{
    window.document.location.href = './order.html?img=images/americano.jpg' + '&drinkname=امريكانو' + '&price=160SG';
})