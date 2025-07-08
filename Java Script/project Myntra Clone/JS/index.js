let bagItems;
onLoad();

function onLoad(){
    let bagItemsStr = localStorage.getItem('bagItems');
    bagItems = bagItemsStr ? JSON.parse(bagItemsStr) : [];
    displayItemsOnHomePage();
    displayBagIcon();
}

function addToBag(itemId){
    bagItems.push(itemId);
    localStorage.setItem('bagItems', JSON.stringify(bagItems));
    displayBagIcon();
}

function displayBagIcon(){
    let bagItemCountElement = document.querySelector('.bag-item-count');
    if (bagItems.length > 0) {
        bagItemCountElement.style.visibility = 'visible';
        bagItemCountElement.innerText = bagItems.length;  
    } else {
        bagItemCountElement.style.visibility = 'hidden';
    }
    
}

function displayItemsOnHomePage(){
    let itemsContainerElement = document.querySelector('.items-container');
    if(!itemsContainerElement){
        return;
    }

    
let item1 = {
    id: '001',
    image: '/Java Script/project Myntra Clone/images/1.jpg',
    company: 'Carlton London',
    item_name: 'Rhodium-Plated CZ Floral Studs',
    original_price: 1045,
    current_price: 606,
    discount_percentage: 42,
    return_period: 14,
    delivery_date: '10 Oct 2023',
    rating: {
        stars: 4.5,
        count: 1400,
    },
};

let item2 = {
    id:'002',
    image: '/Java Script/project Myntra Clone/images/2.jpg',
    company: 'CUKOO',
    item_name: 'Women Padded Halter Neck Swimming Dress',
    original_price: 2599,
    current_price: 1507,
    discount_percentage: 42,
    return_period: 14,
    delivery_date: '10 Oct 2023',
    rating: {
        stars: 4.3,
        count: 24,
    },
};

let item3 = {
    id: '003',
    image: '/Java Script/project Myntra Clone/images/3.jpg',
    company: 'NUEVOSDAMAS',
    item_name: 'Women Red & White Printed A-Line Knee-Length Skirts',
    original_price: 1599,
    current_price: 495,
    discount_percentage: 69,
    return_period: 14,
    delivery_date: '10 Oct 2023',
    rating: {
        stars: 4.1,
        count: 249,
    },
};

let item4 = {
    id: '004',
    image: '/Java Script/project Myntra Clone/images/4.jpg',
    company: 'ADIDAS',
    item_name: 'Indian Cricket ODI Jersey',
    original_price: 999,
    current_price: 999,
    discount_percentage: 0,
    return_period: 14,
    delivery_date: '10 Oct 2023',
    rating: {
        stars: 5.0,
        count: 10,
    },
};

let item5 = {
    id: '005',
    image: '/Java Script/project Myntra Clone/images/5.jpg',
    company: 'Roadster',
    item_name: 'Pure Cotton T-shirt',
    original_price: 1399,
    current_price: 489,
    discount_percentage: 65,
    return_period: 14,
    delivery_date: '10 Oct 2023',
    rating: {
        stars: 4.2,
        count: 3500,
    },
};

let item6 = {
    id: '006',
    image: '/Java Script/project Myntra Clone/images/6.jpg',
    company: 'Nike',
    item_name: 'Men ReactX Running Shoes',
    original_price: 14995,
    current_price: 14995,
    discount_percentage: 0,
    return_period: 14,
    delivery_date: '10 Oct 2023',
    rating: {
        stars: 0.0,
        count: 0,
    },
};

let item7 = {
    id: '007',
    image: '/Java Script/project Myntra Clone/images/7.jpg',
    company: 'The Indian Garage Co',
    item_name: 'Men Slim Fit Regular Shorts',
    original_price: 1599,
    current_price: 639,
    discount_percentage: 60,
    rating: {
        stars: 4.2,
        count: 388,
    },
};

let item8 = {
    id: '008',
    image: '/Java Script/project Myntra Clone/images/8.jpg',
    company: 'Nivea',
    item_name: 'Men Fresh Deodrant 150ml',
    original_price: 285,
    current_price: 142,
    discount_percentage: 50,
    return_period: 14,
    delivery_date: '10 Oct 2023',
    rating: {
        stars: 4.2,
        count: 5200,
    },
};

itemsContainerElement.innerHTML = `
<div class="item-container">
    <img class="item-image" src="${item1.image}" alt="item image">
    <div class="rating">
    ${item1.rating.stars}⭐ | ${item1.rating.count}
    </div>
    <div class="company-name">${item1.company}</div>
    <div class="item-name">${item1.item_name}</div>
    <div class="price">
        <span class="current-price">${item1.current_price}</span>
        <span class="original-price">${item1.original_price}</span>
        <span class="discount">(${item1.discount_percentage}% OFF)</span>
    </div>
    <button class="btn-add-bag" onclick="addToBag(${item1.id})">Add to Bag</button>
</div>

<div class="item-container">
    <img class="item-image" src="${item2.image}" alt="item image">
    <div class="rating">
    ${item2.rating.stars}⭐ | ${item2.rating.count}
    </div>
    <div class="company-name">${item2.company}</div>
    <div class="item-name">${item2.item_name}</div>
    <div class="price">
        <span class="current-price">${item2.current_price}</span>
        <span class="original-price">${item2.original_price}</span>
        <span class="discount">(${item2.discount_percentage}% OFF)</span>
    </div>
    <button class="btn-add-bag" onclick="addToBag(${item2.id})">Add to Bag</button>
</div>

<div class="item-container">
    <img class="item-image" src="${item3.image}" alt="item image">
    <div class="rating">
    ${item3.rating.stars}⭐ | ${item3.rating.count}
    </div>
    <div class="company-name">${item3.company}</div>
    <div class="item-name">${item3.item_name}</div>
    <div class="price">
        <span class="current-price">${item3.current_price}</span>
        <span class="original-price">${item3.original_price}</span>
        <span class="discount">(${item3.discount_percentage}% OFF)</span>
    </div>
    <button class="btn-add-bag" onclick="addToBag(${item3.id})">Add to Bag</button>
</div>

<div class="item-container">
    <img class="item-image" src="${item4.image}" alt="item image">
    <div class="rating">
    ${item4.rating.stars}⭐ | ${item4.rating.count}
    </div>
    <div class="company-name">${item4.company}</div>
    <div class="item-name">${item4.item_name}</div>
    <div class="price">
        <span class="current-price">${item4.current_price}</span>
        <span class="original-price">${item4.original_price}</span>
        <span class="discount">(${item4.discount_percentage}% OFF)</span>
    </div>
    <button class="btn-add-bag" onclick="addToBag(${item4.id})">Add to Bag</button>
</div>

<div class="item-container">
    <img class="item-image" src="${item5.image}" alt="item image">
    <div class="rating">
    ${item5.rating.stars}⭐ | ${item5.rating.count}
    </div>
    <div class="company-name">${item5.company}</div>
    <div class="item-name">${item5.item_name}</div>
    <div class="price">
        <span class="current-price">${item5.current_price}</span>
        <span class="original-price">${item5.original_price}</span>
        <span class="discount">(${item5.discount_percentage}% OFF)</span>
    </div>
    <button class="btn-add-bag" onclick="addToBag(${item5.id})">Add to Bag</button>
</div>

<div class="item-container">
    <img class="item-image" src="${item6.image}" alt="item image">
    <div class="rating">
    ${item6.rating.stars}⭐ | ${item6.rating.count}
    </div>
    <div class="company-name">${item6.company}</div>
    <div class="item-name">${item6.item_name}</div>
    <div class="price">
        <span class="current-price">${item6.current_price}</span>
        <span class="original-price">${item6.original_price}</span>
        <span class="discount">(${item6.discount_percentage}% OFF)</span>
    </div>
    <button class="btn-add-bag" onclick="addToBag(${item6.id})">Add to Bag</button>
</div>

<div class="item-container">
    <img class="item-image" src="${item7.image}" alt="item image">
    <div class="rating">
    ${item7.rating.stars}⭐ | ${item7.rating.count}
    </div>
    <div class="company-name">${item7.company}</div>
    <div class="item-name">${item7.item_name}</div>
    <div class="price">
        <span class="current-price">${item7.current_price}</span>
        <span class="original-price">${item7.original_price}</span>
        <span class="discount">(${item7.discount_percentage}% OFF)</span>
    </div>
    <button class="btn-add-bag" onclick="addToBag(${item7.id})">Add to Bag</button>
</div>

<div class="item-container">
    <img class="item-image" src="${item8.image}" alt="item image">
    <div class="rating">
    ${item8.rating.stars}⭐ | ${item8.rating.count}
    </div>
    <div class="company-name">${item8.company}</div>
    <div class="item-name">${item8.item_name}</div>
    <div class="price">
        <span class="current-price">${item8.current_price}</span>
        <span class="original-price">${item8.original_price}</span>
        <span class="discount">(${item8.discount_percentage}% OFF)</span>
    </div>
    <button class="btn-add-bag" onclick="addToBag(${item8.id})">Add to Bag</button>
</div>`;
}