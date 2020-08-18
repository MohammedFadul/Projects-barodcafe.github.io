const add = document.querySelector('.add');
const mins = document.querySelector('.mins');
const counter = document.querySelector('.counter');

// ORDER COUNTER
let c = 1;
add.addEventListener('click' , ()=>{
  counter.textContent = ++c;
})
mins.addEventListener('click' , ()=>{
   if(c > 1){
    counter.textContent = --c;
   }else{
       c = 1;
   }
  })



const drinkImg = document.querySelector('.drinkCont img');
const drink = document.querySelector('.drinkCont .drink');
const price = document.querySelector('.drinkCont .price');
const drinktitle = document.querySelector('.orderCont .drinkTitle');




const params =  (new URL(document.location)).searchParams;
const img  = params.get('img');
const drinkName = params.get('drinkname');
const priceurl = params.get('price');
const drinktitleurl = params.get('drinkname');



drinkImg.src = img;
drink.textContent = drinkName;
price.textContent = priceurl;
drinktitle.textContent = drinktitleurl;
