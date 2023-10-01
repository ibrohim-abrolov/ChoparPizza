// const userId = localStorage.getItem("user_id");
// const users = JSON.parse(localStorage.getItem("users"));
// const foundUser = users.find(item => item.id == userId);
const elLocation = document.querySelector(".site-header__location");
const elPhoneNum = document.querySelector(".site-header__tel");
const elSelect = document.querySelector(".site-header__select");
const elMenuBtn = document.querySelector(".site-header__menu");
const elNavigation = document.querySelector(".nav");
const elMain = document.querySelector(".site-main");
const elList = document.querySelector(".hero__list");
const badgeElement = document.querySelector(".badge-element");
const elModalList = document.querySelector(".modal-list");
const pizzaFragment = document.createDocumentFragment();

const pizzaFood = [
    {
        id: 1,
        pizza_img: "./images/quvvat.webp",
        pizza_name: "QUVVAT",
        pizza_recipe: "Maxsus tomatli sous, Motsarella pishlog'i, toy go'shti, limon, zaytun",
        pizza_price: "88 000",
        pizza_count: 0,
    },
    {
        id: 2,
        pizza_img: "./images/ovchi.webp",
        pizza_name: "OVCHI",
        pizza_recipe: "Maxsus tomatli sous, Motsarella pishlog'i, Ovchi kolbasalari, shampinyon qo'ziqorinlari, qizil va yashil bulg'or qalampiri, pomidor bo'lakchalari",
        pizza_price: "72 000",
        pizza_count: 0,
    },
    {
        id: 3,
        pizza_img: "./images/pepperoni.webp",
        pizza_name: "IKKI KARRA PEPPERONI",
        pizza_recipe: "Maxsus pomidor sousi, mozzarella pishloq, undan ham ko'proq dudlangan kolbasa",
        pizza_price: "72 000",
        pizza_count: 0,
    },
    {
        id: 4,
        pizza_img: "./images/choparSpecial.webp",
        pizza_name: "CHOPAR SPECIAL",
        pizza_recipe: "Ikki qavatli pitsa 35 sm Maxsus tomatli sous, Motsarella pishlog‘i, dudlangan mol go‘shti, mol go‘shti qiymasi, pomidor",
        pizza_price: "109 000",
    },
    {
        id: 5,
        pizza_img: "./images/julyen.webp",
        pizza_name: "JULYEN",
        pizza_recipe: "Maxsus oq sous, Mozzarella pishloq, tovuq filesi, shampinyon qo'ziqorinlari, ukrop",
        pizza_price: "70 000",
        pizza_count: 0,
    },
    {
        id: 6,
        pizza_img: "./images/pishloqli.webp",
        pizza_name: "PISHLOQLI",
        pizza_recipe: "Maxsus pomidor sousi, mozzarella pishloq",
        pizza_price: "60 000",
        pizza_count: 0,
    },
    {
        id: 7,
        pizza_img: "./images/rostbif.webp",
        pizza_name: "ROSTBIF",
        pizza_recipe: "Maxsus pomidor sousi, mozzarella pishloqi, mol go'shti, quritilgan pomidor, rukkola, qizil piyoz",
        pizza_price: "80 000",
        pizza_count: 0,
    },
    {
        id: 8,
        pizza_img: "./images/bayram.webp",
        pizza_name: "BAYRAM",
        pizza_recipe: "Maxsus pomidor sousi, mozzarella pishloqi, go'sht aralashmasi( mol go'shti, qo'zichoq), qizil piyoz, zaytun, rayhon.",
        pizza_price: "94 000",
        pizza_count: 0,
    },
    {
        id: 9,
        pizza_img: "./images/barbeku.webp",
        pizza_name: "BARBEKYU",
        pizza_recipe: "Maxsus pomidor sousi, mozzarella pishloq, mol go'shti kotleti, pomidor, qizil piyoz, tuzlangan bodring",
        pizza_price: "76 000",
        pizza_count: 0,
    },
    {
        id: 10,
        pizza_img: "./images/tovuqli.webp",
        pizza_name: "TOVUQLI",
        pizza_recipe: "Maxsus tomatli sous, mozzarella pishloq, tovuq filesi, shampinyon, pomidor, barbekyu sousi",
        pizza_price: "70 000",
        pizza_count: 0,
    },
    {
        id: 11,
        pizza_img: "./images/qoziqorinli.webp",
        pizza_name: "QOZIQORINLI",
        pizza_recipe: "Maxsus pomidor sousi, Mozzarella pishloqi, shampinyon qo'ziqorinlari, maydalangan qora qalampir",
        pizza_price: "70 000",
        pizza_count: 0,
    },
    {
        id: 12,
        pizza_img: "./images/gavayi.webp",
        pizza_name: "GAVAYI",
        pizza_recipe: "Maxsus oq sous, Mozzarella pishloq, tovuq filesi, dudlangan kurka, qora zaytun, konservalangan ananas",
        pizza_price: "70 000",
        pizza_count: 0,
    },
    {
        id: 13,
        pizza_img: "./images/xonPitsa.webp",
        pizza_name: "XON PITSA",
        pizza_recipe: "Maxsus pomidor sousi, mozzarella pishloq, qazi, qizil piyoz",
        pizza_price: "92 000",
        pizza_count: 0,
    },
    {
        id: 14,
        pizza_img: "./images/goshtli.webp",
        pizza_name: "GOSHTLI",
        pizza_recipe: "Maxsus pomidor sousi, mozzarella pishloqi, mol go‘shti, tovuq filesi, qizil va yashil bulg‘or qalampiri, pomidor",
        pizza_price: "84 000",
        pizza_count: 0,
    },
    {
        id: 15,
        pizza_img: "./images/kombo.webp",
        pizza_name: "KOMBO",
        pizza_recipe: "Maxsus oq sous, mozzarella pishloq, dudlangan kolbasa, dudlangan kurka, qo'ziqorin, qizil va yashil bulg'or qalampiri, pomidor, zaytun",
        pizza_price: "76 000",
        pizza_count: 0,
    },
    {
        id: 16,
        pizza_img: "./images/margarita.webp",
        pizza_name: "MARGARITA",
        pizza_recipe: "Maxsus oq sous, mozzarella pishloq, pomidor",
        pizza_price: "62 000",
        pizza_count: 0,
    },
    {
        id: 17,
        pizza_img: "./images/pepperoniLast.webp",
        pizza_name: "PEPPERONI",
        pizza_recipe: "Maxsus pomidor sousi, mozzarella pishloq, dudlangan kolbasa",
        pizza_price: "72 000",
        pizza_count: 0,
    },
];
const food_orders = JSON.parse(localStorage.getItem("orders")) || [];
localStorage.setItem("orders", JSON.stringify(food_orders));

// Render and creating elements in it
function renderPizza(data, node) {
    elList.innerHTML = "";
    for(let item of data) {

        // Creating elements
        const liElement = document.createElement("li");
        const imgElement = document.createElement("img");
        const titleElement = document.createElement("h3");
        const textboxElement = document.createElement("div");
        const textElement = document.createElement("p");
        const divElement = document.createElement("div");
        const btnElement = document.createElement("button");
        const priceElement = document.createElement("strong");

        // Adding classlists
        liElement.classList.add("hero__items", "border-warning");
        imgElement.classList.add("hero__img", "mt-3", "mb-4");
        titleElement.classList.add("hero__title");
        textboxElement.classList.add("hero__textbox");
        textElement.classList.add("hero__text");
        divElement.classList.add("hero__wrapper", "d-flex", "justify-content-between", "align-items-center", "mb-3");
        btnElement.classList.add("hero__btn", "order-btn", "bg-warning", "border-0");
        priceElement.classList.add("hero__price");

        // Adding text contents
        imgElement.setAttribute("src", item.pizza_img);
        imgElement.setAttribute("alt", item.pizza_name);
        titleElement.textContent = item.pizza_name;
        textElement.textContent = item.pizza_recipe;
        btnElement.textContent = "Savatga";
        btnElement.dataset.id = item.id;
        priceElement.textContent = `${item.pizza_price}so'm`;

        // Appending elements
        divElement.append(btnElement, priceElement);
        textboxElement.append(textElement);
        liElement.append(imgElement, titleElement, textboxElement, divElement);
        pizzaFragment.appendChild(liElement);
    };
    node.append(pizzaFragment);
};
renderPizza(pizzaFood, elList);

// Assigning savatga btn and pushing to the new array
elList.addEventListener("click", (evt) => {
    if(evt.target.matches(".order-btn")) {
        const btnId = evt.target.dataset.id;
        const foundPizza = pizzaFood.find((item) => item.id == btnId);

        const checkOrder = food_orders.find((item) => item.id == btnId);
        if(!checkOrder) {
            food_orders.push(foundPizza);
            localStorage.setItem("orders", JSON.stringify(food_orders));
        }
        badgeElement.textContent = `${food_orders.length}+`;
        renderOrders(food_orders);
    }
});

// Adding and subtracting conditions
let counter = 1;
elModalList.addEventListener("click", (evt) => {
    if(evt.target.matches(".plus-btn")) {
        ++counter;
        renderOrders(food_orders);
    }
    if(evt.target.matches(".minus-btn")) {
        --counter;
        renderOrders(food_orders);
    }
    if(evt.target.matches(".delete-order")) {
        const btnId = evt.target.dataset.id;
        const foundOrder = food_orders.find((item) => item.id == btnId);
        food_orders.splice(foundOrder, 1);
        renderOrders(food_orders);
    }
});

// Working with modal
function renderOrders(data) {
    elModalList.innerHTML = "";
    for(let order of data) {
        console.log(data);
        // Creating the elements
        const modalLiElement = document.createElement("li");
        const pizzaName = document.createElement("h3");
        const pizzaPrice = document.createElement("p");
        const countWrapper = document.createElement("div");
        const countPlus = document.createElement("button");
        const countMinus = document.createElement("button");
        const countElement = document.createElement("span");
        const deleteBtn = document.createElement("button");

        // Adding classlists
        modalLiElement.classList.add("d-flex", "align-items-center", "column-gap-3", "column-gap-xl-4");
        pizzaName.classList.add("pizza-name");
        pizzaPrice.classList.add("pizza-price");
        countWrapper.classList.add("d-flex", "align-items-center");
        countMinus.classList.add("btn", "minus-btn");
        countPlus.classList.add("btn", "plus-btn");
        deleteBtn.classList.add("btn", "btn-close", "delete-order");

        // Adding textContents
        pizzaName.textContent = order.pizza_name;
        pizzaPrice.textContent = order.pizza_price;
        countMinus.textContent = "-";
        countPlus.textContent = "+";
        countElement.textContent = counter;
        deleteBtn.dataset.id = order.id;

        // Appending
        countWrapper.append(countMinus, countElement, countPlus);
        modalLiElement.append(pizzaName, pizzaPrice, countWrapper, deleteBtn);
        elModalList.append(modalLiElement);
    };
};

const elFinishOrder = document.querySelector(".finish-order");

elFinishOrder.addEventListener("click", () => {
    const result = food_orders.map((item) => {
        return (item.pizza_count == counter);
    });
    foundUser.user_orders = food_orders;
});

elMenuBtn.addEventListener("click", (evt) => {
    evt.preventDefault();
    elLocation.classList.add("visually-hidden");
    elPhoneNum.classList.add("visually-hidden");
    elSelect.classList.add("visually-hidden");
    elMain.classList.add("visually-hidden");
    elNavigation.style.display = "block";
});