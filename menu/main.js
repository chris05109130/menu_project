const menuItems = [

    {
        id:1,
        img:'pancakes.jpg',
        name:"pancakes",
        price:9.99,
        description:'3 Butter Milk Pancakes',
        category:'breakfast'
    },
    {
        id:2,
        img:'eggs.jpg',
        name:"eggs",
        price:4.99,
        description:'Four Cooked Eggs Cooked to Perfection',
        category:'breakfast'
    },
    {
        id:3,
        img:'pizza.png',
        name:"Pizza",
        price:9.99,
        description:'Large pizza with any topping',
        category:'lunch'
    },
    {
        id:4,
        img:'ham.jpg',
        name:"ham",
        price:3.99,
        description:'Side of Ham with your pizza',
        category:'lunch'
    },
    {
        id:5,
        img:'taco.jpeg',
        name:"tacos",
        price:8.99,
        description:'Three Tacos ready for you to eat',
        category:'dinner'
    },
    {
        id:6,
        img:'hot.jpg',
        name:"hot pockets",
        price:9.99,
        description:'Two Frozen Hot Pockets ready to be warmed up and eaten',
        category:'dinner'
    },
]

const menuArea = document.getElementById('menuArea');
const choicesBTN = document.querySelectorAll('.choices');


window.addEventListener('DOMContentLoaded', ()=> {
    loadData(menuItems);


});

choicesBTN.forEach(function(item){
       item.addEventListener('click',(e) => {
            const dataSort = e.target.dataset.id;
            const newCategory = menuItems.filter(function(item){
                    if(item.category === dataSort){
                        return item;
                    }
            })
            if(dataSort === 'all'){
                loadData(menuItems);
            } else if(dataSort === 'breakfast'){
                    loadData(newCategory);
                }else if(dataSort === 'lunch'){
                    loadData(newCategory);
                }else if(dataSort === 'dinner'){
                    loadData(newCategory);
                }
       })
})

function loadData(menuItem){
   let menu = menuItem.map(function(item){
        return ` 
        <div id="container">
        <div class="menuSelect">
        <div class="item">
                <img src="${item.img}" alt="">
            </div>
            <div class="item-info">
                <div class="item-together">
                    <h2>${item.name}</h2>
                    <p>$${item.price}</p>
                </div>
                
                <p>${item.description}</p>
                <p>${item.category.toUpperCase()}</p>

            </div> 
        </div>
        </div>
                
        `
 

})
   menu = menu.join("");
   menuArea.innerHTML = menu;
   }
