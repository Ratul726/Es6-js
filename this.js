class Person {
    constructor (name,age){
        this.name = name;
        this.age =age;
    }
    sleep(){
        console.log(`Sleeping now ${this.name}`)
    }

    activity (){
        this.sleep()
    }
}
const kodom = new Person ('kodom Ali',25)
// console.log(kodom)
kodom.sleep()

const badam = new Person ('badam',25);
badam.sleep()

const person = {
    name : 'kodom ali',
    job : 'badam khai'
}
const prop = 'job' 
console.log(person.job)
console.log(person['name'])
console.log(person[prop])