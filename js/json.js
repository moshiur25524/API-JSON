// javaScript object Notation
// JSON

const user = {id: 25, name:'Moshiur Rahman',job: 'actor'};
const stringified = JSON.stringify(user);

// console.log(user);
// console.log(stringified);

const shop = {
    name: 'Moshiur store',
    owner: {name: 'moshiur', profession: 'student'},
    address: 'Baipail',
    profit: 15000,
    products: ['laptop', 'mobile', 'papsi'],
    isExpensive: false
}
const shopStringified = JSON.stringify(shop);
// console.log(shop);
console.log(shopStringified);
const converted = JSON.parse(shopStringified);
console.log(converted);