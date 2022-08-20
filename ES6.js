//Bai 1
var nhu = {
    name:"Tran Mai Hanh Nhu",
    age:"16",
    address:"4/40, duong song hanh, phuong Tan Hung Thuan, Q12, TPHCM"
}

function student(name,age,address) {
    var result = name + ' ' + age + ' ' + SchoolName
    return result;
}

console.log(student(nhu.name,nhu.age,nhu.address))

//Bai 2

var smartPhones = [
    {name: 'iphone', price: 649 },
    {name: 'Galaxy S6', price: 576},
    {name: 'Galaxy Note 5', price: 489},
]
console.log(smartPhones.map(smartPhones => smartPhones.price))

//Bai 3


hello = () => { return 'Hello';}
var foo = (a,b) => {return(a+b*100)};