console.log('***** Cart Functions *****');
// Make sure to test all functions here in the JS file!
// We want to see how you are testing your code!!!
let basket = ['Eggs', 'Bacon', 'Cereal', 'Chicken', 'Coffee']

function addItem(item) {
    basket.push(item)
    return true;
}

function listItems() {
    let i = 0;
    while (i < basket.length) {
        console.log(basket[i]);
        i++;
    }
}

listItems();
addItem('Turkey');
console.log(basket);

function empty() {
    return basket.length = 0;
}
console.log(empty());
