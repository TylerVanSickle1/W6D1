const storeItems = [
    {
        name: 'TV',
        price: 800.00,
        inStock: true,
        details: '4K Ultra HD'
    },
    {
        name: 'Phone',
        price: 700.00,
        inStock: false,
        details: '5G'
    },
    {
        name: 'Game Console',
        price: 300.00,
        inStock: true,
        details: 'The latest and greatest'
    },
    {
        name: 'Laptop',
        price: 1200.00,
        inStock: true,
        details: '16GB RAM 1TB SSD'
    },
    {
        name: 'Smart Watch',
        price: 200.00,
        inStock: false,
        details: 'Counts your steps'
    },
    {
        name: 'Headphones',
        price: 100.00,
        inStock: true,
        details: 'Clearest music to be heard'
    },
    {
        name: 'Keyboard',
        price: 100.00,
        inStock: true,
        details: 'Types for you'
    },
    {
        name: 'HDMI Cord',
        price: 100.00,
        inStock: true,
        details: 'HDMI to USB type C'
    },
    {
        name: 'Monitor',
        price: 300.00,
        inStock: true,
        details: '4K Ultra HD'
    },
    {
        name: 'Speaker',
        price: 200.00,
        inStock: true,
        details: 'Clearest music to be heard'
    },
    {
        name: 'Video Game',
        price: 60.00,
        inStock: true,
        details: 'Enjoy for hours'
    },
]
$('div#container').append('<h1></h1>')
$('h1').text("Products");
$('h1').append('<hr style=width:55px;margin-left:0%;margin-top:10px;>');


for (let i = 0; i < storeItems.length; i++) {
    // Check if the item is in stock
    if (storeItems[i].inStock) {
        let paragraph = $('<p>');

        let textStuff = '<span class="price">$' + storeItems[i].price + '</span>' +
            '<span class="name">' + storeItems[i].name + '</span>' +
            '<span class="details">' + storeItems[i].details + '</span>';

        paragraph.html(textStuff);
        $('#container').append(paragraph);
    }
}

