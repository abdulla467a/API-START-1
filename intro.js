//javascript object

const user = { id: 11, name: 'Gorib pola', Job: 'actor'}
const stringified = JSON.stringify(user);

// console.log(user);
// console.log(stringified);

// complex way stringify use kore kaj kora..

const shop ={

    name: 'Arafat store',
    address: 'New market',
    products: ['laptop','Mobile','Smart watch','e-book'],
    profit: 45000,
    owner:{

        name: 'Alim vai', profession: 'businessman'
    },
    isExpensive: false
};
const shopSrp =JSON.stringify(shop);
// console.log(shop);
console.log(shopSrp);


// stringify theke normal way te niye asa..
const converted = JSON.parse(shopSrp);
console.log(converted);