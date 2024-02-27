const products = [
{id : 1, name :'macBook' ,price : 152000} ,   
{id : 2, name :'lenove' ,price : 62000},
{id : 3, name :'HP' ,price : 42000},
{id : 4, name :'Dell' ,price : 65000},
{id : 5, name :'Lenux' ,price : 52000}    
]



class Product {
    country = 'Bangladesh';
    constructor (name) {
        this.name = name
    }
    ratul (takl){
        console.log(`Talking about ${takl}` )
    }
}

const lenevo = new Product('Ratul bhaya')
console.log(lenevo)
lenevo.ratul('Hello world!')

class Teacher  {
    speck (clas){
        console.log(`Ia'm use a Class ${clas}`)
    }
    constructor (name,age,fvrtFood,fvrtSub){
        this.name = name;
        this.age = age;
        this.fvrtFood=fvrtFood;
        this.fvrtSub=fvrtSub;
    }
}
const explain = new Teacher('delowar hossain',42,'rice and fish','accounting')
const explai = new Teacher('Rans',42,'rice and fish','accounting')
console.log(explai)



class Vehicle {
    constructor(name,price){
        this.name = name;
        this.price = price;
    }
   
}

class Bus extends Vehicle {
    constructor (name,price,seat,ticket){
        super(name,price);
        this.seat = seat;
        this.ticket =ticket;
    }
    move() {
        console.log('gari cole na cole cole na re')
    }
}
const add = new Bus ('kakol',500,'C4',1)
console.log(add)
add.move()

















// const selected = products.filter(product => product.price < 82000)
// console.log(selected)