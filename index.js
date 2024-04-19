let listItem = [
    {
        name: 'iPhone 13',
        img: 'https://cdn2.cellphones.com.vn/insecure/rs:fill:358:358/q:90/plain/https://cellphones.com.vn/media/catalog/product/i/p/iphone-13_2_.png',
        actualPrice: '18.990.000đ',
        salePrice: '13.590.000đ',
        description: 'Apple A15'
    },
    {
        name: 'iPhone 15 Pro Max',
        img: 'https://cdn2.cellphones.com.vn/insecure/rs:fill:358:358/q:90/plain/https://cellphones.com.vn/media/catalog/product/i/p/iphone-15-pro-max_3.png',
        actualPrice: '34.990.000đ',
        salePrice: '29.490.000đ',
        description: 'Apple A17 Pro 6 nhân'
    },
    {
        name: 'Samsung Galaxy S23',
        img: 'https://cdn2.cellphones.com.vn/insecure/rs:fill:358:358/q:90/plain/https://cellphones.com.vn/media/catalog/product/s/a/samsung-s23-ulatra_2__1.png',
        actualPrice: '31.990.000đ',
        salePrice: '21.990.000đ',
        description: 'Snapdragon 8 Gen 2 (4 nm)'
    },
    {
        name: 'Samsung Galaxy S24',
        img: 'https://cdn2.cellphones.com.vn/insecure/rs:fill:358:358/q:90/plain/https://cellphones.com.vn/media/catalog/product/s/s/ss-s24-ultra-xam-222.png',
        actualPrice: '33.990.000đ',
        salePrice: '26.390.000đ',
        description: 'Snapdragon 8 Gen 3'
    },
    {
        name: 'OPPO Reno11 F 5G',
        img: 'https://cdn2.cellphones.com.vn/insecure/rs:fill:358:358/q:90/plain/https://cellphones.com.vn/media/catalog/product/o/p/oppo-reno-11-f-xanh-2.png',
        actualPrice: '8.990.000đ',
        salePrice: '8.390.000đ',
        description: 'Mediatek Dimensity 7050'
    },
    {
        name: 'iPhone 15',
        img: 'https://cdn2.cellphones.com.vn/insecure/rs:fill:358:358/q:90/plain/https://cellphones.com.vn/media/catalog/product/i/p/iphone-15-plus_1__1.png',
        actualPrice: '22.990.000đ',
        salePrice: '26.390.000đ',
        description: 'Apple A16 Bionic 6 nhân'
    },
    {
        name: 'Apple MacBook Air M1 256GB 2020',
        img: 'https://cdn2.cellphones.com.vn/insecure/rs:fill:358:358/q:90/plain/https://cellphones.com.vn/media/catalog/product/a/i/air_m2.png',
        actualPrice: '22.990.000đ',
        salePrice: '18.490.000đ',
        description: 'GPU 7 nhân'
    },
    {
        name: 'Macbook Air M3 13 inch 2024 8GB - 256GB',
        img: 'https://cdn2.cellphones.com.vn/insecure/rs:fill:358:358/q:90/plain/https://cellphones.com.vn/media/catalog/product/a/p/apple_m3_slot.png',
        actualPrice: '27.990.000đ',
        salePrice: '27.990.000đ',
        description: 'GPU 8 Lõi'
    },
    {
        name: 'Apple Macbook Air M2 2022 8GB 256GB',
        img: 'https://cdn2.cellphones.com.vn/insecure/rs:fill:358:358/q:90/plain/https://cellphones.com.vn/media/catalog/product/m/a/macbook_air_m2_1_1.png',
        actualPrice: '32.990.000đ',
        salePrice: '24.790.000đ',
        description: '8 nhân GPU'
    },
    {
        name: 'Laptop ASUS Zenbook 14 OLED',
        img: 'https://cdn2.cellphones.com.vn/insecure/rs:fill:358:358/q:90/plain/https://cellphones.com.vn/media/catalog/product/t/e/text_d_i_1__1_3.png',
        actualPrice: '24.990.000đ',
        salePrice: '20.490.000đ',
        description: 'AMD Radeon Graphics'
    },
    {
        name: 'iMac M3 24 inch 8GB 256GB 8GPU',
        img: 'https://cdn2.cellphones.com.vn/insecure/rs:fill:358:358/q:90/plain/https://cellphones.com.vn/media/catalog/product/m/a/macbook_2.png',
        actualPrice: '36.990.000đ',
        salePrice: '35.990.000đ',
        description: 'GPU 8 lõi'
    },
    {
        name: 'Laptop Lenovo LOQ 15IAX9 83GS001RVN',
        img: 'https://cdn2.cellphones.com.vn/insecure/rs:fill:358:358/q:90/plain/https://cellphones.com.vn/media/catalog/product/l/a/laptop-lenovo-loq-15iax9-83gs001rvn-thumbnails_1.png',
        actualPrice: '22.490.000đ',
        salePrice: '19.890.000đ',
        description: 'Intel UHD Graphics'
    }
];

createProductList(listItem);

function createProductList(listItem) {
    const parentElement = document.getElementById('product-list');

    parentElement.style.display = 'flex';
    parentElement.style.flexWrap = 'wrap';
    parentElement.style.justifyContent = 'space-between';

    parentElement.innerHTML = '';

    listItem.map(item => {
        const div = document.createElement('div');

        div.style.width = '200px';
        div.style.margin = '10px';
        div.style.padding = '10px';
        div.style.border = '1px solid black';
        div.style.borderRadius = '20px';
        div.style.boxShadow = '0px 0px 10px rgba(0, 0, 0, 0.5)';
        div.style.transition = '0.3s';

        div.onmouseover = function() {
            this.style.transform = 'scale(1.1)';
        };

        div.onmouseout = function() {
            this.style.transform = 'scale(1)';
        };

        const priceDiv = document.createElement('div');
        priceDiv.style.display = 'flex';
        priceDiv.style.justifyContent = 'space-between';

        priceDiv.innerHTML = `
            <p style="color: red; font-weight: bold;">${item.salePrice}</p>
            <p style="text-decoration: line-through;">${item.actualPrice}</p>
        `;

        div.innerHTML = `
            <img src="${item.img}" alt="${item.name}" style="width: 50%; margin: 0 auto; display: block;" />
            <h3>${item.name}</h3>
        `;

        div.appendChild(priceDiv);
        const descriptionDiv = document.createElement('div');
        descriptionDiv.style.display = 'flex';
        descriptionDiv.style.justifyContent = 'space-between';
        descriptionDiv.style.border = '1px solid grey'; 
        descriptionDiv.style.paddingLeft = '10px'; 
        descriptionDiv.style.paddingRight = '10px'; 
        descriptionDiv.style.marginTop = '10px'; 
        descriptionDiv.style.backgroundColor = '#D3D3D3'; 
        descriptionDiv.style.borderRadius = '10px';
        descriptionDiv.innerHTML = `<p>${item.description}</p>`;
        div.appendChild(descriptionDiv);
        
        parentElement.appendChild(div);
    });
}